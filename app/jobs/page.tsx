import { JobSearchBar } from "@/components/jobs/job-search-bar";
import { JobFilters } from "@/components/jobs/job-filters";
import { JobList } from "@/components/jobs/job-list";

export const metadata = {
  title: "Explore Jobs | HireFlow AI",
  description: "Find your next career move with our AI-powered job board.",
};

export default function JobsPage() {
  return (
    <div className="bg-muted/10 min-h-screen py-12">
      <div className="container-wide">
        <div className="max-w-3xl mb-10">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Explore Opportunities
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover roles that match your skills, experience, and career goals.
          </p>
        </div>

        <JobSearchBar />

        <div className="flex flex-col lg:flex-row gap-8 mt-8">
          <aside className="w-full lg:w-[320px] shrink-0">
            <div className="sticky top-24">
              <JobFilters />
            </div>
          </aside>
          
          <main className="flex-1 min-w-0">
            <JobList />
          </main>
        </div>
      </div>
    </div>
  );
}
