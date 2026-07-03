"use client";

import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    }, 1000);
  };

  return (
    <section className="py-24 md:py-32 bg-background border-t border-border">
      <div className="container-wide">
        <div className="relative rounded-2xl bg-card border border-border p-8 md:p-12 lg:p-16 shadow-lg max-w-5xl mx-auto overflow-hidden">
          {/* Subtle decoration */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
            <div className="text-center lg:text-left flex-1 max-w-xl">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4 text-foreground">
                Get career insights delivered weekly
              </h2>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                Join 50,000+ professionals receiving our newsletter on industry trends, salary negotiation, and career growth.
              </p>
            </div>
            
            <div className="w-full lg:w-auto flex-grow max-w-md">
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-2.5">
                  <div className="relative flex-grow">
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full pl-4 pr-10 py-3 bg-muted/40 rounded-xl border border-border text-foreground placeholder:text-muted-foreground text-sm font-medium focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status !== "idle"}
                      required
                    />
                    <Send className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={status !== "idle"}
                    className="sm:w-auto py-3 px-6 bg-primary text-primary-foreground font-semibold rounded-xl text-sm hover:opacity-95 transition-opacity disabled:opacity-75 disabled:cursor-not-allowed shadow-md shadow-primary/10 flex items-center justify-center gap-2 shrink-0"
                  >
                    {status === "loading" ? "Subscribing..." : 
                     status === "success" ? (
                       <>
                         <CheckCircle2 className="w-4 h-4" />
                         Subscribed
                       </>
                     ) : 
                     "Subscribe"}
                  </button>
                </div>
                
                <p className="text-xs text-center lg:text-left text-muted-foreground">
                  We care about your data in our <a href="#" className="underline hover:text-foreground">privacy policy</a>.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
