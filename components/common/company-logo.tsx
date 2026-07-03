"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface CompanyLogoProps {
  name: string;
  logo: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

const gradients = [
  "from-violet-500 to-indigo-500 text-white",
  "from-blue-500 to-cyan-500 text-white",
  "from-emerald-500 to-teal-500 text-white",
  "from-amber-500 to-orange-500 text-white",
  "from-rose-500 to-pink-500 text-white",
  "from-purple-500 to-fuchsia-500 text-white",
];

function getGradient(name: string) {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % gradients.length;
  return gradients[index];
}

export function CompanyLogo({ name, logo, className, size = "md" }: CompanyLogoProps) {
  const [error, setError] = useState(false);
  const isUrl = logo && (logo.startsWith("http://") || logo.startsWith("https://") || logo.startsWith("/logos/"));

  const sizeClasses = {
    sm: "w-8 h-8 text-xs rounded-lg",
    md: "w-12 h-12 text-sm rounded-xl",
    lg: "w-14 h-14 text-base rounded-xl border border-border/40",
    xl: "w-20 h-20 text-2xl rounded-2xl border-4 border-card",
  };

  const getInitials = (n: string) => {
    return n.split(" ").map((w) => w[0]).join("").toUpperCase().slice(0, 2);
  };

  if (!isUrl || error) {
    const gradient = getGradient(name);
    return (
      <div
        className={cn(
          "flex items-center justify-center font-bold bg-gradient-to-br shadow-sm select-none shrink-0",
          gradient,
          sizeClasses[size],
          className
        )}
      >
        {getInitials(name)}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative bg-white flex items-center justify-center overflow-hidden shrink-0 border border-border/40",
        sizeClasses[size],
        className
      )}
    >
      <Image
        src={logo}
        alt={`${name} logo`}
        fill
        sizes="(max-width: 768px) 48px, 80px"
        className="object-contain p-1.5 animate-fade-in"
        // Prevent Next.js server-side remote image optimization fetch failures in offline/restricted sandbox environments
        unoptimized
        onError={() => setError(true)}
      />
    </div>
  );
}
