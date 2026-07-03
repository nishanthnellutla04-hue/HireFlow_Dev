import {
  type Testimonial,
  type PricingPlan,
  type FAQ,
  type Application,
  type Interview,
  type ActivityItem,
  type DashboardStats,
  type AIInsight,
  type Resource,
} from "@/types";
import { jobs } from "./jobs";

export const testimonials: Testimonial[] = [
  {
    id: "1", name: "Sarah Chen", role: "Senior Engineer", company: "Previously at Uber",
    avatar: "SC", content: "HireFlow AI's resume matching changed everything. I landed my dream role at a top-tier startup within 3 weeks. The AI insights were incredibly accurate.",
    rating: 5,
  },
  {
    id: "2", name: "Marcus Johnson", role: "Product Designer", company: "Now at Figma",
    avatar: "MJ", content: "The job recommendations were spot-on. Instead of scrolling through hundreds of irrelevant listings, I found curated positions that matched my skills perfectly.",
    rating: 5,
  },
  {
    id: "3", name: "Emily Rodriguez", role: "Data Scientist", company: "Now at Netflix",
    avatar: "ER", content: "The skill gap analysis helped me upskill strategically. Within 6 months, I transitioned from analytics to a senior data science role with a 40% salary increase.",
    rating: 5,
  },
  {
    id: "4", name: "David Park", role: "Engineering Manager", company: "Now at Stripe",
    avatar: "DP", content: "As a hiring manager, the quality of candidates through HireFlow AI is unmatched. The AI matching saves us hours of resume screening every week.",
    rating: 5,
  },
  {
    id: "5", name: "Priya Sharma", role: "Frontend Developer", company: "Now at Vercel",
    avatar: "PS", content: "The salary prediction feature gave me the confidence to negotiate better. I ended up with an offer ₹2.5 Lakhs above what I initially expected. Incredible tool.",
    rating: 5,
  },
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free", name: "Starter", description: "Perfect for exploring opportunities",
    price: 0, interval: "month",
    features: [
      "Browse all job listings",
      "Save up to 10 jobs",
      "Basic profile",
      "Email job alerts",
      "Community support",
    ],
    popular: false, cta: "Get Started Free",
  },
  {
    id: "pro", name: "Professional", description: "For serious job seekers",
    price: 1999, interval: "month",
    features: [
      "Everything in Starter",
      "AI Resume Match Score",
      "Unlimited saved jobs",
      "Priority applications",
      "Skill gap analysis",
      "Salary predictions",
      "Advanced filters",
      "Priority support",
    ],
    popular: true, cta: "Start Free Trial",
  },
  {
    id: "enterprise", name: "Enterprise", description: "For teams and recruiters",
    price: 7999, interval: "month",
    features: [
      "Everything in Professional",
      "Bulk resume analysis",
      "Team collaboration",
      "Custom integrations",
      "Applicant tracking",
      "Analytics dashboard",
      "Dedicated account manager",
      "SLA guarantee",
    ],
    popular: false, cta: "Contact Sales",
  },
];

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How does the AI resume matching work?",
    answer: "Our AI analyzes your resume against job requirements using natural language processing. It considers your skills, experience, education, and career trajectory to generate a compatibility score from 0-100, helping you focus on the most relevant opportunities.",
  },
  {
    id: "2",
    question: "Is HireFlow AI free to use?",
    answer: "Yes! Our Starter plan is completely free and gives you access to all job listings, basic profile features, and email alerts. Our Professional plan offers AI-powered features like resume matching, salary predictions, and skill gap analysis for ₹1,999/month.",
  },
  {
    id: "3",
    question: "How accurate are the salary predictions?",
    answer: "Our salary predictions are based on real-time market data from thousands of job listings, considering factors like location, experience level, skills, and company size. They typically fall within 10% of actual offers.",
  },
  {
    id: "4",
    question: "Can companies post jobs on HireFlow AI?",
    answer: "Absolutely. Companies can create an employer account to post jobs, manage applications, and access our AI-powered candidate matching. Contact our sales team for Enterprise pricing and custom solutions.",
  },
  {
    id: "5",
    question: "How do I cancel my subscription?",
    answer: "You can cancel your subscription anytime from your account settings. There are no cancellation fees. You'll continue to have access to your paid features until the end of your billing period.",
  },
  {
    id: "6",
    question: "Is my data secure?",
    answer: "Security is our top priority. We use end-to-end encryption, SOC 2 Type II compliant infrastructure, and never share your personal data with employers without your explicit consent. You can delete your account and all data at any time.",
  },
];

