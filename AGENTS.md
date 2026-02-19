# AGENTS.md - Chakravyuha 2026

> This file provides context to AI assistants (like Claude) working on this project.
> I automatically read this at the start of every session.

## Project Overview

**Chakravyuha 2026** is a production-grade institutional hackathon website for JJCET's State Level 24-Hour Innovation Sprint.

- **Current Version**: v1.1.4 (Production-Ready)
- **Event Date**: March 18, 2026
- **Tech Stack**: Next.js 16 + React 19 + TypeScript 5 + Tailwind CSS 4

## Developer Skills & Aliases

I have custom aliases in `~/skills.sh`. When suggesting commands, prefer these:

### Package Management
- `ni` → npm install
- `nr` → npm run
- `ns` → npm start
- `nb` → npm run build
- `nd` → npm run dev
- `y` → yarn (if preferred)
- `p` → pnpm (if preferred)

### Git Workflow
- `gs` → git status
- `gaa` → git add .
- `gcm "msg"` → git commit -m
- `gp` → git push
- `gl` → git log --oneline
- `gac "msg"` → git add . && git commit -m
- `gacp "msg"` → git add . && commit && push
- `gfeature name` → git checkout -b feature/name
- `gfix name` → git checkout -b fix/name

### Development Utilities
- `nclean` → rm node_modules && reinstall
- `serve [port]` → serve current directory
- `pretty` → run prettier on all files
- `outdated` → check outdated packages
- `killport 3000` → kill process on port

### Project Scaffolding (if creating new projects)
- `mkweb name` → create web project structure
- `mkfullstack name` → create fullstack structure
- `cnext name` → create Next.js app
- `cvite name` → create Vite React app
- `creact name` → create React app
- `tw-init` → setup Tailwind CSS
- `shadcn-init` → setup shadcn/ui
- `sb-init` → setup Storybook
- `mkdesign` → create design system structure

### Design Tools & Assets
- `figma` → open Figma
- `optimize-img` → compress images (png, jpg, webp)
- `convert-webp` → convert images to WebP format
- `sprite-gen` → generate SVG sprite sheet
- `svg2react` → convert SVG to React component
- `install-font` → install Google Fonts locally
- `font-subset` → subset fonts for performance
- `favicon-gen` → generate favicon package

### Advanced CSS & Styling
- `sass-init` → setup Sass/SCSS
- `postcss-init` → setup PostCSS with plugins
- `purge-css` → remove unused CSS
- `tokens2css` → generate CSS from design tokens
- `stylelint-init` → setup CSS linting

### Component Libraries
- `mui-init` → setup Material UI
- `chakra-init` → setup Chakra UI
- `antd-init` → setup Ant Design
- `rb-init` → setup React Bootstrap
- `add-shadcn` → add shadcn component
- `list-shadcn` → list all shadcn components

### Animation & Motion
- `fm-init` → install Framer Motion
- `gsap-init` → install GSAP
- `lottie-init` → install Lottie
- `spring-init` → install React Spring
- `keyframes-gen` → generate CSS keyframes

### Forms & Validation
- `rhf-init` → setup React Hook Form + Zod
- `formik-init` → setup Formik + Yup
- `type2zod` → generate Zod schema from TypeScript

### Accessibility & Performance
- `lighthouse` → run Lighthouse audit
- `axe-check` → check accessibility with axe
- `analyze` → bundle analyzer
- `vitals` → check Web Vitals
- `sitemap` → generate sitemap

### Backend & Database
- `prisma-init` → setup Prisma
- `prisma-gen` → generate Prisma client
- `prisma-migrate` → run Prisma migration
- `prisma-studio` → open Prisma Studio
- `mongo-init` → setup MongoDB
- `pg-init` → setup PostgreSQL
- `redis-init` → setup Redis

### API Development
- `trpc-init` → setup tRPC
- `graphql-init` → setup GraphQL
- `axios-init` → setup Axios
- `swr-init` → setup SWR
- `rq-init` → setup React Query

### Authentication
- `nextauth-init` → setup NextAuth.js
- `clerk-init` → setup Clerk
- `sb-auth-init` → setup Supabase Auth
- `firebase-auth-init` → setup Firebase Auth

## Project Commands

```bash
# Development
npm run dev          # Start dev server (localhost:3000)
npm run build        # Production build
npm run start        # Start production server
npm run lint         # Run ESLint

# Quick commands (using aliases)
nd                   # npm run dev
nb                   # npm run build
ns                   # npm start
```

## Architecture & Conventions

### File Structure
```
app/                    # Next.js App Router
├── page.tsx           # Home page
├── layout.tsx         # Root layout
├── globals.css        # Global styles
├── themes/page.tsx    # Theme showcase
├── register/page.tsx  # Registration form
├── api/               # API routes
│   ├── register/route.ts
│   └── registration-count/route.ts
components/            # React components
├── effects/          # Animation effects
├── motion/           # Motion components
├── providers/        # Context providers
lib/                  # Utilities
├── validation.ts     # Zod schemas
├── rateLimiter.ts    # Rate limiting
└── google*.ts        # Google API integrations
config/               # Configuration
docs/                 # Documentation
public/               # Static assets
```

