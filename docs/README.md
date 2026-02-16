# CHAKRAVYUHA

State Level 24-Hour Innovation Sprint
Organized by JJCET, Trichy

---

## Project Overview

CHAKRAVYUHA is a production-grade institutional hackathon website built for JJCET's State Level 24-Hour Innovation Sprint. The platform enables team registration, theme exploration, and real-time registration tracking with premium UI quality and robust data integrity guarantees.

### Key Features

- **Team Registration**: Secure multi-step form with file upload
- **Theme Showcase**: Visual exploration of hackathon themes
- **Live Counter**: Real-time registration count display
- **Google Integration**: Automated file storage and data management
- **Premium UI**: Institutional design with controlled motion
- **Accessibility**: WCAG AA compliant
- **Performance**: Lighthouse scores >90

---

## Tech Stack

### Frontend
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod

### Backend (Serverless)
- **API Routes**: Next.js API Routes
- **Storage**: Google Drive (file uploads)
- **Database**: Google Sheets (structured data)
- **Validation**: Zod (schema validation)
- **Rate Limiting**: In-memory IP-based

### Infrastructure
- **Hosting**: Vercel
- **CI/CD**: Git-based deployment
- **Environment**: .env.local (dev) / Vercel (prod)

---

## Setup Instructions

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Google Cloud Platform account
- Vercel account (for deployment)

### Local Development

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chakravyuha
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your Google credentials
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open browser**
   Navigate to `http://localhost:3000`

### Detailed Setup Guide

For complete Google integration setup (Drive API, Sheets API, Service Account), see:
- [`/docs/SETUP.md`](./SETUP.md)

---

## Environment Variables

### Required Variables

```env
# Google Service Account
GOOGLE_CLIENT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----"

# Google Drive
GOOGLE_DRIVE_FOLDER_ID=your-drive-folder-id

# Google Sheets
GOOGLE_SHEET_ID=your-sheet-id

# Rate Limiting
RATE_LIMIT_MAX=3
RATE_LIMIT_WINDOW_MS=600000

# Event Configuration
EVENT_DATE=2026-03-15
EVENT_VENUE="JJCET Campus, Trichy"
```

### Optional Variables

```env
# Development
NEXT_PUBLIC_APP_URL=http://localhost:3000

# Monitoring (optional)
SENTRY_DSN=
```

---

## Deployment Instructions

### Vercel Deployment

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial production deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework preset: Next.js

3. **Configure Environment Variables**
   Add all variables from `.env.local` in Vercel dashboard:
   - Settings → Environment Variables
   - Add each variable
   - Select environments (Production, Preview, Development)

4. **Deploy**
   - Click "Deploy"
   - Vercel will build and deploy automatically

5. **Verify Deployment**
   - Check live URL
   - Test registration flow
   - Verify Google integrations

### Pre-Deployment Checklist

- [ ] All environment variables configured
- [ ] Google Drive API enabled
- [ ] Google Sheets API enabled
- [ ] Service account has Drive/Sheets permissions
- [ ] Rate limiting tested
- [ ] File upload tested (max 20MB)
- [ ] Error handling verified
- [ ] No console errors
- [ ] No hydration mismatches

---

## Folder Structure

```
chakravyuha/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with fonts
│   ├── page.tsx                 # Home page
│   ├── globals.css              # Global styles
│   ├── themes/
│   │   └── page.tsx             # Themes page
│   ├── register/
│   │   └── page.tsx             # Registration page
│   ├── guidelines/
│   │   └── page.tsx             # Guidelines page
│   ├── contact/
│   │   └── page.tsx             # Contact page
│   └── api/
│       ├── register/
│       │   └── route.ts         # Registration API
│       └── registration-count/
│           └── route.ts         # Count API
├── components/                   # React components
│   ├── Navbar.tsx               # Navigation
│   ├── Footer.tsx               # Footer
│   ├── Hero.tsx                 # Hero section
│   ├── SectionWrapper.tsx       # Animated section wrapper
│   ├── ThemeCard.tsx            # Theme display card
│   ├── Timeline.tsx             # Event timeline
│   ├── RegistrationForm.tsx     # Registration form
│   ├── FacilitiesGrid.tsx       # Facilities display
│   └── Countdown.tsx            # Event countdown
├── lib/                         # Utilities & integrations
│   ├── googleDrive.ts           # Google Drive API
│   ├── googleSheets.ts          # Google Sheets API
│   ├── validation.ts            # Zod schemas
│   ├── rateLimiter.ts           # Rate limiting logic
│   └── utils.ts                 # Helper functions
├── config/                      # Configuration
│   └── eventConfig.ts           # Event constants
├── docs/                        # Documentation
│   ├── README.md                # This file
│   ├── CHANGELOG.md             # Version history
│   ├── architecture_v1.0.0.md   # Architecture docs
│   ├── api_v1.0.0.md            # API documentation
│   └── SETUP.md                 # Setup guide
├── public/                      # Static assets
│   └── ...
├── .env.local                   # Environment variables (gitignored)
├── .env.local.example           # Environment template
├── next.config.js               # Next.js config
├── tailwind.config.ts           # Tailwind config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies
```

---

## API Documentation

See [`/docs/api_v1.0.0.md`](./api_v1.0.0.md) for detailed API specifications.

### Endpoints

- `POST /api/register` - Submit registration
- `GET /api/registration-count` - Get registration count

---

## Architecture

See [`/docs/architecture_v1.0.0.md`](./architecture_v1.0.0.md) for system architecture details.

---

## Version History

See [`/docs/CHANGELOG.md`](./CHANGELOG.md) for version history.

**Current Version**: v1.0.0

---

## Support

For technical issues or questions:
- Create an issue in the repository
- Contact: [your-email@example.com]

---

## License

Proprietary - JJCET, Trichy
