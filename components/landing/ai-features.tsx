"use client";

import { motion } from "framer-motion";
import { Brain, Target, LineChart, Zap, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

const features = [
  {
    icon: Target,
    title: "Resume Match Score",
    description: "Our AI analyzes your resume against job requirements to give you a compatibility score from 0-100, saving you hours of application time.",
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    icon: Zap,
    title: "Skill Gap Analysis",
    description: "Identify exactly which skills you need to learn to land your target role. Get personalized learning recommendations based on market demand.",
    color: "text-amber-500",
    bg: "bg-amber-500/10",
  },
  {
    icon: LineChart,
    title: "Salary Prediction",
    description: "Stop guessing your worth. Get accurate, real-time salary predictions based on your specific experience, skills, and the current market.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10",
  },
];

export function AIFeatures() {
  return (
    <section className="py-24 md:py-32 bg-background overflow-hidden border-t border-border">
      <div className="container-wide">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Content */}
          <div className="flex-1 max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-widest mb-6"
            >
              <Brain className="w-3.5 h-3.5" />
              Intelligence Engine
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-5xl font-bold tracking-tight mb-6 leading-[1.1] text-foreground"
            >
              Your personal AI <br/>
              <span className="text-muted-foreground">career strategist.</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground mb-12 leading-relaxed"
            >
              HireFlow doesn't just show you jobs. It actively analyzes your profile against the market to tell you where you stand, what you're worth, and how to improve.
            </motion.p>
            
            <div className="flex flex-col gap-10">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex gap-5"
                >
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-border/50", feature.bg, feature.color)}>
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-sm md:text-base">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Right Visual (Bento UI Mockup) */}
          <div className="flex-1 w-full max-w-xl relative mx-auto mt-10 lg:mt-0">
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-[80px] -z-10" />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative rounded-3xl border border-border/80 bg-card/70 dark:bg-card/40 backdrop-blur-xl p-6 shadow-2xl z-10"
            >
              {/* Mock UI Header */}
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
                <div>
                  <h4 className="font-bold text-lg text-foreground">AI Match Analysis</h4>
                  <p className="text-sm text-muted-foreground mt-1 font-medium">Senior Frontend Engineer at Google</p>
                </div>
                <div className="w-16 h-16 rounded-full border-4 border-primary/20 flex items-center justify-center relative shadow-sm bg-background/40">
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="28" cy="28" r="28" stroke="currentColor" strokeWidth="4" fill="transparent" className="text-primary" strokeDasharray="175" strokeDashoffset="15" />
                  </svg>
                  <span className="font-extrabold text-lg text-foreground">92%</span>
                </div>
              </div>

              {/* Mock UI Content */}
              <div className="space-y-8">
                {/* Stats Row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-background/60 dark:bg-neutral-900/40 border border-border/60 p-3.5 rounded-2xl flex items-center gap-3 shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-violet-600/10 dark:bg-violet-400/10 flex items-center justify-center text-violet-600 dark:text-violet-400 shrink-0">
                      <Brain className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">AI Skill Fit</p>
                      <p className="text-xs font-bold text-foreground">High Match</p>
                    </div>
                  </div>

                  <div className="bg-background/60 dark:bg-neutral-900/40 border border-border/60 p-3.5 rounded-2xl flex items-center gap-3 shadow-sm">
                    <div className="w-9 h-9 rounded-xl bg-emerald-500/10 dark:bg-emerald-400/10 flex items-center justify-center text-emerald-500 dark:text-emerald-400 shrink-0">
                      <LineChart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-wider">Estimate Pay</p>
                      <p className="text-xs font-bold text-foreground">₹18L – ₹45L PA</p>
                    </div>
                  </div>
                </div>
                <div>
                  <h5 className="font-bold mb-3 text-[10px] text-muted-foreground uppercase tracking-widest">Matched Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {["React", "TypeScript", "Performance", "CSS Architecture", "Testing"].map(skill => (
                      <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20 shadow-sm">
                        <CheckCircle2 className="w-3.5 h-3.5" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h5 className="font-bold mb-3 text-[10px] text-muted-foreground uppercase tracking-widest">Missing Skills</h5>
                  <div className="flex flex-wrap gap-2">
                    {["WebAssembly", "WebGL"].map(skill => (
                      <span key={skill} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-red-500/10 text-red-600 dark:text-red-400 text-xs font-semibold border border-red-500/20 shadow-sm">
                        <Zap className="w-3.5 h-3.5" /> {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-muted/60 dark:bg-muted/30 border border-border/80">
                  <h5 className="font-bold text-foreground mb-1 text-sm">AI Recommendation</h5>
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
                    Your profile is highly competitive. Emphasize your experience with Core Web Vitals optimization in the cover letter.
                  </p>
                </div>
              </div>
            </motion.div>
            

          </div>
          
        </div>
      </div>
    </section>
  );
}
