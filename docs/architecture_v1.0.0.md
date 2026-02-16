# Architecture Documentation

## CHAKRAVYUHA - System Architecture v1.0.0

---

## 1. Overview

CHAKRAVYUHA is a **Serverless Web Application** built on Next.js 15 with a clear separation between client and server operations. The architecture prioritizes security, data integrity, and production reliability.

### Architecture Philosophy
- **No external backend server** - All operations via Next.js API Routes
- **No database server** - Google Sheets acts as structured datastore
- **Server-side only** - All Google operations happen server-side
- **Data integrity** - Transaction safety with rollback capabilities

---

## 2. System Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT LAYER                          │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Browser   │  │   Mobile    │  │     Any Device      │  │
│  └──────┬──────┘  └──────┬──────┘  └──────────┬──────────┘  │
└─────────┼────────────────┼────────────────────┼────────────┘
          │                │                    │
          └────────────────┴────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS APPLICATION                       │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              APP ROUTER (app/)                       │   │
│  │  ┌─────────┐ ┌──────────┐ ┌───────────┐ ┌─────────┐ │   │
│  │  │  Home   │ │  Themes  │ │ Register  │ │  etc.   │ │   │
│  │  └─────────┘ └──────────┘ └───────────┘ └─────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │           API ROUTES (app/api/)                      │   │
│  │  ┌────────────────┐  ┌──────────────────────────┐  │   │
│  │  │ /api/register  │  │ /api/registration-count  │  │   │
│  │  └────────────────┘  └──────────────────────────┘  │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              SERVER LIBRARIES (lib/)                 │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌──────────────┐ │   │
│  │  │ googleDrive │  │ googleSheets│  │ rateLimiter  │ │   │
│  │  └─────────────┘  └─────────────┘  └──────────────┘ │   │
│  └─────────────────────────────────────────────────────┘   │
└──────────────────────────┬──────────────────────────────────┘
                           │
          ┌────────────────┼────────────────┐
          │                │                │
          ▼                ▼                ▼
┌─────────────────┐ ┌──────────────┐ ┌─────────────────┐
│   GOOGLE DRIVE  │ │ GOOGLE SHEETS│ │   IN-MEMORY     │
│   (File Storage)│ │  (Database)  │ │   RATE LIMITER  │
│                 │ │              │ │                 │
│ - PPT uploads   │ │ - Team data  │ │ - IP tracking   │
│ - PDF storage   │ │ - Metadata   │ │ - 3 req/10min   │
│ - View-only     │ │ - Count rows │ │ - Cleanup       │
└─────────────────┘ └──────────────┘ └─────────────────┘
```

---

## 3. Component Architecture

### 3.1 Client Components

Client components handle user interaction and form state:

```
components/
├── Navbar.tsx           # Navigation with mobile menu
├── Footer.tsx           # Site footer with links
├── Hero.tsx            # Hero section with CTAs
├── SectionWrapper.tsx  # Animated section container
├── ThemeCard.tsx       # Theme display component
├── Timeline.tsx        # Event schedule display
├── RegistrationForm.tsx # Multi-step registration
├── FacilitiesGrid.tsx  # Venue amenities grid
└── Countdown.tsx       # Event countdown timer
```

**Responsibilities:**
- User interface rendering
- Form state management (React Hook Form)
- Client-side validation feedback
- Animation orchestration (Framer Motion)
- Event handling

### 3.2 Server Components

Server components render initial HTML for performance:

```
app/
├── layout.tsx          # Root layout (server)
├── page.tsx           # Home page (server)
├── themes/page.tsx    # Themes page (server)
├── guidelines/page.tsx # Guidelines (server)
└── contact/page.tsx   # Contact page (server)
```

**Responsibilities:**
- Initial HTML generation
- SEO optimization
- Static content delivery
- Reduced client-side JavaScript

---

## 4. API Architecture

### 4.1 Registration Flow

```
┌──────────┐     ┌──────────────┐     ┌─────────────────┐
│  Client  │────▶│ POST /api/   │────▶│  Parse Form     │
│          │     │   register   │     │  Data           │
└──────────┘     └──────────────┘     └─────────────────┘
                                              │
                                              ▼
