"use client";

import { testimonials } from "@/data/dashboard";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Loved by ambitious professionals
          </h2>
          <p className="text-muted-foreground text-lg">
            Join thousands of professionals who have accelerated their careers using HireFlow AI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className="bg-card rounded-2xl p-8 border border-border shadow-sm transition-all hover:shadow-md flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < testimonial.rating ? "fill-amber-500 text-amber-500" : "fill-muted text-muted-foreground"}`} 
                  />
                ))}
              </div>
              
              <blockquote className="text-base md:text-lg leading-relaxed mb-8 text-foreground font-medium flex-1">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center gap-4 mt-auto pt-6 border-t border-border/50">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground font-semibold shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-foreground">{testimonial.name}</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">{testimonial.role} • {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
