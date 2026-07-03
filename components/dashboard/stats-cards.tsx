"use client";

import { dashboardStats } from "@/data/dashboard";
import { Bookmark, Send, Eye, Calendar, TrendingUp, TrendingDown, MoreHorizontal } from "lucide-react";
import { motion } from "framer-motion";

// Helper to generate a fake SVG sparkline
const Sparkline = ({ data, color, isPositive }: { data: number[], color: string, isPositive: boolean }) => {
  const max = Math.max(...data);
  const min = Math.min(...data);
  const range = max - min || 1;
  const padding = 4;
  const width = 100;
  const height = 40;

  const points = data.map((val, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - padding - ((val - min) / range) * (height - 2 * padding);
    return `${x},${y}`;
  }).join(" ");

  const fillPath = `M 0,${height} L ${points} L ${width},${height} Z`;

  return (
    <svg width="100%" height="100%" viewBox={`0 0 ${width} ${height}`} className="overflow-visible preserve-3d">
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.2" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={fillPath} fill={`url(#gradient-${color})`} className="transition-all duration-500" />
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        points={points}
        className="transition-all duration-500 drop-shadow-sm"
      />
      {/* Last point dot */}
      <circle
        cx={width}
        cy={height - padding - ((data[data.length - 1] - min) / range) * (height - 2 * padding)}
        r="3"
        fill="var(--background)"
        stroke={color}
        strokeWidth="2"
      />
    </svg>
  );
};

export function StatsCards() {
  const cards = [
    {
      id: "applications",
      label: "Applications",
      value: dashboardStats.appliedJobs,
      trend: dashboardStats.appliedJobsTrend,
      icon: Send,
      theme: { text: "text-indigo-500", bg: "bg-indigo-500/10", border: "border-indigo-500/20", hex: "#6366f1" },
      sparklineData: [4, 6, 5, 8, 12, 10, 15],
    },
    {
      id: "interviews",
      label: "Interviews",
      value: dashboardStats.interviews,
      trend: dashboardStats.interviewsTrend,
      icon: Calendar,
      theme: { text: "text-blue-500", bg: "bg-blue-500/10", border: "border-blue-500/20", hex: "#3b82f6" },
      sparklineData: [1, 2, 1, 3, 2, 4, 5],
    },
    {
      id: "saved",
      label: "Saved Jobs",
      value: dashboardStats.savedJobs,
      trend: dashboardStats.savedJobsTrend,
      icon: Bookmark,
      theme: { text: "text-emerald-500", bg: "bg-emerald-500/10", border: "border-emerald-500/20", hex: "#10b981" },
      sparklineData: [10, 15, 12, 18, 24, 22, 28],
    },
    {
      id: "views",
      label: "Profile Views",
      value: dashboardStats.profileViews,
      trend: dashboardStats.profileViewsTrend,
      icon: Eye,
      theme: { text: "text-amber-500", bg: "bg-amber-500/10", border: "border-amber-500/20", hex: "#f59e0b" },
      sparklineData: [45, 52, 48, 65, 58, 72, 85],
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {cards.map((card, i) => (
        <motion.div
          key={card.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1, ease: "easeOut" }}
          className="group relative bg-card border border-border rounded-2xl p-5 overflow-hidden hover:shadow-lg hover:border-primary/20 transition-all duration-300"
        >
          {/* Top Row: Icon + Trend */}
          <div className="flex items-start justify-between mb-6">
            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.theme.bg} ${card.theme.text} border ${card.theme.border} group-hover:scale-110 transition-transform duration-300`}>
              <card.icon className="w-5 h-5" />
            </div>
            
            <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${card.trend >= 0 ? "bg-emerald-500/10 text-emerald-600" : "bg-red-500/10 text-red-600"}`}>
              {card.trend >= 0 ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
              {Math.abs(card.trend)}%
            </div>
          </div>

          {/* Value + Sparkline */}
          <div className="flex items-end justify-between">
            <div className="z-10">
              <h3 className="text-3xl font-bold tracking-tight text-foreground mb-1">{card.value}</h3>
              <p className="text-sm font-medium text-muted-foreground">{card.label}</p>
            </div>
            <div className="w-24 h-12 opacity-60 group-hover:opacity-100 transition-opacity">
              <Sparkline data={card.sparklineData} color={card.theme.hex} isPositive={card.trend >= 0} />
            </div>
          </div>

          {/* Context Menu Trigger */}
          <button className="absolute top-4 right-4 p-1.5 text-muted-foreground hover:text-foreground opacity-0 group-hover:opacity-100 transition-opacity rounded-md hover:bg-muted">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </motion.div>
      ))}
    </div>
  );
}
