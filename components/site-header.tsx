"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/navigation";

function ExploreEchoPulse({ className = "" }: { className?: string }) {
  return (
    <span
      aria-disabled="true"
      className={`inline-flex cursor-default items-center justify-center rounded-full bg-foreground font-medium text-background transition-colors duration-200 hover:bg-[#243044] ${className}`}
    >
      Explore EchoPulse
    </span>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const menuId = useId();
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-white/85 backdrop-blur-xl">
        <div className="relative mx-auto flex h-[68px] max-w-7xl items-center justify-between px-5 sm:px-8">
          <Logo />

          <nav
            className="absolute top-1/2 left-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 lg:flex"
            aria-label="Primary"
          >
            {navItems.map((item) => {
              const active = item.href === "/faq" && pathname === "/faq";

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-1.5 text-[13px] tracking-wide transition-colors duration-200 ${
                    active
                      ? "text-foreground"
                      : "text-muted hover:text-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <ExploreEchoPulse className="px-4 py-2 text-[13px]" />
          </div>

          <div className="flex items-center gap-1.5 lg:hidden">
            <ExploreEchoPulse className="px-3 py-1.5 text-[12px]" />
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center text-foreground"
              aria-expanded={open}
              aria-controls={menuId}
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((current) => !current)}
            >
              <svg viewBox="0 0 24 24" className="size-5" aria-hidden="true">
                {open ? (
                  <path
                    d="M6 6l12 12M18 6L6 18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 8h16M4 16h16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {open ? (
          <div id={menuId} className="px-5 pb-5 sm:px-8 lg:hidden">
            <nav className="mx-auto flex max-w-7xl flex-col" aria-label="Mobile">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border-t border-border py-3.5 text-sm text-secondary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        ) : null}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#d9e4f0]/70 to-transparent"
        />
      </div>
    </header>
  );
}
