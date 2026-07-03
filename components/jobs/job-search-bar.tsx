"use client";

import { useJobStore } from "@/store/job-store";
import { Search, MapPin, SlidersHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { useDebounce } from "@/hooks/use-debounce";

export function JobSearchBar() {
  const { filters, setFilters } = useJobStore();
  
  // Local state for immediate typing
  const [keyword, setKeyword] = useState(filters.search || "");
  const [location, setLocation] = useState(filters.location || "");
  
  // Debounce the inputs to avoid excessive filtering
  const debouncedKeyword = useDebounce(keyword, 300);
  const debouncedLocation = useDebounce(location, 300);

  // Sync back to store when debounced values change
  useEffect(() => {
    setFilters({ 
      search: debouncedKeyword,
      location: debouncedLocation
    });
  }, [debouncedKeyword, debouncedLocation, setFilters]);

  // Sync from store if it changes externally (e.g. clear filters)
  useEffect(() => {
    setKeyword(filters.search || "");
    setLocation(filters.location || "");
  }, [filters.search, filters.location]);

  return (
    <div className="w-full bg-card rounded-2xl p-2 shadow-sm border border-border/50 mb-8 flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-3 px-4 py-2 border-b md:border-b-0 md:border-r border-border/50 focus-within:text-primary transition-colors">
        <Search className="w-5 h-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="Job title, keywords, or company"
          className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-0 text-base"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </div>
      
      <div className="flex-1 flex items-center gap-3 px-4 py-2 focus-within:text-primary transition-colors">
        <MapPin className="w-5 h-5 text-muted-foreground shrink-0" />
        <input
          type="text"
          placeholder="City, state, or 'Remote'"
          className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-0 text-base"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />
      </div>
      
      <div className="md:hidden flex items-center justify-between px-4 py-2 border-t border-border/50">
        <span className="text-sm font-medium text-muted-foreground">Filters</span>
        <button className="p-2 bg-muted rounded-lg text-foreground">
          <SlidersHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
