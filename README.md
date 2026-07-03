# HireFlow AI

HireFlow AI is a world-class SaaS Job Board application designed with a premium, modern aesthetic. It leverages artificial intelligence to provide personalized career insights, resume matching, and salary predictions.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4, CSS Variables (OKLCH color system)
- **UI Components**: custom built based on Radix UI / shadcn/ui principles
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **State Management**: Zustand
- **Data Fetching**: TanStack React Query v5

## ✨ Key Features

- **AI-Powered Matching**: Get a compatibility score for every job based on your profile.
- **Skill Gap Analysis**: Identify missing skills required for your dream role.
- **Dynamic Dashboard**: Track applications, upcoming interviews, and recent activities.
- **Premium Design System**: Glassmorphism, smooth micro-animations, and semantic color tokens.
- **Advanced Filtering**: Debounced search and multi-faceted job filtering.

## 🛠️ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

- `/app`: Next.js App Router pages and layouts
- `/components`: Reusable UI components (landing, jobs, companies, dashboard)
- `/data`: Mock data bridging the gap before backend integration
- `/store`: Zustand global state management
- `/hooks`: Custom React Query hooks for data fetching
- `/types`: TypeScript interfaces and definitions
- `/lib`: Utility functions (cn, formatters)

## 🎨 Design Philosophy

HireFlow AI is built with a focus on:
- **Minimalistic & Premium Aesthetics**: Clean interfaces with high readability.
- **Dynamic Interactions**: Subtle hover effects and fluid layout transitions.
- **Accessibility First**: Semantic HTML and proper contrast ratios.

## 📜 License

This project is licensed under the MIT License.
