"use client";

import Link from "next/link";
import { type Company } from "@/types";
import { formatCompact, cn } from "@/lib/utils";
import { Star, MapPin, Building2, ExternalLink } from "lucide-react";
import { CompanyLogo } from "@/components/common/company-logo";

interface CompanyCardProps {
  company: Company;
  className?: string;
}

export function CompanyCard({ company, className }: CompanyCardProps) {
  return (
    <Link
      href={`/companies/${company.slug}`}
      className={cn(
        "group block bg-card rounded-3xl overflow-hidden border border-border/50 card-hover relative",
        className
      )}
    >
      {/* Cover Image/Pattern */}
      <div className="h-32 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-20 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        
        {/* Rating Badge */}
        <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-md px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-bold shadow-lg">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          {company.rating}
        </div>
      </div>

      <div className="p-6 pt-0 relative">
        {/* Logo overlapping the cover */}
        <CompanyLogo
          name={company.name}
          logo={company.logo}
          size="xl"
          className="-mt-10 mx-auto relative z-10 group-hover:scale-105 transition-transform duration-300 shadow-md"
        />

        <div className="text-center mb-6">
          <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
            {company.name}
          </h3>
          <p className="text-muted-foreground text-sm flex items-center justify-center gap-1.5">
            <Building2 className="w-3.5 h-3.5" />
            {company.industry}
          </p>
        </div>

        <p className="text-sm text-muted-foreground text-center line-clamp-2 mb-6 h-10">
          {company.description}
        </p>

        <div className="grid grid-cols-2 gap-4 py-4 border-y border-border/50 mb-6">
          <div className="text-center">
            <div className="text-xl font-bold text-foreground">
              {formatCompact(parseInt(company.employeeCount.replace(/\D/g,'')) || 1000)}
            </div>
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Employees
            </div>
          </div>
          <div className="text-center">
            <div className="text-xl font-bold text-primary">
              {company.openPositions}
            </div>
            <div className="text-xs text-muted-foreground font-medium uppercase tracking-wider">
              Open Jobs
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-6">
          {company.techStack.slice(0, 4).map((tech) => (
            <span key={tech} className="px-2.5 py-1 text-xs rounded-lg bg-muted text-muted-foreground font-medium">
              {tech}
            </span>
          ))}
          {company.techStack.length > 4 && (
            <span className="px-2.5 py-1 text-xs rounded-lg bg-muted text-muted-foreground font-medium">
              +{company.techStack.length - 4}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between text-sm pt-2">
          <div className="flex items-center gap-1.5 text-muted-foreground font-medium">
            <MapPin className="w-4 h-4" />
            {company.headquarters.split(",")[0]}
          </div>
          <span className="text-primary font-medium flex items-center gap-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
            View Profile <ExternalLink className="w-4 h-4" />
          </span>
        </div>
      </div>
    </Link>
  );
}
