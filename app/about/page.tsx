import { Users, Globe2, Zap, Shield, ChevronRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export const metadata = {
  title: "About Us | HireFlow AI",
  description: "Learn about our mission to revolutionize the job search process with AI.",
};

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-muted/10 py-24 lg:py-32 border-b border-border/50">
        <div className="absolute inset-0 bg-grid opacity-5" />
        <div className="absolute top-0 right-1/4 w-1/2 h-full bg-gradient-radial from-primary/10 to-transparent blur-3xl -z-10" />
        
        <div className="container-wide max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            Our Mission
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 leading-tight">
            Democratizing access to <br className="hidden md:block" />
            <span className="text-gradient">dream careers</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We believe that finding the right job shouldn't be a full-time job. 
            HireFlow AI was built to bridge the gap between extraordinary talent and 
            innovative companies through the power of artificial intelligence.
          </p>
        </div>
      </div>

      {/* Stats/Values Section */}
      <div className="py-24 container-wide">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm text-center">
            <div className="w-12 h-12 bg-blue-500/10 text-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-2">50k+</h3>
            <p className="text-muted-foreground font-medium">Active Users</p>
          </div>
          
          <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm text-center">
            <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mx-auto mb-4">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-2">120+</h3>
            <p className="text-muted-foreground font-medium">Countries</p>
          </div>
          
          <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm text-center">
            <div className="w-12 h-12 bg-amber-500/10 text-amber-500 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-2">2M+</h3>
            <p className="text-muted-foreground font-medium">AI Matches Made</p>
          </div>
          
          <div className="p-6 rounded-3xl bg-card border border-border/50 shadow-sm text-center">
            <div className="w-12 h-12 bg-success-500/10 text-success-600 rounded-xl flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-3xl font-bold mb-2">98%</h3>
            <p className="text-muted-foreground font-medium">Success Rate</p>
          </div>
        </div>
      </div>

      {/* The Problem & Solution */}
      <div className="py-24 bg-muted/20 border-y border-border/50">
        <div className="container-wide max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">The old way is broken.</h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed">
                <p>
                  For decades, the job search has been a numbers game. Professionals spend countless hours tailoring resumes, filling out redundant applications, and sending their profiles into the "black hole" of Applicant Tracking Systems, only to be met with silence.
                </p>
                <p>
                  Companies struggle equally, sifting through thousands of misaligned applications to find the one candidate who truly fits their needs and culture.
                </p>
              </div>
            </div>
            
            <div className="bg-card p-8 rounded-3xl border border-border/50 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl -mr-10 -mt-10" />
              <h2 className="text-2xl font-bold mb-6 text-foreground relative z-10">
                Enter <span className="text-primary">HireFlow AI</span>
              </h2>
              <ul className="space-y-4 relative z-10">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">1</div>
                  <span className="text-muted-foreground">Deep contextual analysis of your unique career trajectory, not just keyword matching.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">2</div>
                  <span className="text-muted-foreground">Proactive recommendations that uncover roles you didn't even know you were qualified for.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center shrink-0 mt-0.5">3</div>
                  <span className="text-muted-foreground">Transparent insights into salary, skills gaps, and market competitiveness.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-32 container-wide text-center max-w-3xl">
        <h2 className="text-4xl font-bold tracking-tight mb-6">Ready to change how you find work?</h2>
        <p className="text-xl text-muted-foreground mb-10">
          Join the platform that treats your career with the intelligence and respect it deserves.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/jobs" className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground font-bold rounded-xl hover:bg-primary/90 transition-all shadow-glow flex items-center justify-center gap-2">
            Explore Opportunities <ChevronRight className="w-5 h-5" />
          </Link>
          <Link href="/pricing" className="w-full sm:w-auto px-8 py-4 bg-card border border-border text-foreground font-bold rounded-xl hover:bg-muted transition-all">
            View Pricing
          </Link>
        </div>
      </div>
    </div>
  );
}
