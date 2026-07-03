# HireFlow AI — Feature Documentation

> **Version**: 1.0.0 · **Last Updated**: July 3, 2026 · **Platform**: [hire-flow-dasboard.vercel.app](https://hire-flow-dasboard.vercel.app)

HireFlow AI is a premium, AI-powered SaaS Job Board built with Next.js 15, TypeScript, and Tailwind CSS v4. This document provides a comprehensive, feature-by-feature breakdown of the entire application.

---

## Table of Contents

1. [Landing Page](#1-landing-page)
2. [Authentication System](#2-authentication-system)
3. [Job Discovery & Search](#3-job-discovery--search)
4. [Job Details View](#4-job-details-view)
5. [Company Directory](#5-company-directory)
6. [Company Profile View](#6-company-profile-view)
7. [AI-Powered Dashboard](#7-ai-powered-dashboard)
8. [Saved Jobs](#8-saved-jobs)
9. [User Profile](#9-user-profile)
10. [Settings](#10-settings)
11. [Command Palette](#11-command-palette)
12. [Career Resources Hub](#12-career-resources-hub)
13. [About Us](#13-about-us)
14. [Design System & Theming](#14-design-system--theming)
15. [State Management Architecture](#15-state-management-architecture)
16. [Data Fetching Layer](#16-data-fetching-layer)
17. [CI/CD Pipeline](#17-cicd-pipeline)

---

## 1. Landing Page

**Route**: `/` · **File**: [app/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/page.tsx)

The landing page is composed of **11 distinct sections**, each designed to engage visitors and convert them into active users.

### 1.1 Hero Section
**Component**: [hero-section.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/hero-section.tsx)

- Animated multi-color gradient headline ("faster & smarter")
- Dual floating background glows and ambient grid
- Search bar with keyword, location, and category inputs
- Live statistics cards (e.g., "10k+ Active Jobs", "5k+ Companies")
- Glassmorphic card styling with hover micro-animations

### 1.2 Trusted Companies Marquee
**Component**: [trusted-companies.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/trusted-companies.tsx)

- Infinite scrolling marquee displaying company logos
- Auto-scrolling animation for visual dynamism

### 1.3 Featured Jobs
**Component**: [featured-jobs.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/featured-jobs.tsx)

- Curated grid of top job listings marked as `featured: true`
- Each card shows title, company, location, salary range, and work mode
- Direct "View Job" navigation link

### 1.4 Popular Categories
**Component**: [popular-categories.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/popular-categories.tsx)

- Visual grid of job categories (Engineering, Design, Marketing, etc.)
- Each category card displays an icon, name, and active job count
- Click-to-filter functionality linking to `/jobs?category=...`

### 1.5 AI Features Showcase
**Component**: [ai-features.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/ai-features.tsx)

- Bento-box grid layout highlighting AI capabilities
- Interactive widgets: AI Skill Fit score, Estimated Pay range (₹18L – ₹45L PA)
- Feature cards: Smart Matching, Resume Analysis, Salary Predictions, Skill Gap Analysis

### 1.6 Top Companies
**Component**: [top-companies.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/top-companies.tsx)

- Showcase of highest-rated companies with ratings, open positions, and tech stacks
- Company logo rendering with fallback initials via `CompanyLogo` component

### 1.7 Testimonials
**Component**: [testimonials.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/testimonials.tsx)

- User review cards with star ratings, names, roles, and avatar initials
- Responsive grid layout

### 1.8 Pricing Section
**Component**: [pricing-section.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/pricing-section.tsx)

- Three-tier pricing model (Free, Pro, Enterprise) in Indian Rupees (INR)
- "Most Popular" badge on the Pro plan
- Feature comparison list for each tier

### 1.9 FAQ Section
**Component**: [faq-section.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/faq-section.tsx)

- Accordion-based FAQ using Radix UI primitives
- Smooth expand/collapse animations

### 1.10 Career Resources Preview
**Component**: [career-resources.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/career-resources.tsx)

- Teaser cards for interview guides, resume templates, and salary insights
- Links to the Resources Hub

### 1.11 Newsletter Section
**Component**: [newsletter-section.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/landing/newsletter-section.tsx)

- Email subscription form with gradient background
- Call-to-action for weekly job alerts

---

## 2. Authentication System

**Component**: [auth-modal.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/common/auth-modal.tsx)  
**State**: [auth-store.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/store/auth-store.ts)

| Feature | Description |
|---------|-------------|
| **Login/Signup Modal** | Spring-animated modal (Framer Motion) triggered by Navbar buttons |
| **Social Auth UI** | "Continue with Google" and "Continue with GitHub" buttons |
| **Email/Password Form** | Standard email + password form with tabbed Login/Signup views |
| **Persistent Sessions** | Auth state persisted to `localStorage` via Zustand `persist` middleware (key: `hireflow-auth-storage`) |
| **User Initials** | Auto-generated from the user's display name for avatar display |
| **Logout** | Clears user state and resets the Navbar to the logged-out layout |

> **Note**: This is a frontend-only authentication UI. No backend or OAuth provider is integrated. Ready for NextAuth or Supabase when a backend is added.

---

## 3. Job Discovery & Search

**Route**: `/jobs` · **Components**: [job-list.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/jobs/job-list.tsx), [job-search-bar.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/jobs/job-search-bar.tsx), [job-filters.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/jobs/job-filters.tsx)

### Search Features
- **Debounced Text Search**: Uses custom [use-debounce.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-debounce.ts) hook (300ms delay) to prevent excessive re-renders
- **Full-Text Matching**: Searches across job title, company name, and skill tags simultaneously
- **Location Search**: Filters jobs by city/state substring match

### Filter System
A comprehensive sidebar filter panel with the following facets:

| Filter | Type | Options |
|--------|------|---------|
| **Category** | Dropdown | Engineering, Design, Marketing, Sales, Data, Product, etc. |
| **Employment Type** | Radio | Full-time, Part-time, Contract, Freelance, Internship |
| **Experience Level** | Radio | Entry, Mid, Senior, Lead, Executive |
| **Work Mode** | Radio | Remote, Hybrid, On-site |
| **Salary Range** | Range Slider | Minimum salary threshold (INR) |

### Sorting Options
| Sort By | Description |
|---------|-------------|
| **Most Relevant** | Sorted by AI match score (descending) |
| **Most Recent** | Sorted by `postedAt` date (newest first) |
| **Salary: High to Low** | Sorted by `salaryMax` descending |
| **Salary: Low to High** | Sorted by `salaryMax` ascending |

### Job Cards
**Component**: [job-card.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/jobs/job-card.tsx)

- Company logo with fallback initial rendering
- Job title, company name, location, and work mode badge
- Salary range formatted in INR (e.g., ₹14,80,000 – ₹22,40,000)
- Skill tags displayed as pill badges
- **Bookmark toggle** to save/unsave jobs (persisted via Zustand)
- **"Featured"** and **"Urgent"** badge indicators
- **Match Score** indicator (e.g., "92% Match")
- Hydration-safe mounting guard to prevent SSR/client mismatch on bookmark state

---

## 4. Job Details View

**Route**: `/jobs/[id]` · **File**: [app/jobs/[id]/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/jobs/[id]/page.tsx)

| Section | Description |
|---------|-------------|
| **Header** | Company logo, job title, location, work mode, and employment type |
| **Salary Breakdown** | Min–Max range with currency formatting |
| **Description** | Full job description paragraph |
| **Responsibilities** | Bulleted list of key responsibilities |
| **Requirements** | Bulleted list of qualifications |
| **Nice to Have** | Optional skills and experience |
| **Skills** | Displayed as interactive pill badges |
| **Benefits** | List of perks (Health Insurance, Stock Options, etc.) |
| **AI Match Widget** | Shows compatibility score between user profile and job requirements |
| **Apply / Save Buttons** | Stateful buttons with client-side hydration guards |

---

## 5. Company Directory

**Route**: `/companies` · **Component**: [company-card.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/companies/company-card.tsx)

- Searchable grid of company profile cards
- Each card displays:
  - Company logo (SVG) with initial-based fallback
  - Company name, industry, and headquarters
  - Employee count and star rating
  - Open positions count
  - Tech stack badges
- Cards are sorted by rating (descending) by default
- Click navigates to the company profile page (`/companies/[slug]`)

---

## 6. Company Profile View

**Route**: `/companies/[slug]` · **File**: [app/companies/[slug]/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/companies/[slug]/page.tsx)

- Full company description and industry
- Founding year, headquarters, and employee count
- Rating with review count
- Complete tech stack listing
- Benefits and perks
- Social media links (LinkedIn, Twitter, GitHub)
- List of open job positions at the company

---

## 7. AI-Powered Dashboard

**Route**: `/dashboard` · **File**: [app/dashboard/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/dashboard/page.tsx)

### 7.1 Stats Cards
**Component**: [stats-cards.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/dashboard/stats-cards.tsx)

Four KPI cards at the top of the dashboard:

| Metric | Description |
|--------|-------------|
| **Saved Jobs** | Total bookmarked positions with trend indicator |
| **Applied Jobs** | Total applications submitted with trend indicator |
| **Interviews** | Upcoming interview count with trend indicator |
| **Profile Views** | Number of times the profile has been viewed with trend indicator |

### 7.2 Application Tracker
**Component**: [application-tracker.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/dashboard/application-tracker.tsx)

- Kanban-style status board tracking applications through stages:
  - **Applied** → **Reviewed** → **Interview** → **Offer** → **Rejected**
- Each card shows the job title, company name, and the date of the last status update

### 7.3 AI Career Insights
**Component**: [ai-insights.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/dashboard/ai-insights.tsx)

| AI Feature | Description |
|------------|-------------|
| **Market Competitiveness** | Score out of 100 with animated progress bar (e.g., "Top 15% of candidates") |
| **Predicted Salary Range** | AI-estimated salary based on skills and location (INR formatted) |
| **Skill Gaps** | Red-highlighted badges for missing in-demand skills |
| **Recommendations** | Actionable career improvement tips (e.g., "Add Kubernetes to your resume") |

### 7.4 Upcoming Interviews
**Component**: [upcoming-interviews.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/dashboard/upcoming-interviews.tsx)

- List of scheduled interviews with date, time, interview type (Phone, Video, On-site, Technical), and interviewer name
- Notes field for preparation reminders

### 7.5 Activity Timeline
**Component**: [activity-timeline.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/dashboard/activity-timeline.tsx)

- Chronological feed of recent actions (applied, saved, viewed, interview scheduled, offer received, profile updated)
- Timestamped entries with descriptive icons

---

## 8. Saved Jobs

**Route**: `/saved` · **File**: [app/saved/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/saved/page.tsx)

- Displays all bookmarked jobs in a responsive 2-column grid
- **Search within saved jobs**: Filter saved list by title or company name
- **Empty state**: Friendly message with a "Browse Jobs" CTA when no jobs are saved
- **Skeleton loading**: Animated placeholder cards during data fetch
- Hydration-safe rendering with client-side mount guard

---

## 9. User Profile

**Route**: `/profile` · **File**: [app/profile/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/profile/page.tsx)

| Section | Description |
|---------|-------------|
| **User Card** | Avatar initials, name, current title, location, and edit button |
| **Profile Completeness** | Progress bar (e.g., 85%) with checklist (Resume ✓, Skills ✓, Portfolio ○) |
| **AI Resume Review** | AI-generated feedback on resume strengths and weaknesses |
| **Resume Management** | Upload, view, and replace resume files |
| **Experience Timeline** | Vertical timeline showing professional history with dates and descriptions |
| **View Public Profile** | Button to preview how the profile appears to recruiters |

---

## 10. Settings

**Route**: `/settings` · **File**: [app/settings/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/settings/page.tsx)

| Tab | Description |
|-----|-------------|
| **Account** | Edit first name, last name, email, and current title |
| **Notifications** | Notification preferences (UI placeholder) |
| **Privacy & Security** | Privacy controls (UI placeholder) |
| **Preferences** | General app preferences (UI placeholder) |
| **Danger Zone** | Permanent account deletion button with warning |

---

## 11. Command Palette

**Component**: [command-palette.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/common/command-palette.tsx)

- **Keyboard shortcut**: `Ctrl + K` (Windows) / `⌘ + K` (Mac) to open
- Fuzzy search across:
  - **Navigation pages** (Jobs, Companies, Dashboard, Saved, Resources)
  - **Top 20 jobs** (by title, company, and location)
  - **Top 10 companies** (by name and industry)
- Arrow key navigation with highlighted active item
- Enter to execute action (navigates to the selected page/job/company)
- Escape to close
- Animated modal overlay with Framer Motion

---

## 12. Career Resources Hub

**Route**: `/resources` · **File**: [app/resources/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/resources/page.tsx)

- Currently displays a "Coming Soon" placeholder page
- Planned content: Interview guides, resume templates, and salary negotiation advice
- "Return Home" button links back to the landing page

---

## 13. About Us

**Route**: `/about` · **File**: [app/about/page.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/about/page.tsx)

- **Mission statement** with gradient headline
- **Key statistics**: 50k+ Active Users, 120+ Countries, 2M+ AI Matches, 98% Success Rate
- **Problem/Solution narrative**: Explains the broken traditional job search vs. HireFlow's AI approach
- **Call-to-action**: "Explore Opportunities" and "View Pricing" buttons

---

## 14. Design System & Theming

**File**: [app/globals.css](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/app/globals.css)

| Feature | Implementation |
|---------|----------------|
| **Color System** | OKLCH-based CSS variables for perceptual uniformity |
| **Dark/Light Mode** | Toggle via [theme-toggle.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/common/theme-toggle.tsx), powered by `next-themes` |
| **Default Theme** | Dark mode on initial load |
| **Typography** | Geist Sans + Geist Mono (Google Fonts) |
| **Glassmorphism** | `backdrop-blur` with semi-transparent borders and shadows |
| **Scroll Progress** | [scroll-progress.tsx](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/components/common/scroll-progress.tsx) — gradient progress bar at the top of the viewport |
| **Animations** | Framer Motion for page transitions, hover effects, and entry animations |
| **Shadow Glow** | Custom `shadow-glow` utility for premium button effects |
| **Responsive** | Fully responsive from mobile (320px) to ultra-wide displays |

---

## 15. State Management Architecture

Built with **Zustand** (v5) with persistence middleware.

| Store | File | Purpose |
|-------|------|---------|
| **Auth Store** | [auth-store.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/store/auth-store.ts) | Manages user login/signup/logout with `localStorage` persistence |
| **Job Store** | [job-store.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/store/job-store.ts) | Tracks saved jobs, applied jobs, and active filters. Persists `savedJobs` and `appliedJobs` arrays to `localStorage` |
| **UI Store** | [ui-store.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/store/ui-store.ts) | Controls sidebar, mobile menu, and modal visibility (non-persistent, resets on reload) |

---

## 16. Data Fetching Layer

Built with **TanStack React Query v5** for server-state management.

| Hook | File | Description |
|------|------|-------------|
| `useJobs(filters?)` | [use-jobs.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-jobs.ts) | Fetches and filters the full job list with simulated 800ms network delay |
| `useJob(slugOrId)` | [use-jobs.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-jobs.ts) | Fetches a single job by slug or ID |
| `useFeaturedJobs()` | [use-jobs.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-jobs.ts) | Returns jobs with `featured: true` |
| `useJobsByCategory(cat)` | [use-jobs.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-jobs.ts) | Returns jobs filtered by category slug |
| `useCompanies(query?)` | [use-companies.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-companies.ts) | Fetches and searches the company list, sorted by rating |
| `useCompany(slugOrId)` | [use-companies.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-companies.ts) | Fetches a single company by slug or ID |
| `useDebounce(value, ms)` | [use-debounce.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/hooks/use-debounce.ts) | Generic debounce hook used for search inputs |

> **Note**: All data fetching currently uses mock data with simulated delays. The architecture is designed to be a drop-in replacement for real API endpoints by simply changing the `queryFn` implementations.

---

## 17. CI/CD Pipeline

### Continuous Integration
**File**: [.github/workflows/ci.yml](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/.github/workflows/ci.yml)

| Step | Command | Description |
|------|---------|-------------|
| Checkout | `actions/checkout@v4` | Clones the repository |
| Node.js Setup | `actions/setup-node@v4` | Installs Node.js 20.x with npm cache |
| Install | `npm ci` | Clean install of dependencies |
| Next.js Cache | `actions/cache@v4` | Caches `.next/cache` for faster builds |
| Lint | `npm run lint` | Runs ESLint with Next.js rules |
| Type Check | `npm run type-check` | Strict TypeScript compilation check (`tsc --noEmit`) |
| Build | `npm run build` | Full production build validation |

**Triggers**: Push to `main`, Pull Requests targeting `main`

### Continuous Deployment
**File**: [.github/workflows/deploy.yml](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/.github/workflows/deploy.yml)

| Event | Action |
|-------|--------|
| **Pull Request** | Builds and deploys a **Preview** environment to Vercel |
| **Push to `main`** | Builds and deploys to **Production** on Vercel |

**Required GitHub Secrets**: `VERCEL_TOKEN`, `VERCEL_ORG_ID`, `VERCEL_PROJECT_ID`

### Docker Support
**File**: [Dockerfile](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/Dockerfile) · [.dockerignore](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/.dockerignore)

- Multi-stage build (deps → builder → runner)
- Next.js standalone output mode for minimal image size (~150MB)
- Non-root `nextjs` user for security
- Exposed on port 3000

---

## Type System

**File**: [types/index.ts](file:///c:/Users/shashank/Desktop/HireFlow_Dasboard/types/index.ts)

The application uses strongly-typed TypeScript interfaces throughout:

| Type | Description |
|------|-------------|
| `Job` | Full job listing with company, salary, skills, and metadata |
| `Company` | Company profile with industry, tech stack, and social links |
| `JobFilters` | Search, location, category, employment type, experience, work mode, salary range, sort |
| `Application` | Tracks job application status (Applied → Reviewed → Interview → Offer → Rejected) |
| `Interview` | Scheduled interview with date, time, type, and interviewer |
| `AIInsight` | Resume score, skill gaps, trending skills, salary prediction, recommendations |
| `DashboardStats` | KPI metrics with trend percentages |
| `PricingPlan` | Pricing tier with features and CTA |
| `Category` | Job category with icon, color, and count |
| `Testimonial` | User review with rating |
| `Resource` | Career resource article metadata |

---

*This documentation was auto-generated from the HireFlow AI codebase on July 3, 2026.*
