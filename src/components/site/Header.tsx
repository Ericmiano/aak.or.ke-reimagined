import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500",
        scrolled
          ? "border-b border-border bg-background/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between gap-6 px-6 lg:px-12">
        <a
          href="/"
          className={cn(
            "flex items-baseline gap-3 transition-colors",
            scrolled ? "text-foreground" : "text-primary-foreground",
          )}
        >
          <span className="font-display text-xl font-bold tracking-[0.16em]">AAK</span>
          <span
            className={cn(
              "hidden text-[11px] uppercase tracking-[0.18em] sm:block",
              scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
            )}
          >
            Architectural Association of Kenya
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={cn(
                "link-underline text-sm font-medium transition-colors",
                scrolled
                  ? "text-foreground/80 hover:text-foreground"
                  : "text-primary-foreground/80 hover:text-primary-foreground",
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://members.aak.or.ke/"
            className="hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5 sm:inline-flex"
          >
            Member Portal
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className={cn(
              "inline-flex h-10 w-10 items-center justify-center rounded-full border transition-colors lg:hidden",
              scrolled
                ? "border-border text-foreground"
                : "border-primary-foreground/30 text-primary-foreground",
            )}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto flex max-w-[1400px] flex-col px-6 py-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 text-sm font-medium text-foreground last:border-0"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://members.aak.or.ke/"
              className="mt-4 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
            >
              Member Portal
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
