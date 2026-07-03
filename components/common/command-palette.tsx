"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Briefcase, Building2, BookOpen, LayoutDashboard, BookmarkPlus, ArrowRight, Command, CornerDownLeft } from "lucide-react";
import { jobs } from "@/data/jobs";
import { companies } from "@/data/companies";
import { CompanyLogo } from "@/components/common/company-logo";

interface CommandItem {
  id: string;
  label: string;
  description?: string;
  icon: React.ReactNode;
  action: () => void;
  category: "navigation" | "job" | "company";
}

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Build items
  const navigationItems: CommandItem[] = [
    { id: "nav-jobs", label: "Find Jobs", description: "Browse all open positions", icon: <Briefcase className="w-4 h-4" />, action: () => router.push("/jobs"), category: "navigation" },
    { id: "nav-companies", label: "Companies", description: "Explore top workplaces", icon: <Building2 className="w-4 h-4" />, action: () => router.push("/companies"), category: "navigation" },
    { id: "nav-dashboard", label: "Dashboard", description: "View your analytics", icon: <LayoutDashboard className="w-4 h-4" />, action: () => router.push("/dashboard"), category: "navigation" },
    { id: "nav-saved", label: "Saved Jobs", description: "Your bookmarked positions", icon: <BookmarkPlus className="w-4 h-4" />, action: () => router.push("/saved"), category: "navigation" },
    { id: "nav-resources", label: "Resources", description: "Career guides & articles", icon: <BookOpen className="w-4 h-4" />, action: () => router.push("/resources"), category: "navigation" },
  ];

  const jobItems: CommandItem[] = jobs.slice(0, 20).map((job) => ({
    id: `job-${job.id}`,
    label: job.title,
    description: `${job.company.name} · ${job.location}`,
    icon: <CompanyLogo name={job.company.name} logo={job.company.logo} size="sm" />,
    action: () => router.push(`/jobs/${job.id}`),
    category: "job" as const,
  }));

  const companyItems: CommandItem[] = companies.slice(0, 10).map((company) => ({
    id: `company-${company.id}`,
    label: company.name,
    description: `${company.industry} · ${company.openPositions} open positions`,
    icon: <CompanyLogo name={company.name} logo={company.logo} size="sm" />,
    action: () => router.push(`/companies/${company.slug}`),
    category: "company" as const,
  }));

  const allItems = [...navigationItems, ...jobItems, ...companyItems];

  const filtered = query.trim()
    ? allItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.description?.toLowerCase().includes(query.toLowerCase())
      )
    : navigationItems;

  // Keyboard shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Focus input when open
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setSelectedIndex((i) => Math.min(i + 1, filtered.length - 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setSelectedIndex((i) => Math.max(i - 1, 0));
      } else if (e.key === "Enter" && filtered[selectedIndex]) {
        e.preventDefault();
        filtered[selectedIndex].action();
        setOpen(false);
      }
    },
    [filtered, selectedIndex]
  );

  // Scroll selected into view
  useEffect(() => {
    const el = listRef.current?.querySelector(`[data-index="${selectedIndex}"]`);
    el?.scrollIntoView({ block: "nearest" });
  }, [selectedIndex]);

  // Reset index when query changes
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  // Group filtered items
  const grouped = {
    navigation: filtered.filter((i) => i.category === "navigation"),
    job: filtered.filter((i) => i.category === "job"),
    company: filtered.filter((i) => i.category === "company"),
  };

  let globalIndex = 0;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[500]"
            onClick={() => setOpen(false)}
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="fixed top-[20%] left-1/2 -translate-x-1/2 w-full max-w-xl z-[501]"
          >
            <div className="mx-4 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden">
              {/* Search Input */}
              <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                <Search className="w-5 h-5 text-muted-foreground shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Search jobs, companies, or navigate..."
                  className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-sm font-medium"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-semibold text-muted-foreground bg-muted rounded border border-border">
                  ESC
                </kbd>
              </div>

              {/* Results */}
              <div ref={listRef} className="max-h-[320px] overflow-y-auto py-2">
                {filtered.length === 0 && (
                  <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                    No results for "{query}"
                  </div>
                )}

                {(["navigation", "job", "company"] as const).map((cat) => {
                  const items = grouped[cat];
                  if (items.length === 0) return null;
                  const label = cat === "navigation" ? "Navigation" : cat === "job" ? "Jobs" : "Companies";

                  return (
                    <div key={cat}>
                      <div className="px-4 py-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                        {label}
                      </div>
                      {items.map((item) => {
                        const idx = globalIndex++;
                        return (
                          <button
                            key={item.id}
                            data-index={idx}
                            onClick={() => {
                              item.action();
                              setOpen(false);
                            }}
                            onMouseEnter={() => setSelectedIndex(idx)}
                            className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
                              idx === selectedIndex
                                ? "bg-primary/10 text-primary"
                                : "text-foreground hover:bg-muted/50"
                            }`}
                          >
                            <span className="shrink-0 text-muted-foreground">{item.icon}</span>
                            <div className="flex-1 min-w-0">
                              <span className="block text-sm font-medium truncate">{item.label}</span>
                              {item.description && (
                                <span className="block text-xs text-muted-foreground truncate">{item.description}</span>
                              )}
                            </div>
                            {idx === selectedIndex && <CornerDownLeft className="w-3.5 h-3.5 text-muted-foreground shrink-0" />}
                          </button>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between px-4 py-2.5 border-t border-border text-[10px] text-muted-foreground font-medium">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-muted rounded border border-border text-[10px]">↑↓</kbd> Navigate
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-muted rounded border border-border text-[10px]">↵</kbd> Select
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 bg-muted rounded border border-border text-[10px]">Esc</kbd> Close
                  </span>
                </div>
                <span className="opacity-60">HireFlow Command</span>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
