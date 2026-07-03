"use client";

import { useJob } from "@/hooks/use-jobs";
import { useJobStore } from "@/store/job-store";
import { formatSalaryRange, formatRelativeTime } from "@/lib/utils";
import { 
  MapPin, 
  Briefcase, 
  Clock, 
  Building2, 
  Bookmark, 
  BookmarkCheck, 
  Share2, 
  CheckCircle2, 
  ArrowLeft,
  Users,
  Brain,
  Zap,
  ChevronRight
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { CompanyLogo } from "@/components/common/company-logo";
import { useState, useEffect } from "react";

export default function JobDetailsPage() {
  const params = useParams();
  const id = params.id as string;
  const { data: job, isLoading } = useJob(id);
  const { isJobSaved, isJobApplied, toggleSavedJob, applyForJob } = useJobStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (isLoading) {
    return (
      <div className="container-wide py-12 animate-pulse">
        <div className="h-8 w-24 bg-muted rounded mb-8" />
        <div className="h-48 bg-muted rounded-3xl mb-12" />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-12 w-3/4 bg-muted rounded" />
            <div className="h-6 w-1/2 bg-muted rounded" />
            <div className="h-64 bg-muted rounded-xl" />
          </div>
          <div className="h-96 bg-muted rounded-xl" />
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Job not found</h1>
        <p className="text-muted-foreground mb-8">The job you're looking for doesn't exist or has been removed.</p>
        <Link href="/jobs" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full">
          Browse Jobs
        </Link>
      </div>
    );
  }

  const saved = mounted ? isJobSaved(job.id) : false;
  const applied = mounted ? isJobApplied(job.id) : false;

  return (
    <div className="bg-muted/10 min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="bg-background border-b border-border">
        <div className="container-wide py-4 flex items-center text-sm text-muted-foreground">
          <Link href="/jobs" className="hover:text-foreground flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Jobs
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <Link href={`/companies/${job.company.slug}`} className="hover:text-foreground transition-colors">
            {job.company.name}
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-foreground font-medium truncate max-w-[200px] md:max-w-none">
            {job.title}
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-background border-b border-border/50 pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent -z-10" />
        
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <CompanyLogo name={job.company.name} logo={job.company.logo} size="xl" className="md:w-24 md:h-24 md:text-3xl shrink-0 border border-border" />
              <div>
                <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
                  {job.title}
                </h1>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-lg text-muted-foreground">
                  <Link href={`/companies/${job.company.slug}`} className="font-medium text-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <Building2 className="w-5 h-5" /> {job.company.name}
                  </Link>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-5 h-5" /> {job.location}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
              <button 
                onClick={() => toggleSavedJob(job.id)}
                className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all ${
                  saved ? "border-primary text-primary bg-primary/10" : "border-border text-muted-foreground bg-background hover:bg-muted hover:text-foreground"
                }`}
              >
                {saved ? <BookmarkCheck className="w-6 h-6" /> : <Bookmark className="w-6 h-6" />}
              </button>
              
              <button className="w-12 h-12 rounded-full flex items-center justify-center border border-border text-muted-foreground bg-background hover:bg-muted hover:text-foreground transition-colors">
                <Share2 className="w-5 h-5" />
              </button>

              <button 
                onClick={() => applyForJob(job.id)}
                disabled={applied}
                className={`flex-1 md:w-40 h-12 rounded-full font-semibold transition-all shadow-glow ${
                  applied ? "bg-success-500 text-white cursor-default" : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {applied ? "Applied" : "Apply Now"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col gap-1">
                <span className="text-muted-foreground text-sm font-medium flex items-center gap-1.5"><Briefcase className="w-4 h-4"/> Experience</span>
                <span className="font-semibold">{job.experienceLevel}</span>
              </div>
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col gap-1">
                <span className="text-muted-foreground text-sm font-medium flex items-center gap-1.5"><Clock className="w-4 h-4"/> Type</span>
                <span className="font-semibold">{job.employmentType}</span>
              </div>
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col gap-1">
                <span className="text-muted-foreground text-sm font-medium flex items-center gap-1.5"><MapPin className="w-4 h-4"/> Setting</span>
                <span className="font-semibold">{job.workMode}</span>
              </div>
              <div className="bg-card p-4 rounded-2xl border border-border/50 flex flex-col gap-1">
                <span className="text-muted-foreground text-sm font-medium flex items-center gap-1.5"><Users className="w-4 h-4"/> Applicants</span>
                <span className="font-semibold">{job.applicantCount} applied</span>
              </div>
            </div>

            {/* Description */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50">
              <h2 className="text-2xl font-bold mb-4">About the Role</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {job.description}
              </p>

              <h2 className="text-xl font-bold mb-4">What you'll do</h2>
              <ul className="space-y-3 mb-8">
                {job.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h2 className="text-xl font-bold mb-4">What you'll need</h2>
              <ul className="space-y-3 mb-8">
                {job.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {job.niceToHave && job.niceToHave.length > 0 && (
                <>
                  <h2 className="text-xl font-bold mb-4">Nice to have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="w-5 h-5 text-muted shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            
            {/* AI Match Widget */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-gradient-primary p-1 rounded-3xl shadow-glow"
            >
              <div className="bg-card p-6 rounded-[22px] h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <Brain className="w-32 h-32" />
                </div>
                
                <div className="flex items-center gap-2 text-primary font-bold mb-2">
                  <Brain className="w-5 h-5" /> HireFlow AI Match
                </div>
                
                <div className="flex items-end gap-2 mb-4">
                  <span className="text-5xl font-black text-foreground">{job.matchScore}</span>
                  <span className="text-muted-foreground font-medium mb-1">/ 100</span>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4">
                  Strong match! Your experience with React and TypeScript aligns perfectly with their tech stack requirements.
                </p>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-medium">
                    <span className="text-success-600">Matched: React, TS</span>
                    <span className="text-danger-600">Missing: WebAssembly</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden flex">
                    <div className="h-full bg-success-500" style={{ width: `${job.matchScore}%` }} />
                    <div className="h-full bg-danger-500 flex-1" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Compensation & Benefits */}
            <div className="bg-card p-6 rounded-3xl border border-border/50">
              <h3 className="font-bold text-lg mb-4">Compensation</h3>
              <div className="mb-6">
                <div className="text-3xl font-bold text-primary mb-1">
                  {formatSalaryRange(job.salaryMin, job.salaryMax, job.currency)}
                </div>
                <div className="text-sm text-muted-foreground flex items-center gap-1">
                  <Zap className="w-4 h-4 text-amber-500" />
                  Base salary • Equity available
                </div>
              </div>
              
              <div className="h-px w-full bg-border/50 mb-6" />
              
              <h3 className="font-bold text-lg mb-4">Benefits</h3>
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((benefit) => (
                  <span key={benefit} className="px-3 py-1.5 bg-muted rounded-lg text-sm font-medium text-muted-foreground">
                    {benefit}
                  </span>
                ))}
              </div>
            </div>

            {/* Required Skills */}
            <div className="bg-card p-6 rounded-3xl border border-border/50">
              <h3 className="font-bold text-lg mb-4">Required Skills</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1.5 border border-border rounded-lg text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
