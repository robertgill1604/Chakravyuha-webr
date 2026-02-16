# API Documentation

## CHAKRAVYUHA API v1.0.0

---

## Base URL

```
Development: http://localhost:3000
Production:  https://your-domain.vercel.app
```

---

## Endpoints Overview

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/register` | Submit team registration |
| GET | `/api/registration-count` | Get total registration count |

---

## 1. POST /api/register

Submit a new team registration with file upload.

### Request

**Content-Type:** `multipart/form-data`

**Rate Limit:** 3 requests per IP per 10 minutes

#### Request Body

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| teamName | string | Yes | Team name (3-50 chars) |
| college | string | Yes | Institution name (3-100 chars) |
| leaderName | string | Yes | Team leader name (3-50 chars) |
| email | string | Yes | Valid email address |
| phone | string | Yes | 10-digit mobile number |
| memberCount | number | Yes | 2-5 members |
| theme | string | Yes | Selected theme ID |
| projectTitle | string | Yes | Project title (5-100 chars) |
| abstract | string | Yes | Project abstract (50-1000 chars) |
| pptFile | file | Yes | PPT/PPTX/PDF file (max 20MB) |
| honeypot | string | No | Anti-spam field (must be empty) |

#### Example Request

```bash
curl -X POST http://localhost:3000/api/register \
  -H "Content-Type: multipart/form-data" \
  -F "teamName=Tech Titans" \
  -F "college=JJCET" \
  -F "leaderName=John Doe" \
  -F "email=john@example.com" \
  -F "phone=9876543210" \
  -F "memberCount=4" \
  -F "theme=ai-ml" \
  -F "projectTitle=Smart Campus AI" \
  -F "abstract=An AI-powered campus management system..." \
  -F "pptFile=@/path/to/presentation.pptx"
```

### Responses

#### Success Response (200 OK)

```json
{
  "success": true,
  "registrationId": "CHAK-JJCET-2026-7482",
  "message": "Registration successful",
  "data": {
    "teamName": "Tech Titans",
    "email": "john@example.com",
    "pptLink": "https://drive.google.com/file/d/.../view"
  }
}
```

**Fields:**
- `success` (boolean): Always true for success
- `registrationId` (string): Unique registration identifier
- `message` (string): Human-readable success message
- `data` (object): Additional registration details

#### Validation Error (400 Bad Request)

```json
{
  "success": false,
  "type": "VALIDATION_ERROR",
  "errors": [
    {
      "field": "email",
      "message": "Invalid email format"
    },
    {
      "field": "pptFile",
      "message": "File size exceeds 20MB limit"
    }
  ]
}
```

**Fields:**
- `success` (boolean): Always false for errors
- `type` (string): Error type identifier
- `errors` (array): List of validation errors with field names

#### Rate Limit Error (429 Too Many Requests)

```json
{
  "success": false,
  "type": "RATE_LIMIT_ERROR",
  "message": "Too many registration attempts. Please try again after 10 minutes.",
  "retryAfter": 600
}
```

**Fields:**
- `retryAfter` (number): Seconds until next allowed request

#### File Error (400 Bad Request)

```json
{
  "success": false,
  "type": "FILE_ERROR",
  "message": "Invalid file type. Only PDF, PPT, and PPTX files are allowed."
}
```

#### Server Error (500 Internal Server Error)

```json
{
  "success": false,
  "type": "SERVER_ERROR",
  "message": "An unexpected error occurred. Please try again later."
}
```

**Note:** No stack traces or internal details are exposed in production.

### Validation Rules

#### Team Information
- **teamName**: 3-50 characters, alphanumeric with spaces
- **college**: 3-100 characters
- **leaderName**: 3-50 characters, letters and spaces only

#### Contact Information
- **email**: Valid email format (RFC 5322)
- **phone**: Exactly 10 digits, Indian mobile format

#### Team Composition
- **memberCount**: Integer between 2 and 5 (inclusive)

#### Project Details
- **theme**: Must be one of predefined theme IDs
- **projectTitle**: 5-100 characters
- **abstract**: 50-1000 characters

#### File Upload
- **Size**: Maximum 20MB
- **Types**: 
  - `application/pdf` (PDF)
  - `application/vnd.ms-powerpoint` (PPT)
  - `application/vnd.openxmlformats-officedocument.presentationml.presentation` (PPTX)
- **Validation**: MIME type checked against file signature

---

## 2. GET /api/registration-count

Retrieve the current number of registered teams.

### Request

**Method:** `GET`

**Rate Limit:** None (public endpoint)

**Cache:** 5-minute server-side cache

#### Example Request

```bash
curl http://localhost:3000/api/registration-count
```

### Responses

#### Success Response (200 OK)

```json
{
  "success": true,
  "count": 42,
  "cached": false,
  "timestamp": "2026-02-16T10:30:00.000Z"
}
```

**Fields:**
- `success` (boolean): Always true
- `count` (number): Total registered teams
- `cached` (boolean): Whether response is from cache
- `timestamp` (string): ISO 8601 timestamp of response

#### Error Response (500 Internal Server Error)

```json
{
  "success": false,
  "type": "SERVER_ERROR",
  "message": "Unable to fetch registration count",
  "fallback": "Registrations Open"
}
```

**Fields:**
- `fallback` (string): Client-side display text when count unavailable

---

## Error Handling

### HTTP Status Codes

| Status | Meaning |
|--------|---------|
| 200 | Success |
| 400 | Bad Request (validation/file error) |
| 429 | Too Many Requests (rate limit) |
| 500 | Internal Server Error |

### Error Types

```typescript
type ErrorType = 
  | "VALIDATION_ERROR"    // Input validation failed
  | "FILE_ERROR"         // File upload issue
  | "RATE_LIMIT_ERROR"   // Rate limit exceeded
  | "SERVER_ERROR";      // Internal server error
