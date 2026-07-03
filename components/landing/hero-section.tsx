"use client";

import { motion } from "framer-motion";
import { Search, MapPin, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function HeroSection() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (keyword) params.set("q", keyword);
    if (location) params.set("location", location);
    router.push(`/jobs?${params.toString()}`);
  };

  return (
    <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden flex flex-col items-center justify-center min-h-[90vh]">
      {/* Dynamic Ambient Background Layering */}
      <div className="absolute inset-0 bg-grid opacity-[0.06] dark:opacity-[0.12] -z-20 pointer-events-none" />
      <div className="absolute top-[5%] left-1/2 -translate-x-1/2 w-full h-[600px] max-w-5xl opacity-40 pointer-events-none -z-30">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-[120px]" />
      </div>
      <div className="absolute bottom-[-10%] right-[5%] w-[400px] h-[400px] rounded-full bg-cyan-500/5 blur-[120px] -z-30 pointer-events-none animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute top-[15%] left-[5%] w-[350px] h-[350px] rounded-full bg-fuchsia-500/5 blur-[120px] -z-30 pointer-events-none animate-[float_12s_ease-in-out_infinite]" />

      <div className="container-wide flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/60 backdrop-blur-md border border-border/80 text-foreground text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          HireFlow AI Intelligence
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter max-w-4xl mb-6 text-foreground leading-[1.08] select-none"
        >
          Find your next career role <br className="hidden md:block" />
          <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-cyan-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-fuchsia-400 dark:to-cyan-400">
            faster & smarter.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed font-medium"
        >
          Stop scrolling through irrelevant listings. Our AI analyzes your experience to deliver highly-curated, premium job opportunities tailored specifically for you.
        </motion.p>

        {/* Sleek Glassmorphic Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          className="w-full max-w-4xl bg-card/60 backdrop-blur-xl rounded-3xl p-2 shadow-2xl border border-border/80 focus-within:border-primary/40 focus-within:ring-2 focus-within:ring-primary/10 transition-all duration-300 relative z-20"
        >
          <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 flex items-center gap-3 px-4 py-3.5 md:py-0 border-b md:border-b-0 md:border-r border-border/50 transition-colors focus-within:bg-muted/40 rounded-2xl md:rounded-l-2xl md:rounded-tr-none">
              <Search className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="Job title, keywords, or company"
                className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm font-semibold focus:ring-0"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            
            <div className="flex-1 flex items-center gap-3 px-4 py-3.5 md:py-0 border-b md:border-b-0 md:border-r border-border/50 transition-colors focus-within:bg-muted/40">
              <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
              <input
                type="text"
                placeholder="City, state, or 'Remote'"
                className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground text-sm font-semibold focus:ring-0"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            
            <div className="hidden lg:flex flex-1 items-center gap-3 px-4 py-3.5 md:py-0 transition-colors focus-within:bg-muted/40 relative">
              <Briefcase className="w-5 h-5 text-muted-foreground shrink-0" />
              <select className="w-full bg-transparent border-none outline-none text-foreground cursor-pointer text-sm font-semibold focus:ring-0 appearance-none pr-8 bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M7%209l3%203%203-3%22%20stroke%3D%22%236b7280%22%20stroke-width%3D%221.5%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%2F%3E%3C%2Fsvg%3E')] bg-[position:right_4px_center] bg-no-repeat">
                <option value="">All Categories</option>
                <option value="engineering">Engineering</option>
                <option value="design">Design</option>
                <option value="product">Product</option>
                <option value="data-science">Data Science</option>
              </select>
            </div>
            
            <button 
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-500 hover:to-indigo-500 text-white font-bold rounded-2xl transition-all duration-300 shadow-[0_4px_12px_rgba(124,58,237,0.25)] hover:shadow-[0_4px_20px_rgba(124,58,237,0.4)] whitespace-nowrap text-sm cursor-pointer"
            >
              Search Jobs
            </button>
          </form>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
          className="flex flex-wrap justify-center gap-6 md:gap-8 mt-24 pt-8 w-full max-w-4xl"
        >
          {[
            { label: "Active Jobs", value: "10K+" },
            { label: "Top Companies", value: "5K+" },
            { label: "Professionals", value: "50K+" },
            { label: "Success Rate", value: "98%" },
          ].map((stat) => (
            <div 
              key={stat.label} 
              className="flex-1 min-w-[150px] bg-card/45 dark:bg-card/25 backdrop-blur-md border border-border/40 hover:border-primary/20 p-5 rounded-2xl flex flex-col items-center justify-center shadow-sm transition duration-300"
            >
              <span className="text-3xl font-extrabold text-foreground mb-1.5 tracking-tight">{stat.value}</span>
              <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
