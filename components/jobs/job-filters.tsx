"use client";

import { useJobStore } from "@/store/job-store";
import { categories } from "@/data/categories";
import { type ExperienceLevel, type EmploymentType, type WorkMode } from "@/types";
import { SlidersHorizontal, X } from "lucide-react";
import { formatCurrency } from "@/lib/utils";
import { useEffect, useState } from "react";

const experienceLevels: ExperienceLevel[] = ["Entry", "Mid", "Senior", "Lead", "Executive"];
const employmentTypes: EmploymentType[] = ["Full-time", "Part-time", "Contract", "Freelance", "Internship"];
const workModes: WorkMode[] = ["Remote", "Hybrid", "On-site"];

export function JobFilters({ className }: { className?: string }) {
  const { filters, setFilters, resetFilters } = useJobStore();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className={`w-full min-h-[600px] bg-muted/20 animate-pulse rounded-2xl ${className}`} />;

  const activeFilterCount = Object.entries(filters).filter(
    ([key, val]) => 
      key !== "search" && 
      key !== "location" && 
      key !== "sortBy" && 
      val !== "" && 
      val !== 0 && 
      val !== 1000000
  ).length;

  return (
    <div className={`w-full bg-card rounded-2xl border border-border/50 p-6 ${className}`}>
      <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
        <div className="flex items-center gap-2 font-bold text-lg">
          <SlidersHorizontal className="w-5 h-5" />
          Filters
          {activeFilterCount > 0 && (
            <span className="w-5 h-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
              {activeFilterCount}
            </span>
          )}
        </div>
        
        {activeFilterCount > 0 && (
          <button 
            onClick={resetFilters}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
          >
            <X className="w-4 h-4" /> Clear all
          </button>
        )}
      </div>

      <div className="space-y-8">
        {/* Category */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Category</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer group">
              <input 
                type="radio" 
                name="category"
                className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                checked={filters.category === ""}
                onChange={() => setFilters({ category: "" })}
              />
              <span className="group-hover:text-foreground transition-colors">All Categories</span>
            </label>
            {categories.map(cat => (
              <label key={cat.id} className="flex items-center gap-2 text-sm cursor-pointer group">
                <input 
                  type="radio" 
                  name="category"
                  className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                  checked={filters.category === cat.slug}
                  onChange={() => setFilters({ category: cat.slug })}
                />
                <span className="group-hover:text-foreground transition-colors">{cat.name}</span>
                <span className="ml-auto text-xs text-muted-foreground">{cat.jobCount}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Work Mode */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Work Mode</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer group">
              <input 
                type="radio" 
                name="workMode"
                className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                checked={filters.workMode === ""}
                onChange={() => setFilters({ workMode: "" })}
              />
              <span className="group-hover:text-foreground transition-colors">Any Mode</span>
            </label>
            {workModes.map(mode => (
              <label key={mode} className="flex items-center gap-2 text-sm cursor-pointer group">
                <input 
                  type="radio" 
                  name="workMode"
                  className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                  checked={filters.workMode === mode}
                  onChange={() => setFilters({ workMode: mode })}
                />
                <span className="group-hover:text-foreground transition-colors">{mode}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Experience Level */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Experience</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer group">
              <input 
                type="radio" 
                name="experience"
                className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                checked={filters.experienceLevel === ""}
                onChange={() => setFilters({ experienceLevel: "" })}
              />
              <span className="group-hover:text-foreground transition-colors">Any Experience</span>
            </label>
            {experienceLevels.map(level => (
              <label key={level} className="flex items-center gap-2 text-sm cursor-pointer group">
                <input 
                  type="radio" 
                  name="experience"
                  className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                  checked={filters.experienceLevel === level}
                  onChange={() => setFilters({ experienceLevel: level })}
                />
                <span className="group-hover:text-foreground transition-colors">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Employment Type */}
        <div className="space-y-3">
          <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Employment Type</h4>
          <div className="flex flex-col gap-2">
            <label className="flex items-center gap-2 text-sm cursor-pointer group">
              <input 
                type="radio" 
                name="employmentType"
                className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                checked={filters.employmentType === ""}
                onChange={() => setFilters({ employmentType: "" })}
              />
              <span className="group-hover:text-foreground transition-colors">Any Type</span>
            </label>
            {employmentTypes.map(type => (
              <label key={type} className="flex items-center gap-2 text-sm cursor-pointer group">
                <input 
                  type="radio" 
                  name="employmentType"
                  className="w-4 h-4 text-primary bg-background border-border focus:ring-primary focus:ring-offset-background"
                  checked={filters.employmentType === type}
                  onChange={() => setFilters({ employmentType: type })}
                />
                <span className="group-hover:text-foreground transition-colors">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Minimum Salary */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Minimum Salary</h4>
            <span className="text-sm font-medium text-primary">{formatCurrency(filters.salaryMin || 0)}</span>
          </div>
          <input 
            type="range"
            min="0"
            max="25000000"
            step="500000"
            className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
            value={filters.salaryMin || 0}
            onChange={(e) => setFilters({ salaryMin: parseInt(e.target.value) })}
          />
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Any</span>
            <span>2.5 Cr+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
