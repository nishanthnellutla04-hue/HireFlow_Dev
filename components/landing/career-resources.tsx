"use client";

import { resources } from "@/data/dashboard";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock } from "lucide-react";

export function CareerResources() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
              Career Resources
            </h2>
            <p className="text-muted-foreground text-lg">
              Expert advice, interview prep, and industry insights to help you land your dream job.
            </p>
          </div>
          <Link 
            href="/resources" 
            className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
          >
            View all resources 
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
            >
              <Link
                href={`/resources/${resource.id}`}
                className="group block bg-card rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-primary/30 h-full flex flex-col"
              >
                {/* Mock Image Area */}
                <div className="h-48 bg-muted/40 relative overflow-hidden flex items-center justify-center border-b border-border/50">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-accent/5" />
                  <div className="opacity-40 group-hover:scale-105 transition-transform duration-500">
                    <BookOpen className="w-10 h-10 text-foreground" />
                  </div>
                  <div className="absolute top-4 left-4 px-2.5 py-0.5 bg-card border border-border rounded-full text-[10px] font-bold uppercase tracking-wider text-muted-foreground shadow-sm">
                    {resource.category}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2 text-foreground">
                    {resource.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-3 text-sm flex-grow leading-relaxed">
                    {resource.description}
                  </p>
                  
                  <div className="flex items-center gap-2 text-xs text-muted-foreground font-semibold mt-auto pt-4 border-t border-border/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{resource.readTime} READ</span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
