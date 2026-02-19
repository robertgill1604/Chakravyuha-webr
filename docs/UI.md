# CHAKRAVYUHA 2026 - UI/UX Documentation

> Comprehensive guide to the user interface and user experience design of the CHAKRAVYUHA 2026 hackathon website.
> Version: 1.1.4 | Last Updated: 2026-02-17

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Color System](#2-color-system)
3. [Typography](#3-typography)
4. [Spacing & Layout](#4-spacing--layout)
5. [Visual Effects](#5-visual-effects)
6. [Component Specifications](#6-component-specifications)
7. [Animation System](#7-animation-system)
8. [Responsive Design](#8-responsive-design)
9. [Accessibility](#9-accessibility)
10. [User Flows](#10-user-flows)
11. [Interactive Elements](#11-interactive-elements)
12. [Micro-Interactions](#12-micro-interactions)
13. [State Management](#13-state-management)
14. [Page-Specific UX](#14-page-specific-ux)

---

## 1. Design Philosophy

### Core Concept
The CHAKRAVYUHA 2026 website embodies a **cyberpunk institutional aesthetic** that balances cutting-edge futuristic visuals with the professionalism expected of a college-organized hackathon. The design draws inspiration from high-tech summits and innovation conferences while maintaining accessibility for students and professionals.

### Design Principles

#### 1.1 Professional yet Futuristic
- Dark backgrounds create an immersive, premium feel
- Neon accent colors evoke technology and innovation
- Clean typography maintains readability and professionalism
- Institutional branding elements (college logo, accreditation badges) remain prominent

#### 1.2 Controlled Chaos
- Animations are purposeful, not decorative
- Motion enhances understanding rather than distracting
- Subtle effects create depth without overwhelming users
- Each interaction has clear feedback mechanisms

#### 1.3 Mobile-First Approach
- Core experience works perfectly on mobile devices
- Touch targets meet accessibility standards (44px minimum)
- Animations reduce in complexity on smaller screens
- Layouts stack gracefully without information loss

#### 1.4 Accessibility as Foundation
- High contrast ratios for text readability
- Keyboard navigation support throughout
- Focus indicators on all interactive elements
- Respects `prefers-reduced-motion` preferences

---

## 2. Color System

### 2.1 Primary Color Palette (Strict 3-Color System)

The website uses a strict three-color palette for brand consistency:

| Color Name | Hex Code | RGB | Usage |
|------------|----------|-----|-------|
| **Cyber Green** | `#00ff88` | 0, 255, 136 | Primary actions, CTAs, success states, main accents |
| **Cyber Blue** | `#00d4ff` | 0, 212, 255 | Secondary actions, links, informational elements |
| **Cyber Purple** | `#a855f7` | 168, 85, 247 | Accents, highlights, special elements |

#### Color Psychology

**Cyber Green (`#00ff88`)**
- Represents: Growth, energy, innovation
- Usage: Primary buttons, registration CTA, active states, success messages
- Contrast: Excellent on dark backgrounds (7.5:1 ratio)

**Cyber Blue (`#00d4ff`)**
- Represents: Trust, technology, clarity
- Usage: Navigation links, secondary buttons, information badges
- Contrast: Strong on dark backgrounds (6.8:1 ratio)

**Cyber Purple (`#a855f7`)**
- Represents: Creativity, premium feel, uniqueness
- Usage: Special highlights, timeline nodes, decorative elements
- Contrast: Good on dark backgrounds (5.9:1 ratio)

### 2.2 Special Accent Colors

| Color Name | Hex Code | Usage |
|------------|----------|-------|
| **Cyber Gold** | `#D4AF37` | First prize only, special event highlights |
| **Error Red** | `#ef4444` | Error states, validation failures |
| **Warning Yellow** | `#f59e0b` | Warning messages, attention indicators |

### 2.3 Background Colors

| Name | Hex Code | Usage |
|------|----------|-------|
| **Background Primary** | `#050810` | Main page background |
| **Background Secondary** | `#0a0f1a` | Section backgrounds, cards |
| **Background Card** | `#111827` | Card surfaces, form inputs |
| **Background Deep** | `#070B14` | Layout body, overlays |

### 2.4 Text Colors

| Name | Hex Code | Opacity | Usage |
|------|----------|---------|-------|
| **Text Primary** | `#FFFFFF` | 100% | Headings, important text |
| **Text Secondary** | `#FFFFFF` | 80% | Body text, descriptions |
| **Text Muted** | `#FFFFFF` | 50% | Captions, placeholders, hints |

### 2.5 Extended Palette (CSS Variables Defined but Not Active)

The codebase defines additional palettes for potential future use, but they are not actively used in the current design:

- **Neon Extended**: Pink (#ff00ff), Yellow (#ffff00), Orange (#ff6b00)
- **Warm Palette**: Orange (#ff6b35), Peach (#f7c59f), Gold (#efa00b)
- **Pastel Palette**: Pink, Green, Blue, Yellow variants
- **Ocean Palette**: Teal (#00b4d8), Blue (#0077b6), Cyan (#90e0ef)
- **Forest Palette**: Green (#2d6a4f), Light (#40916c), Mint (#95d5b2)

These are available via CSS variables for future theming needs.

### 2.6 Color Application Rules

1. **Primary Actions**: Use Cyber Green for main CTAs
2. **Navigation**: Active state = Green, Hover = Blue
3. **Cards**: Border colors rotate through Green → Blue → Purple
4. **Timeline**: Events cycle through 3 colors, final day = Gold
5. **Form Elements**: Focus states use Blue (#2563EB) for better visibility
6. **Error States**: Red (#ef4444) with 10% background tint
7. **Success States**: Green (#00ff88) with confirmation icons

### 2.7 Glow Effects

Glow colors are defined as CSS variables for consistent application:

```css
--glow-green: 0 0 20px rgba(0, 255, 136, 0.5), 0 0 40px rgba(0, 255, 136, 0.3);
--glow-blue: 0 0 20px rgba(0, 212, 255, 0.5), 0 0 40px rgba(0, 212, 255, 0.3);
--glow-purple: 0 0 20px rgba(168, 85, 247, 0.5), 0 0 40px rgba(168, 85, 247, 0.3);
--glow-gold: 0 0 20px rgba(212, 175, 55, 0.4), 0 0 40px rgba(212, 175, 55, 0.2);
```

**Glow Pulse Animation Variants**:
- `animate-glow-green`: 2.5s ease-in-out infinite cycle
- `animate-glow-blue`: 2.5s ease-in-out infinite cycle
- `animate-glow-purple`: 2.5s ease-in-out infinite cycle

---

## 3. Typography

### 3.1 Font Stack

The website uses the system font stack for optimal performance and native feel:

```css
--font-sans: ui-sans-serif, system-ui, sans-serif;
```

This translates to:
- **macOS/iOS**: San Francisco
- **Windows**: Segoe UI
- **Android**: Roboto
- **Linux**: Ubuntu, Cantarell

### 3.2 Text Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height |
|---------|---------------|---------------|--------|-------------|
| Hero Title | 7xl-8xl (3.75rem-4.5rem) | 3xl (1.875rem) | 700 (Bold) | 1.1 |
| Section Heading | 3xl-4xl (1.875rem-2.25rem) | 2xl-3xl (1.5rem-1.875rem) | 700 (Bold) | 1.2 |
| Card Title | lg-xl (1.125rem-1.25rem) | sm-lg (0.875rem-1.125rem) | 600 (Semibold) | 1.4 |
| Body Text | base (1rem) | base (1rem) | 400 (Regular) | 1.6 |
| Caption | sm (0.875rem) | sm (0.875rem) | 400 (Regular) | 1.5 |
| Small/Meta | xs (0.75rem) | xs (0.75rem) | 500 (Medium) | 1.4 |

### 3.3 Text Effects

**Gradient Text Classes**:

1. **`.gradient-text-static`**: Static 3-color gradient (Green → Blue → Purple)
2. **`.gradient-text-animated`**: Animated gradient with 8s cycle through 300% background positions
3. **`.shimmer-text`**: 3s linear infinite shimmer effect
4. **`.shimmer-text` (Gold variant)**: `.gold-shimmer` class for special elements

**Text Glow Effects**:

1. **`.glow-pulse-text`**: 3s ease-in-out infinite pulse
2. **`.glow-pulse-blue`**: Blue variant of glow pulse
3. **`.glow-pulse-purple`**: Purple variant of glow pulse
4. **`.glow-pulse-gold`**: Gold variant for special highlights (prizes)
5. **`.glow-pulse-warm`**: Warm palette glow
6. **`.glow-pulse-ocean`**: Ocean palette glow

**Text Shadow Specifications**:

- Default glow: `0 0 10px rgba(color, 0.3), 0 0 20px rgba(color, 0.2)`
- Strong glow: `0 0 20px rgba(color, 0.6), 0 0 40px rgba(color, 0.4), 0 0 60px rgba(color, 0.2)`

### 3.4 Typography Best Practices

1. **Headings**: Use tight line height (1.1-1.2) for impact
2. **Body**: Use relaxed line height (1.6) for readability
3. **Labels**: Use medium weight (500) for clarity
4. **Monospace**: Used for registration IDs (font-mono class)
5. **Tracking**: Hero titles use tight tracking (-0.025em to -0.05em)

---

## 4. Spacing & Layout

### 4.1 Container System

**Max-Width Tiers**:
- Standard content: `max-w-[1200px]` (1200px)
- Navbar content: `max-w-[1400px]` (1400px)
- Full-width sections: `100vw` with `overflow-hidden`

**Horizontal Padding**:

| Breakpoint | Padding (px) |
|------------|---------------|
| Mobile (<640px) | px-4 (16px) |
| Tablet (640-1024px) | px-6 (24px) |
| Desktop (>1024px) | px-8 (32px) |

### 4.2 Vertical Spacing

**Section Padding**:

| Breakpoint | Padding Y (rem) |
|------------|-----------------|
| Mobile | py-16 (4rem) |
| Tablet | py-20-24 (5-6rem) |
| Desktop | py-24-32 (6-8rem) |

**Component Spacing**:
- Card padding: `p-3-6` (mobile: 12px, desktop: 24px)
- Section gaps: `gap-4-8` (16px-32px)
- Grid gaps: `gap-4-6` (16px-24px)

### 4.3 Grid System

**Grid Columns**:

| Component | Mobile | Tablet | Desktop |
|-----------|--------|--------|---------|
| Theme Cards | 1 | 2 | 3 |
| Facilities | 2 | 3 | 3 |
| Footer | 1 | 2 | 3 |
| Form Fields | 1 | 2 (md:) | 2 |

### 4.4 Responsive Breakpoints

Tailwind CSS v4 breakpoints:

| Breakpoint | Min Width | Target |
|------------|-----------|--------|
| **xs** | 0-479px | Small phones |
| **sm** | 480-639px | Large phones |
| **md** | 640-767px | Tablets portrait |
| **lg** | 768-1023px | Tablets landscape |
| **xl** | 1024-1279px | Small laptops |
| **2xl** | 1280px+ | Desktops |

### 4.5 Z-Index Layering

| Layer | Value | Usage |
|-------|-------|-------|
| Base | 0 | Normal content |
| Dropdown | 10 | Navigation dropdowns |
| Sticky | 20 | Sticky headers |
| Fixed | 30 | Fixed position elements |
| Modal Backdrop | 40 | Modal overlays |
| Modal | 50 | Modal content |
| Popover | 60 | Tooltips, popovers |
| Toast | 70 | Notification toasts |
| **Navbar** | 50 | Navigation (z-50) |
| **Scroll Buttons** | 50 | Scroll to top, home button |

---

## 5. Visual Effects

### 5.1 Background Effects

#### Grid Pattern
- **Implementation**: CSS `linear-gradient` combination
- **Color**: `rgba(0, 255, 136, 0.03)` for vertical, `rgba(0, 212, 255, 0.03)` for horizontal
- **Size**: 50px × 50px grid
- **Opacity**: 30-40% on desktop, hidden on mobile for performance

```css
.grid-pattern {
  background-image: 
    linear-gradient(rgba(0, 255, 136, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
}
```

#### Radial Gradients
- **Hero Section**: Three-layer radial gradient
  - Green at 30% left (12% opacity)
  - Blue at 70% left (10% opacity)
  - Purple at 50% bottom (8% opacity)
- **Animation**: 10s scale and opacity pulse cycle
- **Mobile**: Reduced to 60% opacity for performance

#### Bottom Fade
- Gradient from solid to transparent
- Height: 32px (mobile), 48px (tablet+)
- Creates smooth transition to next section

### 5.2 Glass Effects

#### Glass Card
```css
.glass-card {
  background: rgba(17, 24, 39, 0.8);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(0, 255, 136, 0.1);
}
```

#### Glass Input Fields
- Background: `rgba(7, 11, 20, 1)` (#070B14)
- Border: `rgba(255, 255, 255, 0.06)` (6% white)
- Focus border: `#2563EB` (blue)
- Focus ring: `rgba(37, 99, 235, 0.2)`

### 5.3 Border Effects

#### Gradient Borders
```css
.border-gradient-cyber {
  border: 2px solid transparent;
  background: 
    linear-gradient(var(--bg-primary), var(--bg-primary)) padding-box,
    linear-gradient(90deg, var(--cyber-green), var(--cyber-blue), var(--cyber-purple)) border-box;
}
```

#### Animated Border
- Used on ThemeCards hover
- Background animates through 4 gradient positions
- 4s linear infinite cycle
- Blur effect (blur-sm) for glow appearance

### 5.4 Shadow Effects

#### Card Shadows
- Default: Subtle shadow `0 4px 6px rgba(0, 0, 0, 0.1)`
- Hover: Colored glow shadow matching accent color at 20% opacity

#### Button Shadows
- Default: `0 0 20px rgba(0, 255, 136, 0.4)`
- Hover: Expanded glow `0 0 40px rgba(0, 255, 136, 0.6)`

### 5.5 Selection Style

```css
::selection {
  background: rgba(0, 255, 136, 0.4);
  color: white;
}
```

---

## 6. Component Specifications

### 6.1 Navigation Bar (Navbar)

**Structure**:
- Height: 56px (mobile), 64px (tablet+)
- Background: `#050810` with bottom border
- Border: 1px solid `rgba(0, 255, 136, 0.2)`

**Desktop Layout**:
- Left: College logo (image)
- Center: Navigation links
- Right: (none - full width utilized)

**Navigation Links**:
- Items: Home, Themes, Register, Guidelines, Contact
- Padding: px-3 (mobile), px-4 (desktop)
- Font: text-sm, font-medium

**Link States**:
- Default: `text-white/70` (70% opacity white)
- Hover: `text-[#00d4ff]` (blue)
- Active: `text-[#00ff88]` (green)
- Active indicator: Background gradient box with layoutId animation

**Hover Effects**:
- Underline animation: Bottom gradient line expands from center
- Animation: 0.3s duration, 70% width

**Mobile Layout**:
- Hamburger menu button (right side)
- Slide-down menu with staggered item animations
- 100ms delay between each item (0.1s × index)

**College Logo**:
- Image: `/College-site-logo.png`
- Height: 32px (mobile), 40px (tablet+)
- Hover: Scale 1.02, 0.2s
- Effect: Drop shadow `0 0 10px rgba(34, 211, 238, 0.8)`

### 6.2 Hero Section

**Container**:
- Min-height: 90vh (mobile), 100vh (tablet+)
- Background: `#050810`
- Content max-width: 1200px
- Text alignment: Center

**Badge** (Event Type Indicator):
- Shape: Rounded-full pill
- Background: `rgba(0, 255, 136, 0.1)`
- Border: 1px solid `rgba(0, 255, 136, 0.4)`
- Text: `#00ff88`, text-xs/sm
- Icon: Zap with rotation animation (2s cycle)
- Glow pulse: Box shadow breathing (2s cycle)
- Hover: Scale 1.05

**Main Title**:
- Element: `<h1>` with gradient text + glow pulse
- Gradient: `.gradient-text-static` (Green → Blue → Purple)
- Glow: `.glow-pulse-text` (green)
- Font: 7xl-8xl (desktop), 3xl (mobile)
- Weight: Bold (700)
- Tracking: Tight (-0.025em)

**Subtitle**:
- Text: "Innovate. Integrate. Dominate."
- Style: Gradient text (green to blue)
- Animation: Slide from left (0.6s, spring)

**Tagline**:
- Text: "Join us for an exhilarating journey..."
- Color: `text-white/60` (60% opacity)
- Max-width: 2xl (672px)
- Animation: Fade up (0.6s)

**Meta Information Pills** (3 items):
- Items: Date, Venue, Team Size
- Shape: Rounded-full pill
- Padding: py-2 (mobile), py-2.5 (desktop)
- Background: Color at 10% opacity
- Border: Color at 20% opacity
- Icons: Calendar, MapPin, Users (animated rotation)
- Color assignment:
  - Date: Green
  - Venue: Blue
  - Team Size: Purple

**CTA Buttons** (2):

**Primary Button** (Register Now):
- Background: Linear gradient (green to blue)
- Text: Dark (#050810)
- Padding: py-3 (mobile), py-4 (desktop)
- Border-radius: xl (12px)
- Shadow: Green glow
- Hover: Scale 1.05, enhanced glow
- Animation: Shimmer overlay (3s linear infinite)

**Secondary Button** (Explore Themes):
- Border: 2px solid green/50%
- Background: Transparent → green/20% on hover
- Text: White
- Hover: Scale 1.05, border glow

**Scroll Indicator**:
- Position: Bottom center (bottom-8)
- Elements: "Scroll" text + ChevronDown icon
- Animation: Vertical bounce (2s ease-in-out infinite)
- Color: White/40 (40% opacity)

**Parallax Effects**:
- ScrollY transform: 0 to 150px (desktop only)
- Opacity: 1 to 0 over 50% scroll
- Scale: 1 to 0.9 over 50% scroll

### 6.3 Theme Cards

**Grid**:
- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3 columns

**Card Structure**:
- Background: `#111827` at 90% opacity
- Border: 1px, color varies by theme
- Border-radius: lg (mobile), 2xl (desktop)
- Padding: p-3 (mobile), p-5-6 (desktop)

**Entrance Animation**:
- Initial: opacity 0, y 50, scale 0.9
- Final: opacity 1, y 0, scale 1
- Duration: 0.6s
- Delay: index × 0.1s (staggered)
- Type: Spring (stiffness 100)

**Hover Animation**:
- Y translate: -8px
- Duration: 0.3s
- Box shadow: Enhanced glow

**Animated Border**:
- Only on desktop (hidden on mobile)
- Position: Absolute, -1px inset
- Gradient animates through 4 positions
- Blur: blur-sm
- Opacity: 0 → 100% on hover

**Background Gradient Sweep**:
- Direction: Left to right
- Opacity: 0 → 100% on hover
- Duration: 0.8s

**Corner Glow**:
- Only on desktop
- Position: -top-10, -right-10
- Size: 32px × 32px
- Blur: blur-3xl
- Animation: Scale 1→1.2→1, opacity pulse

**Icon Container**:
- Size: 32px (mobile), 48px (desktop)
- Background: `#050810`
- Border: Matches theme color
- Hover animation:
  - Rotate: 360°
  - Scale: 1.15
  - Duration: 0.5s

**Content**:
- Title: Font-semibold, white, hover green
- Description: 60% white opacity, increases on hover

**Theme Colors** (assigned by icon):

| Theme | Icon Color | Border | Glow |
|-------|-----------|--------|-------|
| AI & ML | #00ff88 | Green | Green |
| Web & Mobile | #00d4ff | Blue | Blue |
| IoT & Hardware | #a855f7 | Purple | Purple |
| Cybersecurity | #00ff88 | Green | Green |
| Blockchain | #00d4ff | Blue | Blue |
| Open Innovation | #a855f7 | Purple | Purple |

### 6.4 Countdown Timer

**Structure**:
- 4 units: Days, Hours, Minutes, Seconds
- Separators: Colons between each

**Unit Design**:
- Container: Rounded-lg/2xl
- Background: Color at 10% opacity
- Padding: p-1 (mobile), p-4 (desktop)

**Number Display**:
- Font: Bold, tabular-nums
- Size: 1.25xl (mobile), 5xl-7xl (desktop)
- Color: White (normal), color (changing)
- Animation: Scale pop + color flash

**Color Assignment**:
- Days: Green
- Hours: Blue
- Minutes: Purple
- Seconds: Green

**Label**:
- Text: Uppercase, tracking-wider
- Color: White/50
- Size: xs (mobile), sm (desktop)

**Glow Effect** (Desktop only):
- Blur: blur-xl
- Opacity pulse on digit change

**Pulse Ring**:
- Border: 2px, color matched
- Animation: Scale 1→1.15→1, opacity pulse
- Duration: 2s, infinite

### 6.5 Timeline

**Layout**:
- Mobile: Single column, left-aligned
- Desktop: Alternating left/right

**Vertical Line**:
- Position: Left (mobile), center (desktop)
- Width: 2px
- Background: White/10
- Gradient overlay: Green → Blue → Purple
- Animation: Height grows with scroll

**Timeline Items** (10 total):

| Day | Color Assignment |
|-----|-----------------|
| March 18 (Day 1) | Green → Blue → Purple (cycling) |
| March 19 (Day 2) | Gold (final day highlight) |

**Card Design**:
- Background: Color at 10% opacity
- Border: 1px, color at 30% opacity
- Padding: p-3 (mobile), p-6 (desktop)

**Time Badge**:
- Shape: Rounded-full pill
- Background: `#050810` at 50%
- Icon: Clock
- Color: Matches timeline color

**Node (Dot)**:
- Size: 10px (mobile), 16px (desktop)
- Background: Timeline color
- Border: 2px, same color
- Hover: Scale 1.3

**Pulse Effect**:
- Element: Absolute, inset 0
- Animation: Scale 1→2→1, opacity pulse
- Duration: 2s, infinite

**Special (Final Day)**:
- Gold color (#D4AF37)
- Sparkle icon animation
- Enhanced glow effect

### 6.6 Registration Form

**Container**:
- Max-width: Full width, responsive
- Background: Gradient dark (#111827 → #0B1220)
- Border: 1px, cyan/30% opacity
- Border-radius: 2xl
- Padding: Responsive

**Accommodation Info Box**:
- Background: Gradient (cyan/10 → purple/10)
- Border: Cyan/20
- Content: Food, arrival, resting room info

**Input Fields**:
- Background: #070B14
- Border: White/6
- Border-radius: xl
- Padding: px-4, py-3
- Placeholder: White/30

**Focus State**:
- Border: #2563EB (blue)
- Ring: 2px, blue/20

**Error State**:
- Animation: Shake (0.5s)
- Border: Red
- Message: Red-400, text-sm

**Select Dropdowns**:
- Same styling as inputs
- Options: Dark background (#070B14)

**Textarea**:
- Rows: 4
- Resize: None (fixed)

**Dynamic Fields** (Additional Members):
- Animation: Height expand (AnimatePresence)
- Stagger appearance when member count changes
- Member numbering: Member 2, Member 3, etc.

**File Upload** (PPT Link field):
- Type: URL input (link to Google Drive/Dropbox)
- Helper text: Instructions for upload
- Note: Actual file upload handled via link, not direct upload

**Submit Button**:
- Full width
- Background: Gradient (blue #2563EB → #3B82F6)
- Text: White, semibold
- Disabled: Opacity 50%
- Loading: Spinner + "Submitting..."
- Hover: Enhanced shadow glow

**Success State**:
- Animation: Scale pop
- Icon: CheckCircle, cyan
- Registration ID: Monospace, cyan, glow
- CTA: "Register Another Team"

**Honeypot Field**:
- Hidden (CSS hidden)
- Tabindex: -1
- Autocomplete: off

### 6.7 Facilities Grid

**Grid**:
- Mobile: 2 columns
- Tablet: 3 columns
- Desktop: 3 columns

**Card Design**:
- Background: #111827/90
- Border: 1px, color at 20% opacity
- Border-radius: lg (mobile), 2xl (desktop)
- Padding: p-2.5 (mobile), p-5-6 (desktop)

**Icon Container**:
- Size: 32px (mobile), 48px (desktop)
- Background: #050810
- Border: White/10
- Animation: Y float on hover

**Colors** (cycling):
- Wifi: Green
- Zap: Blue
- Coffee: Purple
- Users: Green
- Monitor: Blue
- Car: Purple

**Hover Effects**:
- Y translate: -4px
- Scale: 1.02
- Background shift: Color at 5% opacity
- Corner dot pulse animation

### 6.8 Footer

**Structure**:
- 3 columns (desktop), 2 columns (tablet), 1 column (mobile)
- Background: #0a0f1a
- Border top: Green/20

**Top Gradient Line**:
- Gradient: Transparent → Green → Blue → Purple → Transparent
- Animation: ScaleX 0 → 1 on scroll

**Background Glows**:
- Left: Green/5, top-20, 64px blur
- Right: Blue/5, bottom-20, 64px blur

**Brand Section**:
- Title: Shimmer text animation
- Description: White/60
- Copyright: White/40

**Quick Links**:
- Hover: X translate + color change
- Animation: 0.2s

**Contact Section**:
- Icon boxes: 32px (mobile), 40px (desktop)
- Background: Color at 10%
- Border: Color at 20%
- Hover: Scale + glow + border color

**Bottom Bar**:
- Border top: Green/10
- Heart animation: Scale pulse

### 6.9 Scroll to Top Button

**Visibility Trigger**:
- Show: scrollY > 300px
- Hide: scrollY ≤ 300px

**Position**:
- Fixed bottom-6, right-6
- Z-index: 50

**Design**:
- Size: 40px (mobile), 48px (desktop)
- Background: Gradient (blue #2563EB → cyan #22D3EE)
- Icon: ChevronUp
- Shadow: Blue glow

**Hover**: Scale 1.1
**Tap**: Scale 0.95

### 6.10 Home Button

**Visibility**:
- Hidden on home page (/)
- Visible on all other pages

**Position**:
- Fixed bottom-20 (mobile), bottom-6 (tablet+)
- Left-6
- Z-index: 50

**Design**:
- Size: 40px (mobile), 48px (desktop)
- Background: Gradient (green #00ff88 → cyan #22D3EE)
- Icon: Home

### 6.11 Floating Shapes (Hero Background)

**Shape Specifications**:

| Shape | Position | Size | Color | Animation |
|-------|----------|------|-------|-----------|
| 1 | Top-right 10% | 288px (72×72) | Green/25% | Y -20, X 10, Scale 1.15 |
| 2 | Bottom-left 5% | 384px (96×96) | Blue/20% | Y 20, X -10, Scale 1.2 |
| 3 | Center-left 15% | 256px (64×64) | Purple/22% | Y -15, Scale 1.1 |
| 4 | Top-left 25% | 128px (32×32) | Green/15% | Y -10, X 5 |
| 5 | Bottom-right 20% | 160px (40×40) | Blue/15% | Y 12, X -5 |

**Common Properties**:
- Shape: Rounded-full (circle)
- Filter: blur-40px (large), blur-20px (small)
- Animation: 5-10s duration, infinite loop

**Mobile**: Hidden for performance

---

## 7. Animation System

### 7.1 Animation Principles

1. **Purposeful Motion**: Every animation serves a purpose
2. **Performance First**: Target 60fps, use CSS transforms
3. **Reduced Motion Support**: Respect user preferences
4. **Consistent Timing**: Use established duration patterns

### 7.2 Animation Durations

| Type | Duration | Usage |
|------|----------|-------|
| Micro-interactions | 0.2s | Button hover, focus states |
| Standard transitions | 0.3s | Color changes, transforms |
| Component animations | 0.5-0.6s | Entrance, exit |
| Complex animations | 0.8-1s | Multi-stage reveals |
| Continuous loops | 2-10s | Floating, pulsing |

### 7.3 Easing Functions

| Function | Usage |
|----------|-------|
| `ease` | Default, general transitions |
| `ease-in-out` | Smooth starts and stops |
| `linear` | Continuous animations |
| `spring` | Bouncy, natural motion |
| Custom bezier `[0.16, 1, 0.3, 1]` | Navbar slide |

### 7.4 Animation Types

#### Entrance Animations
```typescript
// Fade + slide up
{ opacity: 0, y: 30 } → { opacity: 1, y: 0 }
// Duration: 0.6s
// Delay: Staggered 0.1s per item
```

#### Hover Animations
```typescript
// Scale
whileHover: { scale: 1.05 }
// Duration: 0.2-0.3s
```

#### Scroll Animations
```typescript
// Intersection Observer triggered
initial: { opacity: 0, y: 50 }
whileInView: { opacity: 1, y: 0 }
viewport: { once: true, margin: "-50px" }
```

#### Parallax
```typescript
// Hero section
y: useTransform(scrollYProgress, [0, 1], [0, 150])
opacity: useTransform(scrollYProgress, [0, 0.5], [1, 0])
scale: useTransform(scrollYProgress, [0, 0.5], [1, 0.9])
```

### 7.5 Keyframe Animations

| Name | Properties | Duration | Usage |
|------|------------|----------|-------|
| `gradient-shift` | background-position | 8s | Text gradient |
| `glow-pulse` | box-shadow, opacity | 2.5s | Button glow |
| `shimmer` | background-position | 3s | Button overlay |
| `float` | transform (y) | 6-10s | Floating shapes |
| `border-rotate` | background-position | 4s | Card borders |
| `shake` | transform (x) | 0.5s | Error feedback |
| `pulse-scale` | transform (scale) | 0.3s | Digit change |

### 7.6 Framer Motion Configuration

**LazyMotion Setup**:
```typescript
<LazyMotion features={domAnimation} strict>
  {children}
</LazyMotion>
```

This reduces bundle size by loading only needed animation features.

---

## 8. Responsive Design

### 8.1 Mobile-First Approach

All components are designed mobile-first, then enhanced for larger screens:

1. **Base Styles**: Mobile (default)
2. **Tablet (md:)**: 640px+
3. **Desktop (lg:)**: 1024px+
4. **Large Desktop (xl:)**: 1280px+

### 8.2 Mobile Optimizations

| Feature | Desktop | Mobile | Rationale |
|---------|---------|--------|-----------|
| Floating shapes | Visible | Hidden | Performance |
| Animated borders | Visible | Hidden | Performance |
| Corner glows | Visible | Hidden | Performance |
| Parallax | Enabled | Disabled | Performance |
| Hero gradient opacity | 80% | 60% | Performance |
| Grid pattern | 40% | 30% | Performance |
| Hover effects | Full | Simplified | Touch devices |
| Navbar | Floating | Static | Better UX |

### 8.3 Touch Targets

- **Minimum size**: 44px × 44px (WCAG AA)
- **Spacing**: Adequate gap between interactive elements
- **Padding**: Generous tap areas on mobile

### 8.4 Typography Scaling

| Element | Mobile | Desktop |
|---------|--------|---------|
| Hero title | 3xl | 7xl-8xl |
| Section heading | 2xl | 3xl-4xl |
| Body text | base | base |
| Small text | xs | xs-sm |

---

## 9. Accessibility

### 9.1 Color Contrast

All text meets WCAG AA standards (4.5:1 for normal text, 3:1 for large text):

| Element | Color | Contrast Ratio |
|---------|-------|----------------|
| Primary text | #FFFFFF | 15:1 (on #050810) |
| Secondary text | #FFFFFF/80 | 8:1 |
| Muted text | #FFFFFF/50 | 4.5:1 |
| Link text | #00d4ff | 6.8:1 |
| Button text | #050810 | 15:1 (on #00ff88) |

### 9.2 Focus Management

**Focus Indicators**:
```css
:focus-visible {
  outline: 2px solid var(--cyber-green);
  outline-offset: 2px;
}
```

All interactive elements have visible focus states.

### 9.3 Keyboard Navigation

- All buttons and links are keyboard accessible
- Tab order follows visual order
- Skip links provided for main content

### 9.4 Screen Reader Support

- Semantic HTML elements (nav, main, section, footer)
- ARIA labels on icon-only buttons
- Alt text on images (college logo)
- Form labels properly associated

### 9.5 Reduced Motion

The system respects `prefers-reduced-motion`:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## 10. User Flows

### 10.1 Registration Flow

1. **Landing**: User arrives at homepage
2. **Discovery**: Sees event details, countdown, themes
3. **Interest**: Clicks "Register Now" or navigates to /register
4. **Form**: Fills team information
5. **Validation**: Client-side validation provides immediate feedback
6. **Submission**: Submits form
7. **Processing**: Loading state shown
8. **Success**: Registration ID displayed
9. **Reference**: User saves registration ID
10. **Continuation**: Option to register another team

### 10.2 Navigation Flow

1. **Primary Navigation**: Top navbar (desktop)
2. **Mobile Navigation**: Hamburger menu
3. **Quick Access**: Home button on non-home pages
4. **Scroll to Top**: Floating button appears after scroll

### 10.3 Information Discovery

1. **Home**: Overview, countdown, key info
2. **Themes**: Detailed theme cards with descriptions
3. **Guidelines**: Rules and requirements
4. **Contact**: Coordinator information

---

## 11. Interactive Elements

### 11.1 Buttons

**Primary Button**:
- Background: Gradient (green → blue)
- Shadow: Green glow
- Hover: Scale + enhanced glow
- Active: Scale down

**Secondary Button**:
- Border: Green/50
- Background: Transparent → green/20 on hover
- Hover: Scale + glow

**Icon Button**:
- Circle shape
- Background: Gradient
- Used for: Scroll to top, home

### 11.2 Form Inputs

**States**:
- Default: Dark background, subtle border
- Focus: Blue border + ring
- Error: Red border + shake animation
- Disabled: Reduced opacity

**Validation**:
- Real-time with React Hook Form
- Error messages appear below field
- Invalid fields shake on submit attempt

### 11.3 Links

**Navigation Links**:
- Underline animation on hover
- Active indicator (layoutId)

**Footer Links**:
- Slide + color change on hover
- External link icon on hover

### 11.4 Cards

**Interactive Cards**:
- Theme cards: Hover lift + glow
- Facility cards: Hover lift + background shift
- Timeline cards: Hover lift + glow

---

## 12. Micro-Interactions

### 12.1 Button Micro-interactions

| Interaction | Animation |
|------------|-----------|
| Hover | Scale 1.05, glow increase |
| Tap/Click | Scale 0.95-0.99 |
| Loading | Spinner rotation |
| Success | Check icon fade-in |

### 12.2 Input Micro-interactions

| Interaction | Animation |
|------------|-----------|
| Focus | Border color + ring fade-in |
| Error | Border red + shake |
| Valid | Subtle green flash |
| Fill | Label float (if applicable) |

### 12.3 Navigation Micro-interactions

| Interaction | Animation |
|------------|-----------|
| Link hover | Underline expand |
| Link active | Background slide |
| Menu open | Height expand |
| Menu item | Stagger fade-in |

### 12.4 Card Micro-interactions

| Interaction | Animation |
|------------|-----------|
| Hover | Y translate -8px, scale 1.02 |
| Icon hover | Rotate + scale |
| Background | Gradient sweep |

### 12.5 Visual Feedback Micro-interactions

| Element | Animation | Trigger |
|---------|-----------|---------|
| Countdown digit | Scale pop + color flash | Value change |
| Timeline node | Pulse ring | Scroll into view |
| Success modal | Scale bounce | Form submit success |
| Error toast | Slide + fade in | Validation error |

---

## 13. State Management

### 13.1 Component States

**Navigation**:
- State: `isOpen` (mobile menu)
- Toggle: setState on button click

**Form**:
- State: React Hook Form controlled
- Fields: teamName, college, leaderName, email, phone, memberCount, theme, projectTitle, abstract, pptLink, members[]
- Validation: Zod schema

**Submission**:
- States: idle, submitting, success, error
- Transitions: User action → API call → result display

**Scroll Buttons**:
- State: isVisible (scroll position)
- Trigger: scrollY > 300px

### 13.2 Animation States

- **Initial**: Starting values before animation
- **Animate**: Target values
- **Exit**: Values when component unmounts
- **WhileHover**: Values during hover
- **WhileTap**: Values during click/tap

---

## 14. Page-Specific UX

### 14.1 Home Page (`/`)

**Sections**:
1. Hero with parallax
2. Countdown timer
3. Timeline
4. Facilities
5. Footer

**Unique UX**:
- Home button hidden (already on home)
- Scroll indicator in hero
- Full-width immersive experience

### 14.2 Themes Page (`/themes`)

**Sections**:
1. Page header
2. Theme cards grid
3. Footer

**Unique UX**:
- 6 theme cards with detailed descriptions
- Scroll-triggered card animations
- Visual theme categorization

### 14.3 Registration Page (`/register`)

**Sections**:
1. Page header
2. Registration form
3. Accommodation info
4. Footer

**Unique UX**:
- Multi-section form
- Dynamic member fields
- Success state with registration ID
- Home button visible

### 14.4 Guidelines Page (`/guidelines`)

**Sections**:
1. Page header
2. Rules list
3. Footer

**Unique UX**:
- Scannable rule list
- Clear numbered format

### 14.5 Contact Page (`/contact`)

**Sections**:
1. Page header
2. Coordinator information
3. Footer

**Unique UX**:
- Clear contact hierarchy
- Easy-to-read phone/email

---

## Appendix: CSS Classes Quick Reference

### Utility Classes Used

| Class | Purpose |
|-------|---------|
| `.gradient-text-static` | 3-color gradient text |
| `.gradient-text-animated` | Animated gradient |
| `.glow-pulse-text` | Text glow animation |
| `.shimmer-text` | Shimmer animation |
| `.glass-card` | Glass morphism card |
| `.btn-gradient` | Gradient button |
| `.animate-float` | Floating animation |
| `.animate-glow-green/blue/purple` | Glow pulse |
| `.animate-shake` | Error shake |
| `.grid-pattern` | Background grid |
| `.border-gradient-cyber` | Gradient border |

### Animation Classes

| Class | Animation |
|-------|-----------|
| `animate-[pulse-scale]` | Scale pulse |
| `animate-[shimmer_3s_linear_infinite]` | Shimmer |
| `animate-[float_6s_ease-in-out_infinite]` | Float |
| `animate-[glow-pulse-green_2.5s_ease-in-out_infinite]` | Glow pulse |

---

## Document Information

- **Version**: 1.1.4
- **Last Updated**: 2026-02-17
- **Authors**: Development Team
- **Review Status**: Approved for Production

---

*End of UI/UX Documentation*
