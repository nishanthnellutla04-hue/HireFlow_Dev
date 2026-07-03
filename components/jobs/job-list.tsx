"use client";

import { useJobs } from "@/hooks/use-jobs";
import { useJobStore } from "@/store/job-store";
import { JobCard } from "@/components/jobs/job-card";
import { motion } from "framer-motion";
import { Briefcase, Frown } from "lucide-react";
import { useState } from "react";
import { type JobFilters } from "@/types";

export function JobList() {
  const { filters, setFilters, resetFilters } = useJobStore();
  const { data: jobs, isLoading } = useJobs(filters);
  const [page, setPage] = useState(1);
  const itemsPerPage = 10;

  if (isLoading) {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between mb-4">
          <div className="h-6 w-32 bg-muted animate-pulse rounded" />
          <div className="h-9 w-40 bg-muted animate-pulse rounded-lg" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="h-40 bg-card border border-border/50 rounded-2xl animate-pulse" />
        ))}
      </div>
    );
  }

  if (!jobs || jobs.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center bg-card rounded-2xl border border-border/50">
        <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mb-6">
          <Frown className="w-8 h-8 text-muted-foreground" />
        </div>
        <h3 className="text-xl font-bold mb-2">No jobs found</h3>
        <p className="text-muted-foreground mb-6 max-w-sm">
          We couldn't find any positions matching your current filters. Try adjusting your search criteria.
        </p>
        <button 
          onClick={resetFilters}
          className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors"
        >
          Clear all filters
        </button>
      </div>
    );
  }

  const totalPages = Math.ceil(jobs.length / itemsPerPage);
  const displayedJobs = jobs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <div className="flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <Briefcase className="w-5 h-5 text-primary" />
          {jobs.length} open positions
        </h2>
        
        <div className="flex items-center gap-3">
          <span className="text-sm text-muted-foreground">Sort by:</span>
          <select 
            className="bg-background border border-border rounded-lg px-3 py-2 text-sm font-medium focus:ring-1 focus:ring-primary outline-none"
            value={filters.sortBy}
            onChange={(e) => setFilters({ sortBy: e.target.value as JobFilters["sortBy"] })}
          >
            <option value="relevant">Most Relevant</option>
            <option value="recent">Most Recent</option>
            <option value="salary_high">Highest Salary</option>
            <option value="salary_low">Lowest Salary</option>
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 mb-8">
        {displayedJobs.map((job, index) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            <JobCard job={job} />
          </motion.div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-4">
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            disabled={page === 1}
            className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Previous
          </button>
          
          <div className="flex items-center gap-1">
            {[...Array(totalPages)].map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`w-10 h-10 rounded-lg text-sm font-medium transition-colors ${
                  page === i + 1 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-muted"
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          
          <button
            onClick={() => setPage(Math.min(totalPages, page + 1))}
            disabled={page === totalPages}
            className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
}
