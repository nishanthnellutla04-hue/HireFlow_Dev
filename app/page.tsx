import { HeroSection } from "@/components/landing/hero-section";
import { TrustedCompanies } from "@/components/landing/trusted-companies";
import { FeaturedJobs } from "@/components/landing/featured-jobs";
import { PopularCategories } from "@/components/landing/popular-categories";
import { TopCompanies } from "@/components/landing/top-companies";
import { AIFeatures } from "@/components/landing/ai-features";
import { Testimonials } from "@/components/landing/testimonials";
import { PricingSection } from "@/components/landing/pricing-section";
import { FAQSection } from "@/components/landing/faq-section";
import { NewsletterSection } from "@/components/landing/newsletter-section";
import { CareerResources } from "@/components/landing/career-resources";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <TrustedCompanies />
      <FeaturedJobs />
      <PopularCategories />
      <AIFeatures />
      <TopCompanies />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <CareerResources />
      <NewsletterSection />
    </div>
  );
}