```

### Client-Side Handling

```typescript
// Example error handling
async function submitRegistration(formData: FormData) {
  const response = await fetch('/api/register', {
    method: 'POST',
    body: formData
  });
  
  const data = await response.json();
  
  if (!data.success) {
    switch (data.type) {
      case 'VALIDATION_ERROR':
        // Display field-specific errors
        data.errors.forEach(error => {
          showFieldError(error.field, error.message);
        });
        break;
        
      case 'RATE_LIMIT_ERROR':
        // Show retry message
        showError(`Please try again in ${data.retryAfter / 60} minutes`);
        break;
        
      case 'SERVER_ERROR':
        // Generic error message
        showError(data.message);
        break;
    }
    return;
  }
  
  // Handle success
  showSuccess(`Registered! ID: ${data.registrationId}`);
}
```

---

## Data Flow

### Registration Process

```
1. Client Validation
   └─ React Hook Form + Zod schema
   
2. Server Validation
   └─ Zod schema + file validation
   
3. Rate Limit Check
   └─ IP-based limiting (3/10min)
   
4. File Upload
   └─ Google Drive API
   └─ Set view-only permissions
   
5. Data Storage
   └─ Google Sheets append
   
6. Response
   └─ Registration ID returned
```

### Transaction Safety

```
Upload Success + Sheet Success = Complete ✓
Upload Success + Sheet Fail = Rollback (delete file) ✗
Upload Fail = Abort ✗
```

---

## Google Sheets Structure

### Sheet: Registrations

| Column | Header | Type | Description |
|--------|--------|------|-------------|
| A | Timestamp | DateTime | ISO 8601 timestamp |
| B | Registration ID | String | CHAK-JJCET-2026-XXXX |
| C | Team Name | String | Team name |
| D | College | String | Institution |
| E | Leader Name | String | Team leader |
| F | Email | String | Contact email |
| G | Phone | String | 10-digit number |
| H | Member Count | Number | 2-5 |
| I | Theme | String | Selected theme |
| J | Project Title | String | Project name |
| K | Abstract | String | Description |
| L | Payment Status | String | Pending/Paid |
| M | PPT Link | String | Drive URL |

**Note:** Header row is row 1. Data starts from row 2.

---

## Rate Limiting

### Configuration

```env
RATE_LIMIT_MAX=3
RATE_LIMIT_WINDOW_MS=600000  # 10 minutes
```

### Behavior

- Counter stored in-memory per IP
- Window resets after 10 minutes
- Applies only to `/api/register`
- Returns 429 with `Retry-After` header

### Headers

```http
X-RateLimit-Limit: 3
X-RateLimit-Remaining: 2
X-RateLimit-Reset: 1708083600
```

---

## Security Considerations

### Data Protection
- All Google API calls server-side only
- No credentials exposed to client
- Environment variables for secrets
- File type whitelist enforcement

### Input Sanitization
- String trimming
- HTML escape prevention
- File signature validation
- MIME type verification

### Anti-Spam
- Honeypot field detection
- Rate limiting per IP
- Timestamp validation (future)

---

## Version History

| Version | Date | Changes |
|---------|------|---------|
| v1.0.0 | 2026-02-16 | Initial API release |

---

**API Version:** v1.0.0
**Documentation Date:** 2026-02-16
