"use client";

import { interviews } from "@/data/dashboard";
import { Calendar as CalendarIcon, Clock, Video, Phone, Users } from "lucide-react";

export function UpcomingInterviews() {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6 border-b border-border/50 flex items-center justify-between">
        <h3 className="font-bold text-lg">Upcoming Interviews</h3>
        <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded-full">
          {interviews.length}
        </span>
      </div>

      <div className="flex-1 overflow-auto p-6">
        {interviews.length === 0 ? (
          <div className="text-center text-muted-foreground py-8">
            No upcoming interviews.
          </div>
        ) : (
          <div className="space-y-4">
            {interviews.map((interview) => (
              <div key={interview.id} className="p-4 rounded-xl border border-border/50 bg-background hover:border-primary/30 transition-colors">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold">{interview.job.title}</h4>
                  <div className="flex items-center gap-1.5 px-2 py-1 bg-muted rounded text-xs font-medium text-muted-foreground">
                    {interview.type === "Technical" ? <Users className="w-3.5 h-3.5" /> : 
                     interview.type === "Video" ? <Video className="w-3.5 h-3.5" /> : 
                     <Phone className="w-3.5 h-3.5" />}
                    {interview.type}
                  </div>
                </div>
                
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  {interview.job.company.name}
                </p>
                
                <div className="flex items-center gap-4 text-sm mb-4">
                  <div className="flex items-center gap-1.5 text-foreground">
                    <CalendarIcon className="w-4 h-4 text-primary" />
                    <span className="font-medium">{new Date(interview.date).toLocaleDateString("en-US", { month: "short", day: "numeric", weekday: "short" })}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-foreground">
                    <Clock className="w-4 h-4 text-amber-500" />
                    <span className="font-medium">{interview.time}</span>
                  </div>
                </div>
                
                <div className="pt-3 border-t border-border/50 flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">With {interview.interviewer}</span>
                  <button className="text-xs font-medium text-primary hover:underline">Prepare</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
