import { StatsCards } from "@/components/dashboard/stats-cards";
import { ApplicationTracker } from "@/components/dashboard/application-tracker";
import { UpcomingInterviews } from "@/components/dashboard/upcoming-interviews";
import { AIInsights } from "@/components/dashboard/ai-insights";
import { ActivityTimeline } from "@/components/dashboard/activity-timeline";

export const metadata = {
  title: "Dashboard | HireFlow AI",
  description: "Manage your job applications, interviews, and career progress.",
};

export default function DashboardPage() {
  return (
    <div className="bg-muted/10 min-h-screen py-10">
      <div className="container-wide">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-1">
              Welcome back, Alex! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your job search today.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-card border border-border text-foreground font-medium rounded-lg hover:bg-muted transition-colors shadow-sm">
              Update Profile
            </button>
            <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors shadow-sm">
              Find Jobs
            </button>
          </div>
        </div>

        {/* Top Stats */}
        <div className="mb-8">
          <StatsCards />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          
          {/* Left Column (2/3) */}
          <div className="lg:col-span-2 space-y-6">
            <div className="h-[400px]">
              <ApplicationTracker />
            </div>
          </div>
          
          {/* Right Column (1/3) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="h-[400px]">
              <AIInsights />
            </div>
          </div>
          
        </div>

        {/* Bottom Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pb-10">
          <div className="h-[350px]">
            <UpcomingInterviews />
          </div>
          <div className="h-[350px]">
            <ActivityTimeline />
          </div>
        </div>

      </div>
    </div>
  );
}
