"use client";

import { categories } from "@/data/categories";
import { motion } from "framer-motion";
import Link from "next/link";
import * as Icons from "lucide-react";
import { formatCompact } from "@/lib/utils";

export function PopularCategories() {
  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Explore by Category
          </h2>
          <p className="text-muted-foreground text-lg">
            Find the perfect role across thousands of tech jobs, updated daily.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
          {categories.map((category, index) => {
            // @ts-ignore - Dynamic icon rendering
            const Icon = Icons[category.icon] || Icons.Briefcase;

            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
              >
                <Link
                  href={`/jobs?category=${category.slug}`}
                  className="group flex flex-col items-center justify-center bg-card p-8 rounded-2xl border border-border transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 h-full text-center"
                >
                  <div 
                    className="w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300 text-foreground group-hover:bg-primary/10 group-hover:text-primary"
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.name}
                  </h3>
                  <div className="text-xs font-medium text-muted-foreground mt-1">
                    {formatCompact(category.jobCount)} positions
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
