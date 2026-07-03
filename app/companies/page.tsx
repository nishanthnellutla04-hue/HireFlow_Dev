"use client";

import { useCompanies } from "@/hooks/use-companies";
import { CompanyCard } from "@/components/companies/company-card";
import { Search, Building2, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { motion } from "framer-motion";

export default function CompaniesPage() {
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 300);
  const { data: companies, isLoading } = useCompanies(debouncedSearch);

  return (
    <div className="bg-muted/10 min-h-screen py-12">
      <div className="container-wide">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Discover Top Workplaces
            </h1>
            <p className="text-muted-foreground text-lg">
              Explore thousands of companies to find the perfect culture, benefits, and career growth for you.
            </p>
          </div>
        </div>

        {/* Search & Filter Bar */}
        <div className="w-full bg-card rounded-2xl p-2 shadow-sm border border-border/50 mb-12 flex flex-col md:flex-row gap-2">
          <div className="flex-1 flex items-center gap-3 px-4 py-3 md:py-2 border-b md:border-b-0 md:border-r border-border/50 focus-within:text-primary transition-colors">
            <Search className="w-5 h-5 text-muted-foreground shrink-0" />
            <input
              type="text"
              placeholder="Search by company name, industry, or tech stack..."
              className="w-full bg-transparent border-none outline-none text-foreground placeholder:text-muted-foreground focus:ring-0 text-base"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          
          <div className="hidden lg:flex flex-1 items-center gap-3 px-4 py-2 border-r border-border/50">
            <Building2 className="w-5 h-5 text-muted-foreground shrink-0" />
            <select className="w-full bg-transparent border-none outline-none text-foreground cursor-pointer focus:ring-0 appearance-none">
              <option value="">All Industries</option>
              <option value="technology">Technology</option>
              <option value="fintech">Fintech</option>
              <option value="healthcare">Healthcare</option>
              <option value="e-commerce">E-Commerce</option>
            </select>
          </div>

          <button className="hidden md:flex items-center gap-2 px-6 py-2 bg-muted text-foreground font-medium rounded-xl hover:bg-muted/80 transition-colors">
            <SlidersHorizontal className="w-4 h-4" /> Filters
          </button>
        </div>

        {/* Company Grid */}
        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-[400px] bg-muted/50 animate-pulse rounded-3xl border border-border/50" />
            ))}
          </div>
        ) : companies && companies.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={company.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <CompanyCard company={company} className="h-full" />
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-card rounded-3xl border border-border/50">
            <Building2 className="w-12 h-12 text-muted-foreground mx-auto mb-4 opacity-50" />
            <h3 className="text-xl font-bold mb-2">No companies found</h3>
            <p className="text-muted-foreground">Try adjusting your search terms.</p>
          </div>
        )}
      </div>
    </div>
  );
}
