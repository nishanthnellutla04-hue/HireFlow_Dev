import { useQuery } from "@tanstack/react-query";
import { jobs, getJobBySlug, getJobById, searchJobs, getFeaturedJobs, getJobsByCategory } from "@/data/jobs";
import { type JobFilters, type Job } from "@/types";

// Simulate network delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function useJobs(filters?: Partial<JobFilters>) {
  return useQuery({
    queryKey: ["jobs", filters],
    queryFn: async () => {
      await delay(800); // Artificial delay for realism
      
      let result = [...jobs];

      if (filters) {
        // Text search (simulating full-text search)
        if (filters.search) {
          const q = filters.search.toLowerCase();
          result = result.filter(
            (j) =>
              j.title.toLowerCase().includes(q) ||
              j.company.name.toLowerCase().includes(q) ||
              j.skills.some((s) => s.toLowerCase().includes(q))
          );
        }

        if (filters.location) {
          result = result.filter((j) => j.location.toLowerCase().includes(filters.location!.toLowerCase()));
        }

        if (filters.category) {
          result = result.filter((j) => j.category === filters.category);
        }

        if (filters.employmentType) {
          result = result.filter((j) => j.employmentType === filters.employmentType);
        }

        if (filters.experienceLevel) {
          result = result.filter((j) => j.experienceLevel === filters.experienceLevel);
        }

        if (filters.workMode) {
          result = result.filter((j) => j.workMode === filters.workMode);
        }

        if (filters.salaryMin) {
          result = result.filter((j) => j.salaryMax >= filters.salaryMin!);
        }

        if (filters.sortBy) {
          switch (filters.sortBy) {
            case "recent":
              result.sort((a, b) => new Date(b.postedAt).getTime() - new Date(a.postedAt).getTime());
              break;
            case "salary_high":
              result.sort((a, b) => b.salaryMax - a.salaryMax);
              break;
            case "salary_low":
              result.sort((a, b) => a.salaryMax - b.salaryMax);
              break;
            case "relevant":
            default:
              // Sort by match score if available, otherwise fallback to recent
              result.sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0));
              break;
          }
        }
      }

      return result;
    },
  });
}

export function useJob(slugOrId: string) {
  return useQuery({
    queryKey: ["job", slugOrId],
    queryFn: async () => {
      await delay(600);
      const job = getJobBySlug(slugOrId) || getJobById(slugOrId);
      if (!job) throw new Error("Job not found");
      return job;
    },
  });
}

export function useFeaturedJobs() {
  return useQuery({
    queryKey: ["jobs", "featured"],
    queryFn: async () => {
      await delay(600);
      return getFeaturedJobs();
    },
  });
}

export function useJobsByCategory(category: string) {
  return useQuery({
    queryKey: ["jobs", "category", category],
    queryFn: async () => {
      await delay(600);
      return getJobsByCategory(category);
    },
  });
}
