"use client";

import { useCompany } from "@/hooks/use-companies";
import { jobs } from "@/data/jobs";
import { CompanyLogo } from "@/components/common/company-logo";
import { 
  MapPin, 
  Building2, 
  Globe, 
  Calendar, 
  Users, 
  Star, 
  ArrowLeft, 
  ChevronRight, 
  ExternalLink,
  Linkedin,
  Twitter,
  Briefcase
} from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { formatSalaryRange } from "@/lib/utils";

export default function CompanyProfilePage() {
  const params = useParams();
  const slug = params.slug as string;
  const { data: company, isLoading } = useCompany(slug);
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

  if (!company) {
    return (
      <div className="container-wide py-24 text-center">
        <h1 className="text-3xl font-bold mb-4">Company not found</h1>
        <p className="text-muted-foreground mb-8">The company you're looking for doesn't exist or has been removed.</p>
        <Link href="/companies" className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-full">
          Browse Companies
        </Link>
      </div>
    );
  }

  // Filter jobs by this company
  const companyJobs = jobs.filter((j) => j.company.id === company.id);

  return (
    <div className="bg-muted/10 min-h-screen pb-24">
      {/* Breadcrumbs */}
      <div className="bg-background border-b border-border">
        <div className="container-wide py-4 flex items-center text-sm text-muted-foreground">
          <Link href="/companies" className="hover:text-foreground flex items-center gap-1 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Companies
          </Link>
          <ChevronRight className="w-4 h-4 mx-2 opacity-50" />
          <span className="text-foreground font-medium truncate">
            {company.name}
          </span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-background border-b border-border/50 pt-10 pb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 to-transparent -z-10" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-border/50" />
        
        <div className="container-wide">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <CompanyLogo 
                name={company.name} 
                logo={company.logo} 
                size="xl" 
                className="md:w-24 md:h-24 md:text-3xl shrink-0 border border-border" 
              />
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                    {company.name}
                  </h1>
                  <div className="bg-background/95 border border-border px-3 py-1.5 rounded-full flex items-center gap-1.5 text-sm font-bold shadow-sm">
                    <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
                    {company.rating} <span className="text-xs text-muted-foreground font-normal">({company.reviewCount} reviews)</span>
                  </div>
                </div>
                
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-3 text-base text-muted-foreground">
                  <span className="flex items-center gap-1.5 text-foreground/80">
                    <Building2 className="w-4.5 h-4.5 text-primary" /> {company.industry}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MapPin className="w-4.5 h-4.5" /> {company.headquarters}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center gap-3 w-full md:w-auto mt-4 md:mt-0">
              <a 
                href={company.website} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 h-12 px-6 rounded-full border border-border bg-background hover:bg-muted text-foreground transition font-semibold"
              >
                Visit Website <ExternalLink className="w-4 h-4" />
              </a>

              <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0">
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-border hover:bg-muted transition text-muted-foreground hover:text-foreground">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-12 h-12 rounded-full flex items-center justify-center border border-border hover:bg-muted transition text-muted-foreground hover:text-foreground">
                  <Twitter className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-wide mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Side: About & Jobs */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* About Section */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50">
              <h2 className="text-2xl font-bold mb-4">About {company.name}</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-base">
                {company.description}
              </p>
            </div>

            {/* Open Positions Section */}
            <div className="bg-card p-6 md:p-8 rounded-3xl border border-border/50">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" /> Open Positions ({companyJobs.length})
              </h2>
              
              {companyJobs.length === 0 ? (
                <div className="text-center py-10">
                  <p className="text-muted-foreground">No active job listings for {company.name} at the moment.</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {companyJobs.map((job) => (
                    <Link
                      key={job.id}
                      href={`/jobs/${job.id}`}
                      className="group block p-5 rounded-2xl border border-border/50 hover:border-primary/30 hover:bg-muted/30 transition-all duration-300"
                    >
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                        <div>
                          <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-1">
                            {job.title}
                          </h3>
                          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> {job.location}</span>
                            <span>•</span>
                            <span>{job.workMode}</span>
                            <span>•</span>
                            <span>{job.employmentType}</span>
                          </div>
                        </div>
                        
                        <div className="flex sm:flex-col items-start sm:items-end justify-between w-full sm:w-auto border-t sm:border-t-0 border-border/40 pt-3 sm:pt-0 shrink-0">
                          <span className="font-bold text-primary sm:text-lg">
                            {formatSalaryRange(job.salaryMin, job.salaryMax, job.currency)}
                          </span>
                          <span className="text-xs text-muted-foreground sm:mt-1">
                            {job.experienceLevel} Level
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Sidebar: Company Stats & Tech Stack */}
          <div className="space-y-6">
            
            {/* Quick Overview */}
            <div className="bg-card p-6 rounded-3xl border border-border/50">
              <h3 className="font-bold text-lg mb-4">Company Overview</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-sm">
                  <Calendar className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Founded</p>
                    <p className="font-semibold text-foreground">{company.founded}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 text-sm">
                  <Users className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Company Size</p>
                    <p className="font-semibold text-foreground">{company.employeeCount} Employees</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Building2 className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Headquarters</p>
                    <p className="font-semibold text-foreground">{company.headquarters}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 text-sm">
                  <Globe className="w-5 h-5 text-muted-foreground shrink-0" />
                  <div>
                    <p className="text-xs text-muted-foreground font-medium uppercase tracking-wider">Website</p>
                    <a 
                      href={company.website} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-semibold text-primary hover:underline flex items-center gap-1.5"
                    >
                      {company.website.replace("https://", "")} <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="bg-card p-6 rounded-3xl border border-border/50">
              <h3 className="font-bold text-lg mb-4">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {company.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-3 py-1.5 border border-border rounded-xl text-sm font-medium hover:border-primary/20 transition"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Benefits & Perks */}
            <div className="bg-card p-6 rounded-3xl border border-border/50">
              <h3 className="font-bold text-lg mb-4">Benefits & Perks</h3>
              <div className="flex flex-wrap gap-2">
                {company.benefits.map((benefit) => (
                  <span 
                    key={benefit} 
                    className="px-3 py-1.5 bg-muted rounded-xl text-sm font-medium text-muted-foreground"
                  >
                    {benefit}
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
