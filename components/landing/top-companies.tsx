"use client";

import { useCompanies } from "@/hooks/use-companies";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { formatCompact } from "@/lib/utils";
import { CompanyLogo } from "@/components/common/company-logo";

export function TopCompanies() {
  const { data: companies, isLoading } = useCompanies();

  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Top Workplaces
            </h2>
            <p className="text-muted-foreground text-lg">
              Discover companies with the best cultures, benefits, and career growth opportunities.
            </p>
          </div>
          <Link 
            href="/companies" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            View all companies 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-[240px] bg-muted/30 animate-pulse rounded-2xl border border-border" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {companies?.slice(0, 8).map((company, index) => {
              return (
                <motion.div
                  key={company.id}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
                >
                  <Link
                    href={`/companies/${company.slug}`}
                    className="group block bg-card rounded-2xl p-6 border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 h-full flex flex-col"
                  >
                    <div className="flex items-start justify-between mb-5">
                      <CompanyLogo name={company.name} logo={company.logo} size="md" />
                      <div className="flex items-center gap-1.5 bg-amber-500/10 text-amber-600 dark:text-amber-400 px-2.5 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 fill-amber-500 text-amber-500" />
                        {company.rating}
                      </div>
                    </div>
                    
                    <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors text-foreground">
                      {company.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      {company.industry} <span className="mx-1 opacity-50">•</span> {company.headquarters}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                      {company.techStack.slice(0, 3).map(tech => (
                        <span key={tech} className="px-2.5 py-0.5 text-[11px] font-medium bg-secondary text-secondary-foreground rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-border/50 flex items-center justify-between text-xs">
                      <span className="text-muted-foreground font-medium">
                        {formatCompact(parseInt(company.employeeCount.replace(/\D/g,'')) || 1000)} Employees
                      </span>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {company.openPositions} Jobs
                      </span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
