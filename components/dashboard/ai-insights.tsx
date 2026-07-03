"use client";

import { aiInsights } from "@/data/dashboard";
import { formatCurrency } from "@/lib/utils";
import { Brain, TrendingUp, AlertCircle, CheckCircle2, DollarSign } from "lucide-react";

export function AIInsights() {
  return (
    <div className="bg-card rounded-2xl border border-border/50 overflow-hidden shadow-sm h-full flex flex-col">
      <div className="p-6 border-b border-border/50 flex items-center justify-between bg-muted/20">
        <div className="flex items-center gap-2 font-bold text-lg">
          <Brain className="w-5 h-5 text-primary" />
          AI Career Insights
        </div>
        <div className="text-xs font-medium px-2 py-1 bg-primary/10 text-primary rounded-full">
          Updated Today
        </div>
      </div>

      <div className="p-6 flex-1 flex flex-col gap-6">
        {/* Resume Score */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Market Competitiveness</h4>
            <span className="text-primary font-bold">{aiInsights.resumeScore}/100</span>
          </div>
          <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000" 
              style={{ width: `${aiInsights.resumeScore}%` }} 
            />
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Top 15% of candidates for Senior Frontend Engineering roles.
          </p>
        </div>

        {/* Salary Prediction */}
        <div className="p-4 rounded-xl bg-green-500/5 border border-green-500/20">
          <div className="flex items-center gap-2 text-green-600 font-semibold mb-2">
            <DollarSign className="w-4 h-4" /> Predicted Salary Range
          </div>
          <div className="text-2xl font-bold text-foreground mb-1">
            {formatCurrency(aiInsights.salaryPrediction.min)} - {formatCurrency(aiInsights.salaryPrediction.max)}
          </div>
          <p className="text-xs text-muted-foreground">
            Based on your skills and location, your median value is {formatCurrency(aiInsights.salaryPrediction.median)}.
          </p>
        </div>

        {/* Skill Gaps */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Skill Gaps & Opportunities</h4>
          <div className="flex flex-wrap gap-2">
            {aiInsights.skillGaps.map(skill => (
              <span key={skill} className="px-2.5 py-1.5 text-xs font-medium bg-danger-500/10 text-danger-600 border border-danger-500/20 rounded-md flex items-center gap-1.5">
                <AlertCircle className="w-3.5 h-3.5" /> {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Recommendations */}
        <div className="mt-auto">
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Recommendations</h4>
          <ul className="space-y-3">
            {aiInsights.recommendations.slice(0, 3).map((rec, i) => (
              <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span className="leading-relaxed">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