### Naming Conventions
- **Components**: PascalCase (`RegistrationForm.tsx`)
- **Utilities**: camelCase (`rateLimiter.ts`)
- **Constants**: SCREAMING_SNAKE_CASE
- **CSS**: Tailwind classes, custom CSS variables in globals.css

### Design System (STRICT 3-Color)
- **Cyber Green**: `#00ff88` - Primary actions, buttons
- **Cyber Blue**: `#00d4ff` - Links, secondary actions
- **Purple**: `#a855f7` - Accents, highlights
- **Gold**: `#D4AF37` - 1st prize only (special)
- **Background**: `#050810` - Near-black dark theme

### Animation Guidelines
- Use simple transitions over complex springs
- Max 2 keyframes for spring animations
- Stagger delays: 0.1-0.15s between children
- Prefer CSS animations for performance
- Support reduced motion for accessibility

## API Endpoints

- `POST /api/register` - Submit registration
  - Rate limited: 3 attempts per IP per 10 minutes
  - Uploads files to Google Drive
  - Stores data in Google Sheets
  
- `GET /api/registration-count` - Get live registration count
  - Cached for 5 minutes

## Environment Variables

Required in `.env.local`:
```
GOOGLE_CLIENT_EMAIL=
GOOGLE_PRIVATE_KEY=
GOOGLE_DRIVE_FOLDER_ID=
GOOGLE_SHEET_ID=
RATE_LIMIT_MAX=3
RATE_LIMIT_WINDOW_MS=600000
EVENT_DATE=
EVENT_VENUE=
REGISTRATION_DEADLINE=
```

## Key Technical Details

### Form Handling
- **React Hook Form** for state management
- **Zod** for validation schemas
- Server-side validation + rate limiting
- File upload: PDF/PPT/PPTX only, max 20MB

### Google Integration
- Google Drive: Stores uploaded files
- Google Sheets: Stores registration data
- Service Account authentication (server-side only)
- Registration ID format: `CHAK-JJCET-2026-XXXX`

### Security Features
- IP-based rate limiting
- File type validation
- Honeypot field for spam protection
- Transaction safety (rollback on failure)
- No stack traces in production errors

### Performance Targets
- Lighthouse scores: >90 across all categories
- 60fps animations
- Mobile-first, battery-optimized
- Lazy loading for heavy components

## Development Workflow

1. **Start**: `npm run dev` (or `nd`)
2. **Make changes**: Edit files, hot reload
3. **Test**: Check functionality, animations, mobile
4. **Lint**: `npm run lint` (or add to pre-commit)
5. **Build**: `npm run build` (or `nb`)
6. **Commit**: `gacp "message"`
7. **Deploy**: Push to Vercel (auto-deploy)

## Important Notes

- **Production-ready**: v1.1.4 fixed all major bugs
- **Google credentials**: Not configured yet - will see errors until `.env.local` set up
- **Static navbar**: Changed from floating for better UX
- **No rainbow theme**: Strict 3-color system only
- **TypeScript strict mode**: Enabled

## Documentation

All docs are in `/docs`:
- `README.md` - Main documentation
- `SETUP.md` - Google integration setup
- `CHANGELOG.md` - Version history
- `architecture_v1.0.0.md` - System design
- `api_v1.0.0.md` - API specifications
- `REDESIGN-v1.1.0.md` - Design decisions
- `FINAL-SUMMARY-v1.1.4.md` - Production summary
- `DEV-LOG-2026-02-16.md` - Development log
- `DEV-LOG-2026-02-17.md` - Latest development log
- `UI.md` - Comprehensive UI/UX documentation

## When Helping Me

1. **Prefer my aliases** when suggesting commands
2. **Respect the 3-color design system** - don't suggest rainbow themes
3. **Keep animations simple** - 2 keyframes max
4. **Mobile-first** - always consider mobile UX
5. **Check docs/** - reference existing documentation
6. **Follow existing patterns** - look at similar components
7. **Security-conscious** - validate inputs, handle errors gracefully
8. **TypeScript strict** - maintain type safety

## Quick Reference

```bash
# Daily workflow
gs                    # Check status
gaa && gcm "message"  # Quick commit
gp                    # Push

# Development
nd                    # Start dev server
nb                    # Build

# Cleanup
nclean                # Fresh install
pretty                # Format code
```

---

**Last Updated**: 2026-02-17  
**skills.sh Location**: ~/skills.sh  
**Project Root**: C:\Users\aswin-kumar-s\Documents\Programs\Web\Chakravyuha
