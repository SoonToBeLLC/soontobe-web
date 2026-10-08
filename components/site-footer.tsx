import Link from "next/link";
import { Logo } from "@/components/logo";
import { footerLinks } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <>
      <footer id="contact" className="border-t border-border">
        <div className="mx-auto flex max-w-7xl flex-col gap-12 px-5 py-14 sm:px-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-sm space-y-5">
            <Logo />
            <p className="text-base leading-7 text-secondary">
              Bringing creative visions to life.
            </p>
            <a
              href="mailto:hello@soontobellc.com"
              className="inline-block text-sm text-accent transition-colors duration-200 hover:text-foreground"
            >
              hello@soontobellc.com
            </a>
          </div>

          <div className="flex flex-col gap-6 lg:items-end">
            <nav
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted"
              aria-label="Footer"
            >
              {footerLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors duration-200 hover:text-foreground"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <p className="text-sm text-muted">SoonToBe, LLC © 2026</p>
          </div>
        </div>
      </footer>
      <div aria-hidden="true" className="h-[calc(100svh-5.5rem-14rem)]" />
    </>
  );
}
