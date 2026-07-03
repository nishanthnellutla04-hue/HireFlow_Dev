"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "@/components/common/theme-toggle";
import { useUIStore } from "@/store/ui-store";
import { useAuthStore } from "@/store/auth-store";
import { cn } from "@/lib/utils";
import {
  Menu,
  X,
  BriefcaseBusiness,
  ChevronRight,
  User,
  LogOut,
  Settings,
  LayoutDashboard,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/jobs", label: "Jobs" },
  { href: "/companies", label: "Companies" },
  { href: "/resources", label: "Resources" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/saved", label: "Saved Jobs" },
];

export function Navbar() {
  const pathname = usePathname();

  const {
    isMobileMenuOpen,
    setMobileMenuOpen,
    openModal,
  } = useUIStore();

  const { user, logout } = useAuthStore();
  const [mounted, setMounted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setMounted(true);
    const onScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-2xl border-b border-border shadow-lg"
          : "bg-background/80 backdrop-blur-xl"
      )}
    >
      <div className="container-wide">

        <div className="h-16 flex items-center justify-between">

          {/* LOGO */}

          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <motion.div
              whileHover={{
                rotate: -5,
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className="w-11 h-11 rounded-2xl bg-gradient-to-br from-violet-600 via-indigo-600 to-blue-600 flex items-center justify-center shadow-lg"
            >
              <BriefcaseBusiness className="w-5 h-5 text-white" />
            </motion.div>

            <div className="hidden sm:block">
              <h2 className="font-bold text-lg tracking-tight">
                HireFlow AI
              </h2>

              <p className="text-xs text-muted-foreground">
                AI Powered Careers
              </p>
            </div>

          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex items-center gap-2">

            {navItems.map((item) => {

              const active =
                pathname === item.href ||
                pathname.startsWith(item.href + "/");

              return (

                <Link
                  key={item.href}
                  href={item.href}
                  className="relative px-4 py-2 rounded-xl text-sm font-medium transition-all"
                >

                  {active && (

                    <motion.div
                      layoutId="active-nav"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                      }}
                      className="absolute inset-0 rounded-xl bg-muted border border-border"
                    />

                  )}

                  <span
                    className={cn(
                      "relative z-10",
                      active
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                  </span>

                </Link>

              );

            })}

          </nav>

          {/* RIGHT SIDE */}

          <div className="flex items-center gap-3">

            <ThemeToggle />

            {!mounted ? (
              <div className="w-[160px] h-10 hidden sm:block" />
            ) : user ? (
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 rounded-full p-0.5 hover:ring-2 hover:ring-primary/50 transition-all duration-200"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-sm font-bold text-white shadow-md">
                    {user.initials}
                  </div>
                </button>

                <AnimatePresence>
                  {isDropdownOpen && (
                    <>
                      <div
                        className="fixed inset-0 z-10"
                        onClick={() => setIsDropdownOpen(false)}
                      />
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute right-0 mt-3 w-56 rounded-2xl border border-border bg-card p-2 shadow-2xl z-20 backdrop-blur-xl"
                      >
                        <div className="px-3 py-2.5 border-b border-border mb-1.5">
                          <p className="text-sm font-semibold truncate text-foreground">{user.name}</p>
                          <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                        </div>

                        <Link
                          href="/dashboard"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
                        >
                          <LayoutDashboard className="w-4 h-4" />
                          Dashboard
                        </Link>
                        <Link
                          href="/profile"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
                        >
                          <User className="w-4 h-4" />
                          My Profile
                        </Link>
                        <Link
                          href="/settings"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition"
                        >
                          <Settings className="w-4 h-4" />
                          Settings
                        </Link>

                        <div className="border-t border-border my-1.5" />

                        <button
                          onClick={() => {
                            setIsDropdownOpen(false);
                            logout();
                          }}
                          className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-sm font-medium text-destructive hover:bg-destructive/10 transition"
                        >
                          <LogOut className="w-4 h-4" />
                          Log Out
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <>
                <button
                  onClick={() => openModal("login")}
                  className="hidden sm:block px-5 py-2 text-sm font-medium hover:bg-muted rounded-xl transition"
                >
                  Log in
                </button>

                <motion.button
                  whileHover={{
                    scale: 1.04,
                  }}
                  whileTap={{
                    scale: .97,
                  }}
                  onClick={() => openModal("signup")}
                  className="hidden sm:flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold shadow-lg"
                >
                  Sign Up

                  <ChevronRight className="w-4 h-4" />

                </motion.button>
              </>
            )}

            <button
              onClick={() =>
                setMobileMenuOpen(!isMobileMenuOpen)
              }
              className="lg:hidden p-2"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>

          </div>

        </div>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="lg:hidden absolute top-16 left-0 right-0 bg-background/95 backdrop-blur-2xl border-b border-border shadow-2xl"
            >
              <div className="container-wide py-6">

                <nav className="flex flex-col gap-2">

                  {navItems.map((item) => {

                    const active =
                      pathname === item.href ||
                      pathname.startsWith(item.href + "/");

                    return (

                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 transition-all duration-200",
                          active
                            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg"
                            : "hover:bg-muted"
                        )}
                      >

                        <span className="font-medium">
                          {item.label}
                        </span>

                        <ChevronRight className="w-4 h-4" />

                      </Link>

                    );

                  })}

                </nav>

                <div className="border-t border-border my-6" />

                {!mounted ? (
                  <div className="h-[120px]" />
                ) : user ? (
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-muted/50 border border-border">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-indigo-600 flex items-center justify-center text-base font-bold text-white shadow-md shrink-0">
                        {user.initials}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold truncate text-foreground text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground truncate">{user.email}</p>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        logout();
                        setMobileMenuOpen(false);
                      }}
                      className="w-full flex items-center justify-center gap-2 rounded-xl border border-destructive/20 bg-destructive/5 text-destructive py-3 font-semibold hover:bg-destructive/10 transition"
                    >
                      <LogOut className="w-4.5 h-4.5" />
                      Log Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => {
                        openModal("login");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full rounded-xl border border-border py-3 font-medium hover:bg-muted transition"
                    >
                      Log in
                    </button>

                    <button
                      onClick={() => {
                        openModal("signup");
                        setMobileMenuOpen(false);
                      }}
                      className="w-full rounded-xl py-3 font-semibold text-white bg-gradient-to-r from-violet-600 to-indigo-600 shadow-lg"
                    >
                      Create Free Account
                    </button>
                  </div>
                )}

                <div className="mt-8 pt-6 border-t border-border">

                  <p className="text-center text-xs text-muted-foreground">
                    HireFlow AI • Powered by AI
                  </p>

                </div>

              </div>

            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}