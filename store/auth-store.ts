import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
  name: string;
  email: string;
  initials: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  login: (email: string, name?: string) => void;
  signup: (email: string, name: string) => void;
  logout: (callback?: () => void) => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, name) => {
        const displayName = name || email.split("@")[0];
        const initials = displayName
          .split(" ")
          .filter(Boolean)
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "U";
        
        set({
          user: {
            name: displayName,
            email,
            initials,
          },
        });
      },
      signup: (email, name) => {
        const initials = name
          .split(" ")
          .filter(Boolean)
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2) || "U";

        set({
          user: {
            name,
            email,
            initials,
          },
        });
      },
      logout: (callback) => {
        set({ user: null });
        if (callback) {
          callback();
        }
      },
    }),
    {
      name: "hireflow-auth-storage",
    }
  )
);
