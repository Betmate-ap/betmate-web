# BetMate — Frontend Design System & UI Plan

> **This file is the single source of truth for all UI/UX decisions.**
> Read this before writing any component, page, or style. If something feels off or you are unsure, come back here first.

---

## Table of Contents

1. [Design Philosophy](#1-design-philosophy)
2. [Technology Stack](#2-technology-stack)
3. [Color System & Theming](#3-color-system--theming)
4. [Typography](#4-typography)
5. [Spacing & Layout](#5-spacing--layout)
6. [Responsive Strategy](#6-responsive-strategy)
7. [Component Library Plan](#7-component-library-plan)
8. [App Structure & Pages](#8-app-structure--pages)
9. [Navigation Pattern](#9-navigation-pattern)
10. [Animations & Micro-interactions](#10-animations--micro-interactions)
11. [Fun Moments (Animals & Celebrations)](#11-fun-moments-animals--celebrations)
12. [Images & Assets Strategy](#12-images--assets-strategy)
13. [Code Organisation Rules](#13-code-organisation-rules)
14. [Component Architecture Standard](#14-component-architecture-standard)
15. [Logging & Comments Standard](#15-logging--comments-standard)
16. [Browser & Device Support](#16-browser--device-support)
17. [What NOT to Do](#17-what-not-to-do)

---

## 1. Design Philosophy

BetMate is a **friendly, social, IPL betting app** — no real money, just points and pride between friends.

The UI must feel:

- **Ultra-modern** — looks like a 2025 product, not a 2019 Bootstrap app
- **Minimalistic but rich** — clean layouts, purposeful whitespace, but with personality and depth
- **Fast** — skeleton loaders everywhere, optimistic UI updates, no spinner-and-wait patterns
- **Friendly** — warm, fun, a little playful (animals, celebrations) without being childish
- **Trustworthy** — clear disclaimers, no dark patterns, obvious navigation

The old BetMate project (`old betmate/`) is the reference for **what to avoid**: basic Tailwind cards, no animations, clunky navigation, no consistent design language. Build far above that.

---

## 2. Technology Stack

| Concern              | Choice                                    | Reason                                                               |
| -------------------- | ----------------------------------------- | -------------------------------------------------------------------- |
| Styling              | **Tailwind CSS v4**                       | Utility-first, fastest iteration, industry standard                  |
| Component primitives | **shadcn/ui** (Radix UI + Tailwind)       | Accessible headless components, fully customisable, no style lock-in |
| Icons                | **Lucide React**                          | Consistent with shadcn, tree-shakeable, clean stroke icons           |
| Animations           | **Framer Motion**                         | Production-grade motion library, hardware-accelerated                |
| Notifications        | **Sonner**                                | Beautiful toast notifications, works with shadcn                     |
| Date formatting      | **date-fns**                              | Lightweight, tree-shakeable                                          |
| Client state         | **React Context**                         | Auth + theme. Apollo handles server state — no Zustand needed yet    |
| Fonts                | **Inter** (via Google Fonts / Fontsource) | The standard for modern web apps                                     |

**No class-based components. No jQuery. No Bootstrap. No inline styles.**

---

## 3. Color System & Theming

### Brand Palette — 35 / 10 / 35 / 10 / 10 Rule

BetMate uses a **dual-brand colour system** built on the head-to-head nature of the app: every bet is Blue vs Gold. The two brand families are symmetric — each has a strong colour for prominent use and a lighter tint for backgrounds and texture.

#### Blue family (45% total)

| Token    | Role              | Light              | Dark               | Proportion | Usage                                                        |
| -------- | ----------------- | ------------------ | ------------------ | ---------- | ------------------------------------------------------------ |
| `accent` | **Blue — Strong** | `#2563eb` blue-600 | `#3b82f6` blue-500 | **35%**    | Nav, primary buttons, links, active states, "your pick" side |
| `sky`    | **Blue — Tint**   | `#0ea5e9` sky-500  | `#38bdf8` sky-400  | **10%**    | Card backgrounds on blue side, gradients, glows, rings       |

#### Gold family (45% total)

| Token        | Role              | Light                        | Dark                           | Proportion | Usage                                                       |
| ------------ | ----------------- | ---------------------------- | ------------------------------ | ---------- | ----------------------------------------------------------- |
| `gold`       | **Gold — Strong** | `#d97706` amber-600          | `#f59e0b` amber-400            | **35%**    | Opponent side, rewards, rank, wins, points, trophies, coin  |
| `gold-light` | **Gold — Tint**   | `color-mix(gold 15%, white)` | `color-mix(gold 18%, surface)` | **10%**    | Card backgrounds on gold side, subtle tints, hover surfaces |

#### The Blue vs Gold duality

This is the core design language. Use it everywhere a choice or competition is expressed:

- Match/bet cards: **blue side** (sky tint bg + accent text) = your pick · **gold side** (gold-light bg + gold text) = opponent
- Leaderboard: your row highlighted in blue, #1 rank in gold
- Coin toss: heads = blue, tails = gold
- Logo: bolt top = blue, bolt tip = gold — both halves of the wordmark
- Buttons: blue (`default`) for your actions · gold for opponent/challenge actions

#### Status colours (industry standard — not brand colours)

| Token         | Light     | Dark      | Usage                                           |
| ------------- | --------- | --------- | ----------------------------------------------- |
| `success`     | `#059669` | `#10b981` | Win, profit, accepted, completed                |
| `warning`     | `#ca8a04` | `#facc15` | Pending, upcoming — yellow (distinct from gold) |
| `destructive` | `#e11d48` | `#fb7185` | Error, loss, cancel, LIVE badge                 |

> Note: `--warning` (yellow) and `--gold` (amber) are intentionally different hues so status warnings are never confused with brand gold.

#### Surface & text (neutral system)

| Token            | Light     | Dark      | Usage                     |
| ---------------- | --------- | --------- | ------------------------- |
| `background`     | `#f8fafc` | `#020617` | Page background           |
| `surface`        | `#ffffff` | `#0f172a` | Cards, modals, panels     |
| `surface-raised` | `#f1f5f9` | `#1e293b` | Elevated cards, dropdowns |
| `border-color`   | `#e2e8f0` | `#334155` | Dividers, input borders   |
| `text-primary`   | `#0f172a` | `#f8fafc` | Headings, body text       |
| `text-secondary` | `#64748b` | `#94a3b8` | Captions, labels          |

### Colour Rules — read before writing any component

- **Only use CSS tokens** (`var(--accent)`, `var(--gold)`, `var(--sky)`) — never hardcode hex values except inside `index.css`
- **Blue vs Gold duality is the core language** — whenever something is competitive or binary (your side vs theirs), use blue and gold to express it
- **Sky is texture only** — never use `--sky` as the sole colour of a UI element. Use it inside gradients, glow effects, or as a ring colour on active states. Not for buttons, badges, or text on its own.
- **Status colours are contextual only** — never use green/red/yellow as decorative or brand colours. They appear only in win/loss/pending/live states.
- **No new colours** — if you need a shade, use opacity variants: `color-mix(in srgb, var(--accent) 15%, transparent)`
- **Both themes must look equally polished** — test every component in light and dark before shipping

### Theme Implementation

- CSS custom properties via Tailwind `@theme inline` — every token maps to a utility class
- `dark` class on `<html>` element — user-controlled toggle, stored in `localStorage`
- Default: **dark mode**

---

## 4. Typography

| Element                  | Style                                           |
| ------------------------ | ----------------------------------------------- |
| Font family              | Inter, system-ui, sans-serif                    |
| Display headings         | `font-bold`, tracking slightly tight            |
| Body                     | `font-normal`, `leading-relaxed`                |
| Labels / captions        | `font-medium`, `text-sm`                        |
| Numbers (points, scores) | `font-bold`, `tabular-nums` (monospaced digits) |
| Code / match IDs         | `font-mono`                                     |

- **No font sizes below `text-sm` (12px)** — readability across all devices
- Line height: always use `leading-relaxed` for paragraphs, `leading-tight` for headings

---

## 5. Spacing & Layout

- Base unit: **4px** (Tailwind's default scale)
- Use Tailwind spacing scale consistently — `p-4`, `gap-6`, `mt-8` etc.
- **Never use arbitrary values** like `p-[13px]` unless there is a very specific reason
- Max content width: `max-w-7xl` centred — content never stretches full width on large screens
- Section padding: `px-4 sm:px-6 lg:px-8` — consistent horizontal padding across breakpoints

---

## 6. Responsive Strategy

**Mobile-first.** Write styles for mobile, override for larger screens.

| Breakpoint | Tailwind | Target                       |
| ---------- | -------- | ---------------------------- |
| Mobile     | default  | 320px – 639px (phones)       |
| Small      | `sm:`    | 640px – 767px (large phones) |
| Medium     | `md:`    | 768px – 1023px (tablets)     |
| Large      | `lg:`    | 1024px – 1279px (laptops)    |
| XL         | `xl:`    | 1280px+ (desktops)           |

Rules:

- Test every component at 375px (iPhone SE), 768px (iPad), 1280px (laptop), 1920px (desktop)
- Touch targets minimum **44px × 44px** — no tiny buttons on mobile
- Navigation collapses to bottom tab bar on mobile (`md` and below), sidebar on desktop (`lg` and above)
- Cards go from 1-column (mobile) → 2-column (tablet) → 3-column (desktop) automatically via CSS Grid
- No horizontal scroll anywhere — ever

---

## 7. Component Library Plan

All components live in `src/components/`. Build and test each on the component playground page (`/playground`) before using in features.

### Base UI (`src/components/ui/`)

These are shadcn/ui primitives, customised to the BetMate theme:

| Component          | Notes                                                                                        |
| ------------------ | -------------------------------------------------------------------------------------------- |
| `Button`           | variants: `default`, `secondary`, `ghost`, `destructive`, `outline`; sizes: `sm`, `md`, `lg` |
| `Input`            | with label, error state, helper text                                                         |
| `Textarea`         | same as Input                                                                                |
| `Badge`            | variants matching bet/match statuses                                                         |
| `Avatar`           | with fallback initials, online indicator                                                     |
| `Card`             | `Card`, `CardHeader`, `CardContent`, `CardFooter`                                            |
| `Dialog` / `Modal` | all confirmations and overlays use this — never `alert()`                                    |
| `Drawer`           | mobile sheet (slides up from bottom) for actions                                             |
| `Tabs`             | horizontal tab navigation                                                                    |
| `Skeleton`         | for every loading state — no spinners on content areas                                       |
| `Tooltip`          | for icon-only buttons                                                                        |
| `Separator`        | horizontal/vertical divider                                                                  |
| `Switch`           | toggles (theme, notifications)                                                               |
| `Select`           | styled dropdown                                                                              |
| `Toast`            | via Sonner — success, error, info variants                                                   |
| `EmptyState`       | reusable empty state with icon + message + optional CTA                                      |
| `ErrorState`       | for failed queries with retry button                                                         |

### Domain Components (`src/components/`)

| Component           | Location                         | Description                                                     |
| ------------------- | -------------------------------- | --------------------------------------------------------------- |
| `MatchCard`         | `match/MatchCard.tsx`            | Team logos, venue, date/time, status badge, live indicator      |
| `BetCard`           | `bet/BetCard.tsx`                | Bet status, vs display, toss result, team picks, points stake   |
| `BetmateCard`       | `betmate/BetmateCard.tsx`        | Avatar, username, points, action buttons                        |
| `FriendRequestCard` | `betmate/FriendRequestCard.tsx`  | Incoming request with accept/decline                            |
| `LeaderboardRow`    | `leaderboard/LeaderboardRow.tsx` | Rank, avatar, name, points, change indicator                    |
| `CoinAnimation`     | `bet/CoinAnimation.tsx`          | Animated coin flip (Framer Motion)                              |
| `TeamPickerCard`    | `bet/TeamPickerCard.tsx`         | Two team options, select one, deadline countdown                |
| `CountdownTimer`    | `shared/CountdownTimer.tsx`      | Live T-2h / T-1h deadline countdown                             |
| `StatusBadge`       | `shared/StatusBadge.tsx`         | Colour-coded bet/match status pill                              |
| `UserSearchResult`  | `betmate/UserSearchResult.tsx`   | Search result row with send request button                      |
| `PointsDisplay`     | `shared/PointsDisplay.tsx`       | Animated points number with +/- indicator                       |
| `ThemeToggle`       | `shared/ThemeToggle.tsx`         | Sun/moon icon toggle                                            |
| `NavSidebar`        | `layout/NavSidebar.tsx`          | Desktop sidebar navigation                                      |
| `NavBottomBar`      | `layout/NavBottomBar.tsx`        | Mobile bottom tab bar                                           |
| `AppShell`          | `layout/AppShell.tsx`            | Wraps authenticated pages — sidebar + bottom bar + content area |
| `PublicShell`       | `layout/PublicShell.tsx`         | Wraps public pages — landing nav + footer                       |

---

## 8. App Structure & Pages

### Public Routes (unauthenticated)

| Route     | Page          | Description                                              |
| --------- | ------------- | -------------------------------------------------------- |
| `/`       | `LandingPage` | Hero, how it works, features, disclaimer, about, contact |
| `/login`  | `LoginPage`   | Email + password login form                              |
| `/signup` | `SignupPage`  | Signup form with username, name, email, password         |

### Protected Routes (authenticated — inside `AppShell`)

| Route          | Page              | Description                                                |
| -------------- | ----------------- | ---------------------------------------------------------- |
| `/home`        | `HomePage`        | Match list — upcoming, live, completed tabs                |
| `/betmates`    | `BetmatesPage`    | My betmates, pending requests, sent requests, search users |
| `/bets`        | `BetsPage`        | All my bets — active, pending, completed tabs              |
| `/bets/:betId` | `BetDetailPage`   | Single bet detail — coin flip, team pick, result           |
| `/leaderboard` | `LeaderboardPage` | Full leaderboard + head-to-head selector                   |
| `/profile`     | `ProfilePage`     | Edit profile, change password, theme toggle                |

### Component Playground (dev only)

| Route         | Page             | Description                                                       |
| ------------- | ---------------- | ----------------------------------------------------------------- |
| `/playground` | `PlaygroundPage` | All components rendered for visual testing. Hidden in production. |

### Landing Page Sections (single scrollable page)

1. **Navbar** — logo, nav links, Login/Sign Up CTA
2. **Hero** — bold headline, sub-headline, CTA buttons, hero image/animation, disclaimer badge ("No real money — just bragging rights")
3. **How It Works** — 4 steps with icons: Add Betmates → Pick a Match → Flip the Coin → Win Points
4. **Features** — cards: Real IPL matches, Coin toss system, Live leaderboard, Head-to-head stats
5. **Friendly Betting Disclaimer** — clear section explaining no real money, just fun, friends only
6. **About** — story behind BetMate, who built it, why
7. **Contact / Support** — mailto link or contact form to reach the developer
8. **Footer** — links, copyright, disclaimer

---

## 9. Navigation Pattern

### Desktop (`lg` and above)

- Fixed left sidebar, `w-64`
- Logo at top
- Nav items: Home (Matches), Betmates, My Bets, Leaderboard, Profile
- Theme toggle at bottom
- Active item highlighted with accent background

### Mobile (`md` and below)

- Bottom tab bar, fixed to viewport bottom
- 5 tabs: Home, Betmates, Bets, Leaderboard, Profile
- Icon + label for each tab
- Active tab uses accent colour
- Safe area inset respected (iPhone notch/home bar)

### No nested routing madness

- Max 2 levels deep: `/bets` → `/bets/:betId`
- No modals hidden behind routes — use `Dialog`/`Drawer` components

---

## 10. Animations & Micro-interactions

Use **Framer Motion** for all significant animations.

| Interaction             | Animation                                      |
| ----------------------- | ---------------------------------------------- |
| Page transitions        | Fade + slide up (subtle, `duration: 0.2`)      |
| Card hover              | Slight lift (`y: -2`, shadow increase)         |
| Button press            | Scale down (`scale: 0.97`)                     |
| Modal open/close        | Scale + fade                                   |
| Drawer open/close       | Slide up from bottom                           |
| Skeleton → content      | Fade in                                        |
| Number changes (points) | Count-up animation                             |
| Coin flip               | 3D Y-axis rotation, fast spin then slow settle |
| Challenge sent          | Confetti burst                                 |
| Win result              | Confetti + zoom in                             |
| Loss result             | Subtle shake                                   |
| Tab switch              | Underline slides                               |
| Toast notifications     | Slide in from top-right                        |

Rules:

- Duration: `150ms`–`300ms` for UI interactions, `500ms`–`1s` for celebrations
- Always respect `prefers-reduced-motion` — wrap Framer Motion with the `useReducedMotion` hook
- Never animate layout shifts — only transform/opacity

---

## 11. Fun Moments (Animals & Celebrations)

These specific moments must have a fun visual:

| Moment              | Visual                                                 |
| ------------------- | ------------------------------------------------------ |
| Sending a challenge | Cricket ball flying animation + "Challenge sent!"      |
| Coin flip (win)     | 🦁 Lion roaring / tiger pounce illustration + confetti |
| Coin flip (loss)    | 🐶 Sad puppy illustration                              |
| Bet win (result in) | 🎉 Trophy + animal celebration + green confetti        |
| Bet loss            | 😅 Funny sad animal (duck? penguin?)                   |
| Leaderboard #1      | 👑 Crown on avatar                                     |
| Empty betmates list | 🦒 Giraffe looking around "No betmates yet..."         |
| Empty matches list  | 🏏 Cricket bat + ball "No matches today"               |
| Empty bets list     | 🐨 Koala sleeping "No bets yet..."                     |

Use **Lottie animations** (from LottieFiles — free library) where possible. For static illustrations use SVG. Never use low-quality raster images for these moments.

---

## 12. Images & Assets Strategy

- **Landing page hero**: Use a high-quality cricket/IPL themed illustration or a custom SVG composition. Source from Unsplash (free), LottieFiles, or unDraw.
- **IPL team logos**: Use SVG team logos — consistent, sharp at all sizes
- **User avatars**: Fallback to generated initials avatars (coloured by hash of username) — no default "grey person" icon
- **Animal illustrations**: Source from unDraw (https://undraw.co) or LottieFiles — consistent style, single illustration library only
- **All images**: WebP format, lazy loaded, with proper `alt` text
- **No stock photos of people** — illustrations only

Asset storage: `src/assets/` with subfolders: `illustrations/`, `logos/`, `animations/`

---

## 13. Code Organisation Rules

```
src/
├── apollo/              # Apollo Client setup only
├── components/
│   ├── ui/              # shadcn/ui base primitives
│   ├── layout/          # AppShell, NavSidebar, NavBottomBar, PublicShell
│   ├── match/           # MatchCard, MatchStatusBadge
│   ├── bet/             # BetCard, CoinAnimation, TeamPickerCard, BetDetailView
│   ├── betmate/         # BetmateCard, FriendRequestCard, UserSearchResult
│   ├── leaderboard/     # LeaderboardRow, HeadToHeadStats
│   └── shared/          # CountdownTimer, StatusBadge, PointsDisplay, ThemeToggle, EmptyState, ErrorState
├── context/
│   ├── AuthContext.tsx   # Current user state, login/logout helpers
│   └── ThemeContext.tsx  # dark/light mode state + toggle
├── graphql/
│   ├── queries/         # One file per domain: auth.ts, match.ts, bet.ts, friend.ts
│   └── mutations/       # One file per domain: auth.ts, bet.ts, friend.ts
├── hooks/               # Custom hooks: useAuth, useTheme, useDebounce, useCountdown
├── lib/
│   ├── utils.ts         # cn() helper, date formatters, misc utils
│   └── constants.ts     # App-wide constants (team names, status labels, etc.)
├── pages/
│   ├── public/          # LandingPage, LoginPage, SignupPage
│   ├── app/             # HomePage, BetmatesPage, BetsPage, BetDetailPage, LeaderboardPage, ProfilePage
│   └── PlaygroundPage.tsx
├── types/               # Shared TypeScript types (not generated — hand-written domain types)
└── assets/
    ├── illustrations/
    ├── logos/
    └── animations/
```

Rules:

- **One component per file.** File name = component name.
- **No files over 250 lines.** Split into sub-components or hooks if approaching this.
- **All exports are named exports** — no default exports except for page-level components.
- **No business logic in components** — extract to custom hooks.
- **No GraphQL queries/mutations inline in components** — import from `graphql/` files.
- **DRY strictly** — if the same JSX pattern appears twice, make a component.

---

## 14. Component Architecture Standard

> **Read this before writing any component or page.**

### The Rule: Components own their variants. Pages own their data.

A page should call a component with props — not reconstruct its internals inline. If you find yourself writing the same structure twice, or writing raw HTML inside a page to build something that looks like a reusable widget, stop and make a component.

**Wrong — raw patterns inline at the page level:**

```tsx
// Repeated 8 times in the form section — this is the problem
<div className="flex flex-col gap-2">
  <label className="text-xs font-medium text-muted-foreground">Email address</label>
  <div className="relative">
    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" />
    <Input placeholder="you@example.com" type="email" className="pl-9" />
  </div>
  <p className="text-xs text-destructive">Invalid email</p>
</div>
```

**Right — component handles all variants via props:**

```tsx
<FormField label="Email address" error="Invalid email">
  <Input type="email" leadingIcon={Mail} placeholder="you@example.com" />
</FormField>
```

### Built-in reusable components

Use these everywhere instead of building the equivalent inline:

| Component     | Location                | Props                                                                         |
| ------------- | ----------------------- | ----------------------------------------------------------------------------- |
| `FormField`   | `ui/form-field.tsx`     | `label`, `required`, `error`, `hint`, `className`                             |
| `StatCard`    | `ui/stat-card.tsx`      | `icon`, `label`, `value`, `colorVar`                                          |
| `StatusBadge` | `ui/status-badge.tsx`   | `variant` (won/lost/pending/accepted/declined/live)                           |
| `AppDialog`   | `ui/app-dialog.tsx`     | `trigger`, `icon`, `iconVariant`, `title`, `description`, `body`, `actions[]` |
| `CountTabs`   | `ui/count-tabs.tsx`     | `items[]` (value/label/count/live), `defaultValue`, `onValueChange`           |
| `Button`      | `ui/button.tsx`         | `variant`, `size`, `icon`, `loading`                                          |
| `Badge`       | `ui/badge.tsx`          | `variant`, `icon`                                                             |
| `UserAvatar`  | `ui/user-avatar.tsx`    | `userId`, `name`, `src`, `size`                                               |
| `AvatarDuo`   | `ui/user-avatar.tsx`    | `challenger`, `challengee`, `size`                                            |
| `AvatarStack` | `ui/user-avatar.tsx`    | `users[]`, `max`                                                              |
| `Input`       | `ui/input.tsx`          | `leadingIcon`, `trailingIcon`, all native props                               |
| `LogoLoader`  | `shared/LogoLoader.tsx` | `size`, `showWordmark`                                                        |

### How to decide: component vs inline

Make a component when:

- The same visual pattern appears more than once (across pages or within a page)
- A pattern has multiple states (error, disabled, loading, variants)
- The pattern has internal logic or classes that shouldn't leak into pages
- You find yourself copying and adjusting a block of JSX

Keep it inline when:

- It's a truly one-off layout unique to that page
- It's demo or dev-only code (Playground sections like skeletons, palette swatches)
- Extracting it would require more props than JSX lines

### Page code should read like a config, not an implementation

A well-built page component reads like a list of what to show, not how to render it:

```tsx
// Good — page is declarative
<FormField label="Username" required error={errors.username?.message}>
  <Input placeholder="betmaster99" />
</FormField>

// Bad — page knows too much about layout mechanics
<div className="flex flex-col gap-2">
  <label className="text-xs font-medium ...">Username <span className="text-destructive">*</span></label>
  <Input placeholder="betmaster99" />
  {errors.username && <p className="text-xs text-destructive">{errors.username.message}</p>}
</div>
```

---

## 15. Logging & Comments Standard

### Console Logging

```typescript
// Pattern: use a namespaced prefix for easy filtering in DevTools
console.log("[Auth]", "Login success", { userId });
console.error("[Apollo]", "Query failed", error);
console.warn("[CoinFlip]", "Toss already done");
```

- Use `[ComponentName]` or `[ServiceName]` prefix on every log
- Never log sensitive data (tokens, passwords, full user objects with email)
- In production (`NODE_ENV === "production"`): suppress all `console.log` and `console.warn` via a global override in `main.tsx`
- Keep `console.error` active in production for genuine errors

### Comments

- Write comments only where the **why** is non-obvious (same rule as backend)
- No comments describing what the code does — the code should be self-describing
- Comments for: non-obvious timing logic, browser quirks, workarounds, accessibility notes

---

## 16. Browser & Device Support

| Browser        | Min version                           |
| -------------- | ------------------------------------- |
| Chrome         | 110+                                  |
| Firefox        | 110+                                  |
| Safari         | 16+ (critical — test cookie handling) |
| Edge           | 110+                                  |
| Safari iOS     | 16+                                   |
| Chrome Android | 110+                                  |

Rules:

- No IE support
- Use `clsx`/`tailwind-merge` — never manual string concatenation for class names
- Test touch events on mobile (tap, swipe, long press) — mouse events alone are not enough
- Test on actual iOS Safari — cookies and `SameSite=None` behave differently there
- Use `safe-area-inset` for iPhone notch/home bar in bottom nav

---

## 17. What NOT to Do

- ❌ No `alert()`, `confirm()`, `prompt()` — use `Dialog` components
- ❌ No inline styles — use Tailwind classes
- ❌ No arbitrary Tailwind values (`w-[347px]`) unless absolutely necessary
- ❌ No hardcoded colours outside the theme system
- ❌ No `any` TypeScript type — use proper types or `unknown`
- ❌ No direct `fetch()` calls — all server data through Apollo Client
- ❌ No storing tokens in `localStorage` — refresh token in HttpOnly cookie, access token in Apollo reactive variable (memory only)
- ❌ No page navigation inside modals — modals are for confirmations and quick actions only
- ❌ No different design for "the same thing" — confirmation dialogs, forms, cards must look identical everywhere
- ❌ No test files for now — focus on functionality first
- ❌ No feature work before all base components are built and tested on `/playground`

---

## Reference: Old BetMate Project

Located at `C:\Users\akhil\projects\old betmate\BetMate.ap\frontend\`.

Pages that existed: LandingPage, SignIn, SignUp, HomePage (matches + betmate selector), BetMates, CoinFlip, CurrentBets, MyPoints.

**What to take from it**: the core user flow and feature set.
**What to improve on**: everything visual. The old app was functional but had basic Tailwind cards, no animations, clunky navigation with `alert()` calls, no consistent design language, and no dark mode.

---

_Last updated: August 2026 — colour system updated to 35/10/35/10/10 (Blue family + Gold family, symmetric dual-brand)_