┌──────────┐     ┌──────────────┐     ┌─────────────────┐
│  Return  │◀────│   Response   │◀────│  Transaction    │
│  Result  │     │              │     │  Complete       │
└──────────┘     └──────────────┘     └─────────────────┘
                                              ▲
                                              │
┌──────────┐     ┌──────────────┐     ┌─────────────────┐
│  Rollback│────▶│  Delete File │◀────│  Upload to      │
│  (if fail)│     │  (if needed) │     │  Google Drive   │
└──────────┘     └──────────────┘     └─────────────────┘
                                              │
                                              ▼
                                       ┌─────────────────┐
                                       │  Append to      │
                                       │  Google Sheets  │
                                       └─────────────────┘
```

### 4.2 Data Flow

**Request Flow:**
1. Client submits form (multipart/form-data)
2. Server parses and validates data
3. File uploaded to Google Drive
4. Metadata appended to Google Sheets
5. Response returned to client

**Error Handling:**
- Validation errors → 400 with structured message
- Rate limit exceeded → 429 with retry info
- Server errors → 500 without stack trace exposure
- Drive success + Sheet fail → Rollback (delete file)

---

## 5. Google Integration Architecture

### 5.1 Authentication

```
┌─────────────────────────────────────────────┐
│         GOOGLE CLOUD PLATFORM               │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │      Service Account                │   │
│  │  - Dedicated service account         │   │
│  │  - JSON key file                     │   │
│  │  - Domain-wide delegation (optional) │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │      API Permissions                │   │
│  │  - Google Drive API (read/write)    │   │
│  │  - Google Sheets API (append/read)  │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### 5.2 Google Drive Integration

**Purpose:** Store uploaded PPT/PDF files

**Implementation:**
- Files uploaded to designated folder
- Permission set to "view-only"
- Public shareable link stored in Sheets
- File naming: `{registrationId}_{originalName}`

### 5.3 Google Sheets Integration

**Purpose:** Structured data storage

**Sheet Structure:**
```
| Timestamp | Registration ID | Team Name | College | Leader | Email | Phone | Members | Theme | Project Title | Abstract | Payment Status | PPT Link |
```

**Operations:**
- Append new registrations
- Count rows for live counter
- Manual updates for payment status

---

## 6. Security Architecture

### 6.1 Data Protection

```
┌─────────────────────────────────────────────┐
│           SECURITY LAYERS                   │
│                                             │
│  Layer 1: Environment Variables             │
│  - Credentials never in client bundle        │
│  - Separate configs for dev/prod            │
│                                             │
│  Layer 2: Server-Side Operations            │
│  - All Google APIs server-only              │
│  - No client-side API keys                  │
│                                             │
│  Layer 3: Input Validation                  │
│  - Zod schema validation                    │
│  - File type/size restrictions              │
│  - Sanitization of user inputs              │
│                                             │
│  Layer 4: Rate Limiting                     │
│  - 3 requests per IP per 10 minutes         │
│  - In-memory tracking                       │
│  - Honeypot spam protection                 │
│                                             │
│  Layer 5: Error Handling                    │
│  - No stack traces in production            │
│  - Structured error responses               │
│  - Transaction rollback on failure          │
└─────────────────────────────────────────────┘
```

### 6.2 File Upload Security

- **Size limit:** 20MB maximum
- **Type whitelist:** application/pdf, application/vnd.ms-powerpoint, application/vnd.openxmlformats-officedocument.presentationml.presentation
- **Signature validation:** Check MIME type matches file extension
- **Storage:** Isolated folder in Google Drive

---

## 7. Rate Limiting Architecture

### 7.1 Implementation

```typescript
// In-memory rate limiter
const rateLimiter = {
  attempts: Map<ip: string, attempts: number>,
  timestamps: Map<ip: string, timestamp: number>,
  
  check(ip): boolean {
    // Check if IP exceeded limit
    // Clean up expired entries
    // Track new attempts
  }
}
```

### 7.2 Behavior

