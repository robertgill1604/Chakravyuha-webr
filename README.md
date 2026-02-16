# CHAKRAVYUHA 2026

State Level 24-Hour Innovation Sprint organized by JJCET, Trichy.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

## Quick Start

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local
# Edit .env.local with your Google credentials

# Run development server
npm run dev

# Open http://localhost:3000
```

## Project Structure

```
chakravyuha/
├── app/              # Next.js App Router
├── components/       # React components
├── lib/             # Utilities & integrations
├── config/          # Configuration files
├── docs/            # Documentation
└── public/          # Static assets
```

## Documentation

- [Setup Guide](./docs/SETUP.md) - Complete Google integration setup
- [API Documentation](./docs/api_v1.0.0.md) - API endpoints and usage
- [Architecture](./docs/architecture_v1.0.0.md) - System architecture
- [Changelog](./docs/CHANGELOG.md) - Version history

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Backend**: Next.js API Routes
- **Storage**: Google Drive + Google Sheets

## Features

- **Team Registration** with file upload
- **Live Registration Counter**
- **Theme Showcase**
- **Event Timeline & Guidelines**
- **Google Drive Integration** (file storage)
- **Google Sheets Integration** (data storage)
- **Rate Limiting** (3 attempts per 10 minutes)
- **Production-safe validation**

## Environment Variables

```env
GOOGLE_CLIENT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_DRIVE_FOLDER_ID=
GOOGLE_SHEET_ID=
RATE_LIMIT_MAX=3
RATE_LIMIT_WINDOW_MS=600000
EVENT_DATE=2026-03-15
EVENT_VENUE=JJCET Campus, Trichy
```

## Deployment

1. Set up environment variables in Vercel
2. Connect GitHub repository
3. Deploy automatically on push

See [Setup Guide](./docs/SETUP.md) for detailed instructions.

## Support

For technical support, refer to the documentation in `/docs` folder.

---

© 2026 JJCET, Trichy. All rights reserved.
