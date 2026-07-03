"use client";

import Link from "next/link";
import { type Job } from "@/types";
import { formatRelativeTime, cn } from "@/lib/utils";
import {
  MapPin,
  Briefcase,
  Clock,
  Bookmark,
  BookmarkCheck,
  TrendingUp,
  Users,
  Zap,
  IndianRupee,
} from "lucide-react";
import { useJobStore } from "@/store/job-store";
import { CompanyLogo } from "@/components/common/company-logo";
import { useState, useEffect } from "react";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function formatINR(amount: number): string {
  if (amount >= 10_000_000) {
    return `₹${(amount / 10_000_000).toFixed(1)} Cr`;
  }
  if (amount >= 100_000) {
    return `₹${(amount / 100_000).toFixed(1)} LPA`;
  }
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function salaryLabel(min: number, max: number, currency: string): string {
  if (currency === "INR") return `${formatINR(min)} – ${formatINR(max)}`;
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(min) +
    " – " +
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
      maximumFractionDigits: 0,
    }).format(max);
}

// Work‑mode colour mapping
const workModeStyle: Record<string, string> = {
  Remote:
    "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
  Hybrid:
    "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
  "On-site":
    "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
};

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

interface JobCardProps {
  job: Job;
  className?: string;
}

export function JobCard({ job, className }: JobCardProps) {
  const { isJobSaved, toggleSavedJob } = useJobStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const saved = mounted ? isJobSaved(job.id) : false;

  const handleSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSavedJob(job.id);
  };

  return (
    <Link
      href={`/jobs/${job.id}`}
      aria-label={`${job.title} at ${job.company.name}`}
      className={cn(
        // Surface
        "group relative block rounded-xl border border-border/60 bg-card",
        // Spacing
        "p-5 sm:p-6",
        // Transition & hover
        "transition-all duration-300 ease-out",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5",
        "hover:-translate-y-0.5",
        // Focus‑visible for keyboard users
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        className
      )}
    >
      {/* ── Top row: badges ─────────────────────────────────────── */}
      {(job.featured || job.urgent) && (
        <div className="mb-4 flex flex-wrap items-center gap-2">
          {job.featured && (
            <span className="inline-flex items-center gap-1 rounded-full border border-primary/25 bg-primary/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-primary">
              <Zap className="h-3 w-3" />
              Featured
            </span>
          )}
          {job.urgent && (
            <span className="inline-flex items-center gap-1 rounded-full border border-red-500/25 bg-red-500/10 px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-red-500 dark:text-red-400">
              <TrendingUp className="h-3 w-3" />
              Urgent Hiring
            </span>
          )}
        </div>
      )}

      {/* ── Main row: logo + info + save ───────────────────────── */}
      <div className="flex gap-4">
        {/* Company logo */}
        <CompanyLogo name={job.company.name} logo={job.company.logo} className="sm:h-14 sm:w-14 sm:text-base" />

        {/* Title + company + location */}
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold leading-snug text-foreground transition-colors group-hover:text-primary sm:text-lg">
            {job.title}
          </h3>

          <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-sm text-muted-foreground">
            <span className="font-medium text-foreground/80">
              {job.company.name}
            </span>
            <span className="hidden text-border sm:inline" aria-hidden>·</span>
            <span className="hidden items-center gap-1 sm:inline-flex">
              <MapPin className="h-3.5 w-3.5 shrink-0" />
              {job.location}
            </span>
          </div>
        </div>

        {/* Bookmark button */}
        <button
          onClick={handleSave}
          aria-label={saved ? "Remove from saved jobs" : "Save this job"}
          className={cn(
            "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-200",
            saved
              ? "border-primary/40 bg-primary/10 text-primary"
              : "border-transparent bg-muted/50 text-muted-foreground hover:border-border hover:bg-muted hover:text-foreground"
          )}
        >
          {saved ? (
            <BookmarkCheck className="h-4 w-4" />
          ) : (
            <Bookmark className="h-4 w-4" />
          )}
        </button>
      </div>

      {/* ── Location row (mobile only) ─────────────────────────── */}
      <div className="mt-2 flex items-center gap-1 text-sm text-muted-foreground sm:hidden">
        <MapPin className="h-3.5 w-3.5 shrink-0" />
        {job.location}
      </div>

      {/* ── Meta pills ─────────────────────────────────────────── */}
      <div className="mt-4 flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/40 bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
          <Briefcase className="h-3.5 w-3.5 opacity-70" />
          {job.experienceLevel}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-md border border-border/40 bg-muted/50 px-2.5 py-1 text-xs font-medium text-muted-foreground">
          <Clock className="h-3.5 w-3.5 opacity-70" />
          {job.employmentType}
        </span>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-md border px-2.5 py-1 text-xs font-medium",
            workModeStyle[job.workMode] ??
              "border-border/40 bg-muted/50 text-muted-foreground"
          )}
        >
          {job.workMode}
        </span>
      </div>

      {/* ── Skills ─────────────────────────────────────────────── */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {job.skills.slice(0, 4).map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground"
          >
            {skill}
          </span>
        ))}
        {job.skills.length > 4 && (
          <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-muted-foreground">
            +{job.skills.length - 4}
          </span>
        )}
      </div>

      {/* ── Footer: salary / posted / applicants ──────────────── */}
      <div className="mt-5 flex flex-col gap-3 border-t border-border/40 pt-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Salary */}
        <div className="flex items-center gap-1.5">
          <IndianRupee className="h-4 w-4 text-primary/70" />
          <span className="text-sm font-semibold text-foreground">
            {salaryLabel(job.salaryMin, job.salaryMax, job.currency)}
          </span>
        </div>

        {/* Right side meta */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          {job.applicantCount > 0 && (
            <span className="inline-flex items-center gap-1">
              <Users className="h-3.5 w-3.5" />
              {job.applicantCount} applicants
            </span>
          )}
          <span>{formatRelativeTime(job.postedAt)}</span>
        </div>
      </div>

      {/* ── Match score indicator ──────────────────────────────── */}
      {job.matchScore != null && job.matchScore > 0 && (
        <div className="absolute right-5 top-5 flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 sm:right-6 sm:top-6">
          <TrendingUp className="h-3 w-3" />
          {job.matchScore}% match
        </div>
      )}
    </Link>
  );
}
