import Link from "next/link";
import { Twitter, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container-wide py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8">
          <div className="lg:col-span-2 flex flex-col gap-8">
            <Link href="/" className="flex items-center gap-3 group w-fit">
              <div className="w-8 h-8 rounded-lg bg-foreground flex items-center justify-center text-background font-bold transition-transform group-hover:scale-105">
                H
              </div>
              <span className="font-semibold text-lg tracking-tight text-foreground">
                HireFlow
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              Premium AI-powered job matching for top-tier professionals. Designed for the modern workforce.
            </p>
            <div className="flex items-center gap-5 text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-foreground transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-sm text-foreground">Product</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link href="/jobs" className="hover:text-foreground transition-colors">Find Jobs</Link></li>
              <li><Link href="/companies" className="hover:text-foreground transition-colors">Browse Companies</Link></li>
              <li><Link href="/salaries" className="hover:text-foreground transition-colors">Salary Insights</Link></li>
              <li><Link href="/pricing" className="hover:text-foreground transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-sm text-foreground">Resources</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link href="/blog" className="hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link href="/guides" className="hover:text-foreground transition-colors">Career Guides</Link></li>
              <li><Link href="/resume" className="hover:text-foreground transition-colors">Resume Builder</Link></li>
              <li><Link href="/help" className="hover:text-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div className="flex flex-col gap-5">
            <h3 className="font-medium text-sm text-foreground">Company</h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link href="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-foreground transition-colors">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HireFlow Inc. All rights reserved.</p>
          
          {/* Status Indicator */}
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/50 bg-muted/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs font-medium">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
