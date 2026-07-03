import { Brain, FileText, CheckCircle2, ChevronRight, PenSquare, Eye } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "My Profile | HireFlow AI",
  description: "Manage your professional profile and resume.",
};

export default function ProfilePage() {
  return (
    <div className="bg-muted/10 min-h-screen py-12">
      <div className="container-wide max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2">My Profile</h1>
            <p className="text-muted-foreground">Manage your professional information and resume.</p>
          </div>
          <button className="px-4 py-2 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 flex items-center gap-2">
            <Eye className="w-4 h-4" /> View Public Profile
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="space-y-6">
            {/* User Card */}
            <div className="bg-card rounded-3xl border border-border/50 overflow-hidden">
              <div className="h-24 bg-gradient-primary relative" />
              <div className="px-6 pb-6 relative">
                <div className="w-20 h-20 rounded-full bg-card border-4 border-card flex items-center justify-center text-2xl font-bold -mt-10 mb-4 bg-muted text-foreground">
                  AR
                </div>
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold">Alex Rivera</h2>
                    <p className="text-sm text-muted-foreground">Senior Frontend Engineer</p>
                  </div>
                  <button className="text-muted-foreground hover:text-foreground">
                    <PenSquare className="w-4 h-4" />
                  </button>
                </div>
                <p className="text-sm mt-4 text-muted-foreground">
                  San Francisco, CA • Open to remote
                </p>
              </div>
            </div>

            {/* Completeness */}
            <div className="bg-card rounded-3xl border border-border/50 p-6">
              <h3 className="font-bold mb-4">Profile Completeness</h3>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">85% Complete</span>
                <span className="text-sm text-primary font-medium">Excellent</span>
              </div>
              <div className="h-2 w-full bg-muted rounded-full overflow-hidden mb-4">
                <div className="h-full bg-primary" style={{ width: "85%" }} />
              </div>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2 text-muted-foreground line-through">
                  <CheckCircle2 className="w-4 h-4 text-success-500" /> Resume uploaded
                </li>
                <li className="flex items-center gap-2 text-muted-foreground line-through">
                  <CheckCircle2 className="w-4 h-4 text-success-500" /> Skills added
                </li>
                <li className="flex items-center gap-2 text-foreground font-medium">
                  <div className="w-4 h-4 rounded-full border border-border flex-shrink-0" /> Add portfolio link
                </li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* AI Review */}
            <div className="bg-gradient-primary p-[1px] rounded-3xl">
              <div className="bg-card rounded-[23px] p-6 h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                  <Brain className="w-40 h-40" />
                </div>
                <div className="flex items-center gap-2 text-primary font-bold mb-4">
                  <Brain className="w-5 h-5" /> AI Resume Review
                </div>
                <p className="text-muted-foreground mb-4">
                  Your resume scores highly for React and Next.js roles, but lacks quantifiable achievements in the most recent position.
                </p>
                <button className="text-primary font-medium text-sm flex items-center gap-1 hover:underline">
                  View Full Analysis <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Resume Management */}
            <div className="bg-card rounded-3xl border border-border/50 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Resume</h3>
                <button className="text-sm font-medium text-primary border border-primary/20 px-3 py-1.5 rounded-lg hover:bg-primary/5 transition-colors">
                  Upload New
                </button>
              </div>
              
              <div className="border border-border/50 rounded-xl p-4 flex items-center gap-4 hover:border-primary/30 transition-colors">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-muted-foreground shrink-0">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm truncate">Alex_Rivera_Resume_2026.pdf</h4>
                  <p className="text-xs text-muted-foreground">Uploaded 2 weeks ago • 1.2 MB</p>
                </div>
                <button className="text-sm font-medium text-muted-foreground hover:text-foreground">
                  Replace
                </button>
              </div>
            </div>

            {/* Experience */}
            <div className="bg-card rounded-3xl border border-border/50 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold">Experience</h3>
                <button className="text-sm font-medium text-primary hover:underline">
                  Add Experience
                </button>
              </div>
              
              <div className="space-y-6">
                <div className="relative pl-6 border-l border-border/50">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                  <h4 className="font-bold">Senior Frontend Engineer</h4>
                  <div className="text-sm text-muted-foreground mb-2">TechCorp Inc. • 2023 - Present</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Led the migration from Vue to React/Next.js, improving page load times by 40% and developer productivity. Managed a team of 3 junior engineers.
                  </p>
                </div>
                <div className="relative pl-6 border-l border-border/50">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-muted border border-border" />
                  <h4 className="font-bold">Frontend Developer</h4>
                  <div className="text-sm text-muted-foreground mb-2">WebSolutions Agency • 2020 - 2023</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Built responsive web applications for enterprise clients using React, TypeScript, and Tailwind CSS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