export const applications: Application[] = [
  { id: "1", job: jobs[0], status: "Interview", appliedAt: "2026-06-15T10:00:00Z", updatedAt: "2026-06-28T14:00:00Z", notes: "Technical interview scheduled" },
  { id: "2", job: jobs[3], status: "Reviewed", appliedAt: "2026-06-18T09:00:00Z", updatedAt: "2026-06-25T11:00:00Z" },
  { id: "3", job: jobs[6], status: "Applied", appliedAt: "2026-06-22T14:00:00Z", updatedAt: "2026-06-22T14:00:00Z" },
  { id: "4", job: jobs[18], status: "Offer", appliedAt: "2026-06-01T08:00:00Z", updatedAt: "2026-06-29T16:00:00Z", notes: "Offer received!" },
  { id: "5", job: jobs[9], status: "Rejected", appliedAt: "2026-06-10T11:00:00Z", updatedAt: "2026-06-20T09:00:00Z" },
];

export const interviews: Interview[] = [
  { id: "1", job: jobs[0], date: "2026-07-05", time: "10:00 AM PST", type: "Technical", interviewer: "Alex Rivera, Staff Engineer" },
  { id: "2", job: jobs[3], date: "2026-07-08", time: "2:00 PM PST", type: "Video", interviewer: "Maya Patel, Engineering Manager" },
  { id: "3", job: jobs[18], date: "2026-07-03", time: "11:00 AM PST", type: "Phone", interviewer: "James Wilson, Recruiter" },
];

export const activities: ActivityItem[] = [
  { id: "1", type: "offer", title: "Offer Received", description: "Platform Engineer at Stripe", timestamp: "2026-06-29T16:00:00Z", icon: "Trophy" },
  { id: "2", type: "interview", title: "Interview Scheduled", description: "Senior Frontend Engineer at Google", timestamp: "2026-06-28T14:00:00Z", icon: "Calendar" },
  { id: "3", type: "applied", title: "Application Submitted", description: "Data Scientist at Spotify", timestamp: "2026-06-22T14:00:00Z", icon: "Send" },
  { id: "4", type: "saved", title: "Job Saved", description: "ML Ops Engineer at Tesla", timestamp: "2026-06-21T09:00:00Z", icon: "Bookmark" },
  { id: "5", type: "viewed", title: "Profile Viewed", description: "Recruiter from Netflix viewed your profile", timestamp: "2026-06-20T11:00:00Z", icon: "Eye" },
  { id: "6", type: "profile_update", title: "Skills Updated", description: "Added TypeScript, React, and Next.js", timestamp: "2026-06-19T10:00:00Z", icon: "Pencil" },
];

export const dashboardStats: DashboardStats = {
  savedJobs: 24,
  appliedJobs: 12,
  interviews: 3,
  profileViews: 847,
  savedJobsTrend: 12,
  appliedJobsTrend: 8,
  interviewsTrend: 50,
  profileViewsTrend: 23,
};

export const aiInsights: AIInsight = {
  resumeScore: 87,
  skillGaps: ["GraphQL", "Kubernetes", "System Design", "AWS Certified"],
  trendingSkills: [
    { name: "AI/ML", growth: 145 },
    { name: "Rust", growth: 89 },
    { name: "TypeScript", growth: 67 },
    { name: "Kubernetes", growth: 54 },
    { name: "Next.js", growth: 48 },
    { name: "Go", growth: 42 },
  ],
  salaryPrediction: { min: 165000, max: 245000, median: 195000 },
  recommendations: [
    "Add more quantifiable achievements to your resume",
    "Consider getting AWS Solutions Architect certification",
    "Highlight your leadership experience more prominently",
    "Add a portfolio link showcasing your best projects",
  ],
};

export const resources: Resource[] = [
  { id: "1", title: "Mastering the System Design Interview", description: "A comprehensive guide to acing system design rounds at top tech companies.", category: "Interview Prep", readTime: "12 min", image: "system-design" },
  { id: "2", title: "Negotiating Your Tech Salary in 2026", description: "Data-driven strategies to maximize your compensation package.", category: "Career Growth", readTime: "8 min", image: "salary" },
  { id: "3", title: "Building a Portfolio That Gets Noticed", description: "How to showcase your work to stand out from thousands of applicants.", category: "Career Growth", readTime: "10 min", image: "portfolio" },
];
