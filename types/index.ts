// ============================================
// HireFlow AI — Core Type Definitions
// ============================================

export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Freelance" | "Internship";
export type ExperienceLevel = "Entry" | "Mid" | "Senior" | "Lead" | "Executive";
export type WorkMode = "Remote" | "Hybrid" | "On-site";
export type ApplicationStatus = "Applied" | "Reviewed" | "Interview" | "Offer" | "Rejected";

export interface Company {
  id: string;
  name: string;
  slug: string;
  logo: string;
  coverImage?: string;
  description: string;
  industry: string;
  website: string;
  founded: number;
  headquarters: string;
  employeeCount: string;
  rating: number;
  reviewCount: number;
  openPositions: number;
  techStack: string[];
  benefits: string[];
  socialLinks: {
    linkedin?: string;
    twitter?: string;
    github?: string;
  };
}

export interface Job {
  id: string;
  title: string;
  slug: string;
  company: Company;
  description: string;
  responsibilities: string[];
  requirements: string[];
  niceToHave?: string[];
  salaryMin: number;
  salaryMax: number;
  currency: string;
  location: string;
  workMode: WorkMode;
  employmentType: EmploymentType;
  experienceLevel: ExperienceLevel;
  skills: string[];
  benefits: string[];
  category: string;
  postedAt: string;
  closingDate?: string;
  featured: boolean;
  urgent: boolean;
  applicantCount: number;
  matchScore?: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  jobCount: number;
  description: string;
  color: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: number;
  interval: "month" | "year";
  features: string[];
  popular: boolean;
  cta: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface Application {
  id: string;
  job: Job;
  status: ApplicationStatus;
  appliedAt: string;
  updatedAt: string;
  notes?: string;
}

export interface Interview {
  id: string;
  job: Job;
  date: string;
  time: string;
  type: "Phone" | "Video" | "On-site" | "Technical";
  interviewer: string;
  notes?: string;
}

export interface ActivityItem {
  id: string;
  type: "applied" | "saved" | "viewed" | "interview" | "offer" | "profile_update";
  title: string;
  description: string;
  timestamp: string;
  icon: string;
}

export interface DashboardStats {
  savedJobs: number;
  appliedJobs: number;
  interviews: number;
  profileViews: number;
  savedJobsTrend: number;
  appliedJobsTrend: number;
  interviewsTrend: number;
  profileViewsTrend: number;
}

export interface AIInsight {
  resumeScore: number;
  skillGaps: string[];
  trendingSkills: { name: string; growth: number }[];
  salaryPrediction: { min: number; max: number; median: number };
  recommendations: string[];
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
}

export interface JobFilters {
  search: string;
  location: string;
  category: string;
  employmentType: EmploymentType | "";
  experienceLevel: ExperienceLevel | "";
  workMode: WorkMode | "";
  salaryMin: number;
  salaryMax: number;
  sortBy: "relevant" | "recent" | "salary_high" | "salary_low";
}

export interface SearchParams {
  keyword?: string;
  location?: string;
  category?: string;
}
