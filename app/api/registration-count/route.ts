import { NextRequest, NextResponse } from "next/server";
import { google } from "googleapis";

// Simple in-memory cache
let cachedCount: number | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

function getAuthClient() {
  const clientEmail = process.env.GOOGLE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    throw new Error("Google credentials not configured");
  }

  return new google.auth.JWT({
    email: clientEmail,
    key: privateKey.replace(/\\n/g, "\n"),
    scopes: SCOPES,
  });
}

async function getRegistrationCountFromSheet(): Promise<number> {
  const auth = getAuthClient();
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Google Sheet ID not configured");
  }

  const response = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range: "Sheet1",
  });

  const rows = response.data.values;
  if (!rows || rows.length <= 1) {
    return 0;
  }

  // Subtract header row
  return rows.length - 1;
}

export async function GET(request: NextRequest) {
  try {
    const now = Date.now();
    
    // Check cache
    if (cachedCount !== null && (now - cacheTimestamp) < CACHE_DURATION) {
      return NextResponse.json({
        success: true,
        count: cachedCount,
        cached: true,
        timestamp: new Date().toISOString(),
      });
    }

    // Fetch from Google Sheets
    const count = await getRegistrationCountFromSheet();
    
    // Update cache
    cachedCount = count;
    cacheTimestamp = now;

    return NextResponse.json({
      success: true,
      count,
      cached: false,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching registration count:", error);
    
    // Return fallback response
    return NextResponse.json({
      success: false,
      type: "SERVER_ERROR",
      message: "Unable to fetch registration count",
      fallback: "Registrations Open",
    }, { status: 500 });
  }
}