- **Limit:** 3 submissions per IP per 10 minutes
- **Storage:** In-memory (resets on server restart)
- **Response:** 429 Too Many Requests with retry-after header
- **Cleanup:** Automatic expiration of old entries

---

## 8. Performance Architecture

### 8.1 Optimization Strategies

```
┌─────────────────────────────────────────────┐
│         PERFORMANCE TARGETS                 │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  Lighthouse Scores                  │   │
│  │  - Performance: >90                 │   │
│  │  - Accessibility: >90               │   │
│  │  - Best Practices: >90              │   │
│  │  - SEO: >90                         │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  Strategies:                                │
│  - Server Components for static content     │
│  - Dynamic imports for heavy components     │
│  - Image optimization (Next.js Image)       │
│  - Font optimization (next/font)            │
│  - CSS optimization (Tailwind purge)        │
│  - API response caching (5 min for count)   │
└─────────────────────────────────────────────┘
```

### 8.2 Caching Strategy

- **Registration Count:** 5-minute in-memory cache
- **Static Assets:** Next.js automatic optimization
- **API Responses:** Short-term cache for read operations

---

## 9. Error Handling Architecture

### 9.1 Error Types

| Type | HTTP Status | Description |
|------|-------------|-------------|
| VALIDATION_ERROR | 400 | Invalid input data |
| RATE_LIMIT_ERROR | 429 | Too many requests |
| FILE_ERROR | 400 | Invalid file upload |
| SERVER_ERROR | 500 | Internal server error |

### 9.2 Error Response Format

```json
{
  "success": false,
  "type": "VALIDATION_ERROR",
  "errors": [
    { "field": "email", "message": "Invalid email format" }
  ]
}
```

### 9.3 Transaction Safety

```
Success Path:
  Upload File → Append Sheet → Return Success

Failure Scenarios:
  Upload File ✓ | Append Sheet ✗ → Delete File → Return Error
  Upload File ✗ | - → Return Error
```

---

## 10. Deployment Architecture

### 10.1 Vercel Deployment

```
┌─────────────────────────────────────────────┐
│              VERCEL PLATFORM                │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  Build Process                      │   │
│  │  - TypeScript compilation            │   │
│  │  - Tailwind CSS processing           │   │
│  │  - Next.js static optimization       │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  Runtime Environment                │   │
│  │  - Serverless Functions              │   │
│  │  - Edge Network                      │   │
│  │  - Environment Variables             │   │
│  └─────────────────────────────────────┘   │
│                                             │
│  ┌─────────────────────────────────────┐   │
│  │  Domain & SSL                       │   │
│  │  - Custom domain support             │   │
│  │  - Automatic SSL                     │   │
│  │  - CDN distribution                  │   │
│  └─────────────────────────────────────┘   │
└─────────────────────────────────────────────┘
```

### 10.2 Environment Separation

- **Development:** `.env.local` file
- **Production:** Vercel Environment Variables
- **No overlap:** Different credentials for each environment

---

## 11. Scalability Considerations

### 11.1 Current Limits

- **Rate Limiting:** 3 req/10min per IP (configurable)
- **File Size:** 20MB maximum
- **Concurrent Users:** Unlimited (serverless)
- **Data Storage:** Google Sheets limit (5M cells)

### 11.2 Future Scaling

- **Rate Limiter:** Move to Redis for distributed systems
- **Database:** Migrate to PostgreSQL if Sheets limits reached
- **Storage:** Google Drive scales automatically
- **CDN:** Vercel Edge Network handles traffic

---

## 12. Monitoring & Debugging

### 12.1 Logging

- Server-side console logs for errors
- Request/response logging (development only)
- No sensitive data in logs

### 12.2 Debugging

- Local development with detailed error messages
- Production: Generic error messages to users
- Vercel dashboard for function logs

---

## 13. Technology Stack Summary

| Category | Technology |
|----------|-----------|
| Framework | Next.js 15 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion |
| Forms | React Hook Form |
| Validation | Zod |
| Icons | Lucide React |
| Google APIs | googleapis |
| Hosting | Vercel |

---

**Document Version:** v1.0.0
**Last Updated:** 2026-02-16
**Author:** CHAKRAVYUHA Development Team
