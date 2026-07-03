import { ArrowLeft, BookOpen, Construction } from "lucide-react";
import Link from "next/link";

export default function ResourceDetailPage() {
  return (
    <div className="bg-muted/10 min-h-screen py-24 flex flex-col items-center justify-center">
      <div className="container-wide max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-8">
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Resources
          </Link>
        </div>

        <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-8 relative">
          <BookOpen className="w-10 h-10" />
          <div className="absolute -bottom-2 -right-2 bg-background rounded-full p-1.5 shadow-sm border border-border/50">
            <Construction className="w-5 h-5 text-orange-500" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
          Resource Content Coming Soon
        </h1>
        
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          We are currently drafting this article. Check back later for expert insights and career advice!
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
