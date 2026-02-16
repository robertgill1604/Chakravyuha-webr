import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";
import { z } from "zod";
import { checkRateLimit } from "@/lib/rateLimiter";
import { generateRegistrationId, sanitizeString } from "@/lib/utils";

const SHEET_SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
];

function getSheetAuth() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error("Google credentials not configured");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: SHEET_SCOPES,
  });
}

async function appendToSheet(data: {
  timestamp: string;
  registrationId: string;
  teamName: string;
  college: string;
  leaderName: string;
  leaderEmail: string;
  leaderPhone: string;
  memberCount: number;
  members: string;
  theme: string;
  projectTitle: string;
  abstract: string;
  pptLink: string;
}): Promise<void> {
  const auth = getSheetAuth();
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Google Sheet ID not configured");
  }

  // Check if headers exist, if not add them
  const headerRange = "Sheet1!1:1";
  const headerCheck = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: headerRange,
  });

  const headers = [
    "Timestamp",
    "Registration ID",
    "Team Name",
    "College",
    "Leader Name",
    "Leader Email",
    "Leader Phone",
    "Member Count",
    "Members",
    "Theme",
    "Project Title",
    "Abstract",
    "Status",
    "PPT Link",
  ];

  if (!headerCheck.data.values || headerCheck.data.values.length === 0) {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [headers],
      },
    });
  }

  // Append data
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: "Sheet1",
    valueInputOption: "USER_ENTERED",
    requestBody: {
      values: [
        [
          data.timestamp,
          data.registrationId,
          sanitizeString(data.teamName),
          sanitizeString(data.college),
          sanitizeString(data.leaderName),
          data.leaderEmail,
          data.leaderPhone,
          data.memberCount,
          data.members,
          data.theme,
          sanitizeString(data.projectTitle),
          sanitizeString(data.abstract),
          "Pending",
          data.pptLink,
        ],
      ],
    },
  });
}

const registrationSchema = z.object({
  teamName: z.string().min(3).max(50).regex(/^[a-zA-Z0-9\s]+$/),
  college: z.string().min(3).max(100),
  leaderName: z.string().min(3).max(50).regex(/^[a-zA-Z\s]+$/),
  email: z.string().email(),
  phone: z.string().regex(/^\d{10}$/),
  memberCount: z.string().transform((val) => parseInt(val, 10)),
  theme: z.string().min(1),
  projectTitle: z.string().min(5).max(100),
  abstract: z.string().min(50).max(1000),
  pptLink: z.string().url().min(1),
  members: z.string(),
  honeypot: z.string().max(0).optional(),
});

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    const rateLimitResult = checkRateLimit(ip);
    
    if (!rateLimitResult.allowed) {
      return NextResponse.json(
        {
          success: false,
          type: "RATE_LIMIT_ERROR",
          message: `Too many registration attempts. Please try again after ${Math.ceil(rateLimitResult.retryAfter! / 60)} minutes.`,
          retryAfter: rateLimitResult.retryAfter,
        },
        { 
          status: 429,
          headers: {
            "Retry-After": String(rateLimitResult.retryAfter),
          }
        }
      );
    }

    const formData = await request.formData();
    
    // Honeypot check
    const honeypot = formData.get("honeypot") as string;
    if (honeypot && honeypot.length > 0) {
      return NextResponse.json(
        { success: false, type: "VALIDATION_ERROR", message: "Spam detected" },
        { status: 400 }
      );
    }

    // Validate form data
    const rawData = {
      teamName: formData.get("teamName") as string,
      college: formData.get("college") as string,
      leaderName: formData.get("leaderName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      memberCount: formData.get("memberCount") as string,
      theme: formData.get("theme") as string,
      projectTitle: formData.get("projectTitle") as string,
      abstract: formData.get("abstract") as string,
      pptLink: formData.get("pptLink") as string,
      members: formData.get("members") as string,
      honeypot,
    };

    const validationResult = registrationSchema.safeParse(rawData);
    
    if (!validationResult.success) {
      const errorMessages = validationResult.error.issues.map((issue) => `${issue.path.join('.')}: ${issue.message}`);
      
      return NextResponse.json(
        {
          success: false,
          type: "VALIDATION_ERROR",
          message: errorMessages.join(', '),
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Parse members
    const members = JSON.parse(data.members || "[]");

    // Generate registration ID
    const registrationId = generateRegistrationId();
    const timestamp = new Date().toISOString();

    // Format members as readable string for sheet
    const membersString = members.map((m: { name: string; email: string; phone: string }, i: number) => 
      `Member ${i + 2}: ${m.name} | ${m.email} | ${m.phone}`
    ).join("; ");

    // Append to Sheet
    try {
      await appendToSheet({
        timestamp,
        registrationId,
        teamName: data.teamName,
        college: data.college,
        leaderName: data.leaderName,
        leaderEmail: data.email,
        leaderPhone: data.phone,
        memberCount: data.memberCount,
        members: membersString || "No additional members",
        theme: data.theme,
        projectTitle: data.projectTitle,
        abstract: data.abstract,
        pptLink: data.pptLink,
      });
    } catch (error) {
      console.error("Sheet append error:", error);
      return NextResponse.json(
        {
          success: false,
          type: "SERVER_ERROR",
          message: "Failed to complete registration. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        registrationId,
        message: "Registration successful",
        data: {
          teamName: data.teamName,
          email: data.email,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Registration error:", error);
    return NextResponse.json(
      {
        success: false,
        type: "SERVER_ERROR",
        message: "An unexpected error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
