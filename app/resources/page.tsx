import { BookOpen, Construction } from "lucide-react";
import Link from "next/link";

export default function ResourcesPage() {
  return (
    <div className="bg-muted/10 min-h-screen py-24 flex flex-col items-center justify-center">
      <div className="container-wide text-center max-w-2xl mx-auto">
        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <BookOpen className="w-10 h-10" />
          <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1.5 shadow-sm border border-border/50">
            <Construction className="w-5 h-5 text-orange-500" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
          Career Resources Hub
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed">
          We are currently building a comprehensive library of interview guides, resume templates, and career advice to help you land your dream job. 
          <br className="hidden md:block" />
          Check back soon!
        </p>

        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}
