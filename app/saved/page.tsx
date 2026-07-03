"use client";

import { useJobStore } from "@/store/job-store";
import { useJobs } from "@/hooks/use-jobs";
import { JobCard } from "@/components/jobs/job-card";
import { motion } from "framer-motion";
import { Bookmark, Search } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function SavedJobsPage() {
  const { savedJobs } = useJobStore();
  // Fetch all jobs, then we will filter by saved IDs
  const { data: allJobs, isLoading } = useJobs();
  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted || isLoading) {
    return (
      <div className="bg-muted/10 min-h-screen py-12">
        <div className="container-wide max-w-5xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
                <Bookmark className="w-8 h-8 text-primary" /> Saved Jobs
              </h1>
              <p className="text-muted-foreground">Loading saved jobs...</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded-2xl border border-border/50" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  const savedJobsList = allJobs?.filter(job => savedJobs.includes(job.id)) || [];
  
  const filteredJobs = savedJobsList.filter(job => 
    job.title.toLowerCase().includes(search.toLowerCase()) || 
    job.company.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-muted/10 min-h-screen py-12">
      <div className="container-wide max-w-5xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h1 className="text-3xl font-bold tracking-tight mb-2 flex items-center gap-3">
              <Bookmark className="w-8 h-8 text-primary" /> Saved Jobs
            </h1>
            <p className="text-muted-foreground">
              You have {savedJobsList.length} jobs saved for later.
            </p>
          </div>
          
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input 
              type="text"
              placeholder="Search saved jobs..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-card text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-48 bg-muted animate-pulse rounded-2xl border border-border/50" />
            ))}
          </div>
        ) : savedJobsList.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-border/50">
            <Bookmark className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">No saved jobs</h3>
            <p className="text-muted-foreground mb-6">When you find jobs you like, click the bookmark icon to save them here.</p>
            <Link href="/jobs" className="px-6 py-2.5 bg-primary text-primary-foreground font-medium rounded-full hover:bg-primary/90 transition-colors">
              Browse Jobs
            </Link>
          </div>
        ) : filteredJobs.length === 0 ? (
          <div className="text-center py-24 bg-card rounded-3xl border border-border/50">
            <h3 className="text-xl font-bold mb-2">No matches found</h3>
            <p className="text-muted-foreground">We couldn't find any saved jobs matching "{search}".</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredJobs.map((job, index) => (
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
        )}
      </div>
    </div>
  );
}
