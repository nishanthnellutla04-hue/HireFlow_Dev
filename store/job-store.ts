import { create } from "zustand";
import { persist } from "zustand/middleware";
import { type JobFilters, type ExperienceLevel, type WorkMode, type EmploymentType } from "@/types";

interface JobState {
  savedJobs: string[];
  appliedJobs: string[];
  filters: JobFilters;
  toggleSavedJob: (jobId: string) => void;
  applyForJob: (jobId: string) => void;
  setFilters: (filters: Partial<JobFilters>) => void;
  resetFilters: () => void;
  isJobSaved: (jobId: string) => boolean;
  isJobApplied: (jobId: string) => boolean;
}

const defaultFilters: JobFilters = {
  search: "",
  location: "",
  category: "",
  employmentType: "",
  experienceLevel: "",
  workMode: "",
  salaryMin: 0,
  salaryMax: 1000000,
  sortBy: "relevant",
};

export const useJobStore = create<JobState>()(
  persist(
    (set, get) => ({
      savedJobs: [],
      appliedJobs: [],
      filters: defaultFilters,
      toggleSavedJob: (jobId) =>
        set((state) => ({
          savedJobs: state.savedJobs.includes(jobId)
            ? state.savedJobs.filter((id) => id !== jobId)
            : [...state.savedJobs, jobId],
        })),
      applyForJob: (jobId) =>
        set((state) => ({
          appliedJobs: state.appliedJobs.includes(jobId)
            ? state.appliedJobs
            : [...state.appliedJobs, jobId],
        })),
      setFilters: (newFilters) =>
        set((state) => ({
          filters: { ...state.filters, ...newFilters },
        })),
      resetFilters: () => set({ filters: defaultFilters }),
      isJobSaved: (jobId) => get().savedJobs.includes(jobId),
      isJobApplied: (jobId) => get().appliedJobs.includes(jobId),
    }),
    {
      name: "hireflow-job-storage",
      partialize: (state) => ({
        savedJobs: state.savedJobs,
        appliedJobs: state.appliedJobs,
      }),
    }
  )
);
