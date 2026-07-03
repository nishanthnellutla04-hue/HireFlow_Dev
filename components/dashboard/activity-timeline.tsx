"use client";

import { activities } from "@/data/dashboard";
import { formatRelativeTime } from "@/lib/utils";
import * as Icons from "lucide-react";

export function ActivityTimeline() {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6 border-b border-border/50">
        <h3 className="font-bold text-lg">Recent Activity</h3>
      </div>

      <div className="p-6 flex-1 overflow-auto">
        <div className="relative border-l border-border/50 ml-3 space-y-6">
          {activities.map((activity, index) => {
            // @ts-ignore
            const Icon = Icons[activity.icon] || Icons.Circle;
            
            return (
              <div key={activity.id} className="relative pl-6">
                {/* Timeline dot */}
                <div className="absolute left-[-16px] top-1 w-8 h-8 rounded-full bg-background border-2 border-border/50 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-muted-foreground" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="font-semibold text-sm">{activity.title}</h4>
                    <span className="text-xs text-muted-foreground">{formatRelativeTime(activity.timestamp)}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
