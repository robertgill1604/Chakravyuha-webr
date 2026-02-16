import { google } from "googleapis";
import { sanitizeString, generateRegistrationId } from "./utils";

const SCOPES = [
  "https://www.googleapis.com/auth/drive",
  "https://www.googleapis.com/auth/spreadsheets",
];

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

export async function uploadToDrive(
  file: Buffer,
  filename: string,
  mimeType: string
): Promise<string> {
  const auth = getAuthClient();
  const drive = google.drive({ version: "v3", auth });
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;

  if (!folderId) {
    throw new Error("Google Drive folder ID not configured");
  }

  const response = await drive.files.create({
    requestBody: {
      name: filename,
      mimeType,
      parents: [folderId],
    },
    media: {
      mimeType,
      body: Buffer.from(file),
    },
  });

  const fileId = response.data.id;
  if (!fileId) {
    throw new Error("Failed to upload file to Drive");
  }

  // Set view-only permissions
  await drive.permissions.create({
    fileId,
    requestBody: {
      role: "reader",
      type: "anyone",
    },
  });

  return `https://drive.google.com/file/d/${fileId}/view`;
}

export async function deleteFromDrive(fileId: string): Promise<void> {
  const auth = getAuthClient();
  const drive = google.drive({ version: "v3", auth });

  await drive.files.delete({ fileId });
}

export async function appendToSheet(data: {
  timestamp: string;
  registrationId: string;
  teamName: string;
  college: string;
  leaderName: string;
  email: string;
  phone: string;
  memberCount: number;
  theme: string;
  projectTitle: string;
  abstract: string;
  pptLink: string;
}): Promise<void> {
  const auth = getAuthClient();
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEET_ID;

  if (!spreadsheetId) {
    throw new Error("Google Sheet ID not configured");
  }

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
          data.email,
          data.phone,
          data.memberCount,
          data.theme,
          sanitizeString(data.projectTitle),
          sanitizeString(data.abstract),
          "Pending", // Payment status
          data.pptLink,
        ],
      ],
    },
  });
}

export async function getRegistrationCount(): Promise<number> {
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
