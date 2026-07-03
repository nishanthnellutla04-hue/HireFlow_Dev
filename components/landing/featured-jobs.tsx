"use client";

import { useFeaturedJobs } from "@/hooks/use-jobs";
import { JobCard } from "@/components/jobs/job-card";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FeaturedJobs() {
  const { data: jobs, isLoading } = useFeaturedJobs();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Featured Opportunities
            </h2>
            <p className="text-muted-foreground text-lg">
              Hand-picked roles from top tier companies matching your profile and career goals.
            </p>
          </div>
          <Link 
            href="/jobs" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            View all jobs 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-[280px] bg-muted/30 animate-pulse rounded-2xl border border-border" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {jobs?.slice(0, 6).map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              >
                <JobCard job={job} className="h-full" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
