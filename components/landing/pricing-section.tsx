"use client";

import { pricingPlans } from "@/data/dashboard";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export function PricingSection() {
  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container-wide">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-foreground">
            Simple, transparent pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            Invest in your career with our AI-powered tools. Upgrade anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={cn(
                "relative rounded-2xl p-8 border bg-card flex flex-col h-full transition-all duration-300",
                plan.popular 
                  ? "border-primary shadow-lg ring-1 ring-primary/25" 
                  : "border-border shadow-sm hover:border-border/80"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground min-h-[40px] leading-relaxed">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-4xl font-bold text-foreground tracking-tight">₹{plan.price.toLocaleString("en-IN")}</span>
                  <span className="text-sm text-muted-foreground">/{plan.interval}</span>
                </div>
              </div>
              
              <div className="flex-1">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-foreground">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="leading-normal">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <button 
                className={cn(
                  "w-full py-3.5 rounded-xl text-sm font-semibold transition-all mt-auto",
                  plan.popular 
                    ? "bg-primary text-primary-foreground hover:opacity-95 shadow-md shadow-primary/10" 
                    : "border border-border text-foreground hover:bg-muted"
                )}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
