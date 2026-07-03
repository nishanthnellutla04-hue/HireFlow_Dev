"use client";

import { companies } from "@/data/companies";
import { CompanyLogo } from "@/components/common/company-logo";

export function TrustedCompanies() {
  // Use a subset of top companies for the marquee
  const topCompanies = companies.slice(0, 8);
  
  // Duplicate for infinite scroll effect
  const marqueeItems = [...topCompanies, ...topCompanies];

  return (
    <section className="py-12 md:py-16 border-b border-border bg-background">
      <div className="container-wide text-center mb-10">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
          Trusted by the world's most innovative teams
        </p>
      </div>
      
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
        
        <div className="flex animate-[marquee_40s_linear_infinite] hover:[animation-play-state:paused]">
          {marqueeItems.map((company, index) => {
            return (
              <div 
                key={`${company.id}-${index}`}
                className="flex items-center justify-center min-w-[200px] px-8 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <div className="flex items-center gap-3">
                  <CompanyLogo name={company.name} logo={company.logo} size="sm" />
                  <span className="font-semibold text-base tracking-tight text-foreground">{company.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
