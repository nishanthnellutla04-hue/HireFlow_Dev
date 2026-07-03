import { useQuery } from "@tanstack/react-query";
import { companies, getCompanyBySlug, getCompanyById } from "@/data/companies";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export function useCompanies(searchQuery?: string) {
  return useQuery({
    queryKey: ["companies", searchQuery],
    queryFn: async () => {
      await delay(800);
      
      let result = [...companies];
      
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        result = result.filter(
          (c) => 
            c.name.toLowerCase().includes(q) || 
            c.industry.toLowerCase().includes(q) ||
            c.techStack.some(t => t.toLowerCase().includes(q))
        );
      }
      
      // Sort by rating by default
      return result.sort((a, b) => b.rating - a.rating);
    },
  });
}

export function useCompany(slugOrId: string) {
  return useQuery({
    queryKey: ["company", slugOrId],
    queryFn: async () => {
      await delay(600);
      const company = getCompanyBySlug(slugOrId) || getCompanyById(slugOrId);
      if (!company) throw new Error("Company not found");
      return company;
    },
  });
}
