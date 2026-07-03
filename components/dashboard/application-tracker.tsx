"use client";

import { applications } from "@/data/dashboard";
import { formatRelativeTime } from "@/lib/utils";
import { Building2, ChevronRight, CheckCircle2, Clock, XCircle, Briefcase } from "lucide-react";
import Link from "next/link";
import { CompanyLogo } from "@/components/common/company-logo";

const getStatusConfig = (status: string) => {
  switch (status) {
    case "Applied":
      return { icon: Send, color: "text-blue-500", bg: "bg-blue-500/10" };
    case "Reviewed":
      return { icon: Eye, color: "text-amber-500", bg: "bg-amber-500/10" };
    case "Interview":
      return { icon: Clock, color: "text-primary", bg: "bg-primary/10" };
    case "Offer":
      return { icon: CheckCircle2, color: "text-success-500", bg: "bg-success-500/10" };
    case "Rejected":
      return { icon: XCircle, color: "text-danger-500", bg: "bg-danger-500/10" };
    default:
      return { icon: Briefcase, color: "text-muted-foreground", bg: "bg-muted" };
  }
};

import { Send, Eye } from "lucide-react"; // Import missing icons

export function ApplicationTracker() {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6 border-b border-border/50 flex items-center justify-between">
        <h3 className="font-bold text-lg">Active Applications</h3>
        <Link href="/applications" className="text-sm font-medium text-primary hover:underline">
          View All
        </Link>
      </div>

      <div className="flex-1 overflow-auto">
        {applications.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            No active applications yet.
          </div>
        ) : (
          <ul className="divide-y divide-border/50">
            {applications.slice(0, 5).map((app) => {
              const statusConfig = getStatusConfig(app.status);
              const StatusIcon = statusConfig.icon;

              return (
                <li key={app.id} className="p-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-4">
                    <CompanyLogo name={app.job.company.name} logo={app.job.company.logo} size="md" />
                    
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground truncate mb-1">
                        {app.job.title}
                      </h4>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5" />
                          {app.job.company.name}
                        </span>
                        <span>•</span>
                        <span>Updated {formatRelativeTime(app.updatedAt)}</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-end gap-2 shrink-0">
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium ${statusConfig.bg} ${statusConfig.color}`}>
                        <StatusIcon className="w-3.5 h-3.5" />
                        {app.status}
                      </div>
                      <Link href={`/applications/${app.id}`} className="text-muted-foreground hover:text-foreground">
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
