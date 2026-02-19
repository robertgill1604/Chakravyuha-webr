# Setup Guide

## CHAKRAVYUHA v1.1.4 - Complete Setup Instructions

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Google Cloud Setup (Already Done)](#2-google-cloud-setup)
3. [Google Drive Configuration](#3-google-drive-configuration)
4. [Google Sheets Setup](#4-google-sheets-setup)
5. [Environment Variables (Already Done)](#5-environment-variables)
6. [Local Development](#6-local-development)
7. [Vercel Deployment](#7-vercel-deployment)
8. [Testing](#8-testing)
9. [Troubleshooting](#9-troubleshooting)

---

## 1. Prerequisites

Before starting, ensure you have:

- [x] Node.js 18 or higher installed
- [x] npm or yarn package manager
- [x] Google account (Gmail)
- [ ] Vercel account (free tier works)
- [x] Git installed

### Verify Node.js Installation

```bash
node --version
npm --version
```

---

## 2. Google Cloud Setup (ALREADY COMPLETE)

Your Google Cloud project is already set up!

- **Project ID:** `chakravyuha-487613`
- **Service Account Email:** `chakravyuha-bot-70@chakravyuha-487613.iam.gserviceaccount.com`
- **APIs Enabled:** Google Drive API, Google Sheets API

The JSON key file is saved at:
`C:\Users\aswin-kumar-s\Downloads\chakravyuha-487613-cf4f1c4f3a27.json`

---

## 3. Google Drive Configuration

### Step 3.1: Create Upload Folder

1. Go to [Google Drive](https://drive.google.com)
2. Click **"New"** → **"Folder"**
3. Name it: `CHAKRAVYUHA-2026-Submissions`
4. Open the folder

### Step 3.2: Get Folder ID

1. Look at the URL in your browser:
   ```
   https://drive.google.com/drive/folders/1ABC123xyz...
   ```
2. Copy the part after `/folders/`:
   - Example: `1ABC123xyz...` (long string of characters)
3. This is your **Folder ID**

### Step 3.3: Share Folder with Service Account

1. Right-click on the folder
2. Click **"Share"**
3. In the "Add people and groups" field:
   - Paste: `chakravyuha-bot-70@chakravyuha-487613.iam.gserviceaccount.com`
4. Set permission to **"Editor"**
5. Click **"Send"**

### Step 3.4: Update .env.local

1. Open `.env.local` in project root
2. Replace `YOUR_DRIVE_FOLDER_ID_HERE` with your folder ID
3. Save the file

---

## 4. Google Sheets Setup

### Step 4.1: Create Registration Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Click **"Blank"** spreadsheet
3. Name it: `CHAKRAVYUHA-2026-Registrations`

### Step 4.2: Add Column Headers

In **Row 1**, enter these exact headers (each in a separate column):

| Column | Header |
|--------|--------|
| A | Timestamp |
| B | Registration ID |
| C | Team Name |
| D | College |
| E | Leader Name |
| F | Email |
| G | Phone |
| H | Member Count |
| I | Theme |
| J | Project Title |
| K | Abstract |
| L | Payment Status |
| M | PPT Link |

**Important:**
- Use exact spelling and spacing
- Row 1 is for headers only
- Data will be appended starting from row 2

### Step 4.3: Get Sheet ID

1. Look at the URL in your browser:
   ```
   https://docs.google.com/spreadsheets/d/1ABC123xyz.../edit
   ```
2. Copy the part between `/d/` and `/edit`:
   - Example: `1ABC123xyz...` (long string)
3. This is your **Sheet ID**

### Step 4.4: Share Sheet with Service Account

1. Click **"Share"** button (top right)
2. In the "Add people and groups" field:
   - Paste: `chakravyuha-bot-70@chakravyuha-487613.iam.gserviceaccount.com`
3. Set permission to **"Editor"**
4. Click **"Send"**

### Step 4.5: Update .env.local

1. Open `.env.local` in project root
2. Replace `YOUR_SHEET_ID_HERE` with your sheet ID
3. Save the file

---

## 5. Environment Variables (ALREADY COMPLETE)

Your `.env.local` file has been created with:

- **GOOGLE_CLIENT_EMAIL:** `chakravyuha-bot-70@chakravyuha-487613.iam.gserviceaccount.com`
- **GOOGLE_PRIVATE_KEY:** (configured from your JSON key)
- **GOOGLE_DRIVE_FOLDER_ID:** `YOUR_DRIVE_FOLDER_ID_HERE` ← **YOU NEED TO FILL THIS**
- **GOOGLE_SHEET_ID:** `YOUR_SHEET_ID_HERE` ← **YOU NEED TO FILL THIS**
- **RATE_LIMIT_MAX:** 3
- **RATE_LIMIT_WINDOW_MS:** 600000
- **EVENT_DATE:** 2026-03-18T09:00:00
- **EVENT_VENUE:** JJCET Campus, Trichy
- **REGISTRATION_DEADLINE:** 2026-03-15T23:59:59

### What You Need to Do:

1. Complete Step 3 (Google Drive) to get Folder ID
2. Complete Step 4 (Google Sheets) to get Sheet ID
3. Update `.env.local` with these IDs

---

## 6. Local Development

### Step 6.1: Install Dependencies

```bash
# Navigate to project directory
cd chakravyuha

# Install dependencies
npm install
```

### Step 6.2: Verify Environment Setup

```bash
# Check .env.local exists
ls -la .env.local

# Should show the file exists
```

### Step 6.3: Run Development Server

```bash
npm run dev
```

You should see:
```
> next dev

  ▲ Next.js 15.x.x
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Starting...
 ✓ Ready in 2.5s
```

### Step 6.4: Test the Application

1. Open browser: `http://localhost:3000`
2. Navigate through pages (Home, Themes, Register, etc.)
3. Test registration form (without file upload first)

### Step 6.5: Test Google Integration

**Test File Upload:**
1. Go to `/register`
2. Fill out the form
3. Upload a small PDF or PPT file (< 1MB for testing)
4. Submit
5. Check:
   - Success message appears
   - File appears in Google Drive folder
   - Row appears in Google Sheet
   - Registration ID is generated

**Test Registration Count:**
1. Go to home page
2. Check if registration counter displays
3. Should match the number of rows in your Sheet (minus header)

---

## 7. Vercel Deployment

### Step 7.1: Push to GitHub (Recommended)

```bash
# Initialize git (if not done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial CHAKRAVYUHA deployment"

# Add remote (replace with your repo URL)
git remote add origin https://github.com/yourusername/chakravyuha.git

# Push
git push -u origin main
```

### Step 7.2: Connect to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Click **"Add New Project"**
4. Import your GitHub repository
5. Select the `chakravyuha` project

### Step 7.3: Configure Build Settings

**Framework Preset:** Next.js (auto-detected)

**Build Command:** (leave default)
```
next build
```

**Output Directory:** (leave default)
```
.next
```

### Step 7.4: Add Environment Variables

In Vercel project settings:

1. Go to **"Settings"** → **"Environment Variables"**
2. Add each variable from your `.env.local`:

| Key | Value |
|-----|-------|
| GOOGLE_CLIENT_EMAIL | chakravyuha-service@... |
| GOOGLE_PRIVATE_KEY | -----BEGIN PRIVATE KEY-----... |
| GOOGLE_DRIVE_FOLDER_ID | your-folder-id |
| GOOGLE_SHEET_ID | your-sheet-id |
| RATE_LIMIT_MAX | 3 |
| RATE_LIMIT_WINDOW_MS | 600000 |
| EVENT_DATE | 2026-03-18T09:00:00 |
| EVENT_VENUE | JJCET Campus, Trichy |

**Important:**
- Copy exact values from `.env.local`
- For `GOOGLE_PRIVATE_KEY`, paste the entire key including quotes
- Select all environments: Production, Preview, Development

### Step 7.5: Deploy

1. Click **"Deploy"**
2. Wait for build (2-5 minutes)
3. Once complete, Vercel provides a URL:
   ```
   https://chakravyuha-xxxx.vercel.app
   ```

### Step 7.6: Verify Production Deployment

1. Visit the Vercel URL
2. Test all pages
3. Submit a test registration
4. Verify:
   - File uploads to Drive
   - Data appears in Sheet
   - Counter updates

---

## 8. Testing

### 8.1 Manual Testing

Test individual components:

1. Open browser at `http://localhost:3000`
2. Test form validation
3. Test utility functions via browser console
4. Verify registration flow end-to-end

### 8.2 Integration Testing

Test complete flows:

**Registration Flow:**
1. Fill form with valid data
2. Upload valid file (PDF, < 5MB)
3. Submit
4. Verify success response
5. Check Drive for file
6. Check Sheet for data

**Error Scenarios:**
1. Submit without file → Should error
2. Upload file > 20MB → Should error
3. Upload invalid type (e.g., .exe) → Should error
4. Submit invalid email → Should error
5. Submit 4 times rapidly → Should rate limit

### 8.3 Load Testing

Test rate limiting:
```bash
# Try 5 rapid submissions (3 should succeed, 2 should be rate limited)
for i in {1..5}; do
  curl -X POST https://your-domain.vercel.app/api/register \
    -F "teamName=Test$i" \
    -F "college=Test" \
    -F "leaderName=Test" \
    -F "email=test$i@test.com" \
    -F "phone=9876543210" \
    -F "memberCount=3" \
    -F "theme=ai-ml" \
    -F "projectTitle=Test" \
    -F "abstract=Test abstract content here"
done
```

---

## 9. Troubleshooting

### 9.1 Common Issues

#### Issue: "Invalid Credentials" Error

**Symptoms:**
- API returns 500
- Console shows "Error: Invalid Credentials"

**Solutions:**
1. Verify `GOOGLE_CLIENT_EMAIL` matches Service Account email
2. Check `GOOGLE_PRIVATE_KEY` format (should include `\n` or actual newlines)
3. Ensure Service Account has Editor access to Drive folder and Sheet
4. Verify APIs are enabled in Google Cloud Console

#### Issue: "File Upload Fails"

**Symptoms:**
- Form submission errors
- No file in Drive

**Solutions:**
1. Check `GOOGLE_DRIVE_FOLDER_ID` is correct
2. Verify Service Account has Editor access to folder
3. Check file size (must be < 20MB)
4. Verify file type (PDF, PPT, PPTX only)

#### Issue: "Sheet Append Fails"

**Symptoms:**
- File uploads but no data in Sheet
- Or: Rollback occurs (file deleted)

**Solutions:**
1. Check `GOOGLE_SHEET_ID` is correct
2. Verify Service Account has Editor access
3. Ensure Sheet has correct headers in row 1
4. Check column count matches (13 columns)

#### Issue: "Rate Limit Not Working"

**Symptoms:**
- Can submit unlimited times
- No 429 errors

**Solutions:**
1. Check `RATE_LIMIT_MAX` and `RATE_LIMIT_WINDOW_MS` are set
2. Verify server is not restarting (in-memory storage resets)
3. For production, consider Redis-based rate limiting

#### Issue: "Environment Variables Not Working"

**Symptoms:**
- App works locally but not on Vercel
- Variables show as undefined

**Solutions:**
1. In Vercel, check variables are added to correct environments
2. Redeploy after adding variables
3. Check for typos in variable names
4. Verify `GOOGLE_PRIVATE_KEY` has proper formatting (newlines)

### 9.2 Debug Mode

Enable detailed logging:

```env
# .env.local
DEBUG=true
```

This will log:
- API request details
- Google API responses
- Error stack traces (server-side only)

### 9.3 Getting Help

If issues persist:

1. Check Vercel function logs:
   - Vercel Dashboard → Project → Functions → Logs

2. Check Google Cloud Console:
   - APIs & Services → Dashboard → view errors

3. Verify setup steps:
   - Re-run through Setup Guide
   - Double-check each value

4. Contact support:
   - Create issue in project repository
   - Include error messages and logs

---

## Quick Reference

### Required Environment Variables

```env
GOOGLE_CLIENT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_DRIVE_FOLDER_ID=
GOOGLE_SHEET_ID=
RATE_LIMIT_MAX=3
RATE_LIMIT_WINDOW_MS=600000
```

### Useful Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run lint         # Run ESLint

# Testing
curl http://localhost:3000/api/registration-count
curl -X POST http://localhost:3000/api/register -F "field=value"
```

### File Structure

```
chakravyuha/
├── .env.local          # Environment variables (gitignored)
├── .env.local.example  # Template
├── docs/               # Documentation
│   ├── README.md
│   ├── SETUP.md
│   ├── CHANGELOG.md
│   ├── architecture_v1.0.0.md
│   └── api_v1.0.0.md
└── app/                # Next.js app
```

---

**Last Updated:** 2026-02-17
**Version:** v1.1.4
