import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { navLinks, utilityLinks } from "@/data/site";
import { cn } from "@/lib/utils";

function NavItem({
  href,
  external,
  children,
  className,
  onClick,
}: {
  href: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  if (external || href.startsWith("#") || href.startsWith("/#") || href.startsWith("mailto:")) {
    return (
      <a href={href} className={className} onClick={onClick}>
        {children}
      </a>
    );
  }
  return (
    <Link to={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 bg-background">
      {/* Utility strip */}
      <div className="hidden bg-foreground text-background lg:block">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-6 text-[11px] tracking-[0.14em] uppercase lg:px-12">
          <p className="text-background/50">Professional Centre, Parliament Road, Nairobi</p>
          <ul className="flex items-center gap-7">
            {utilityLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-background/60 transition-colors hover:text-background focus-visible:text-background"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-foreground/12">
        <div className="mx-auto flex max-w-[1400px] items-stretch justify-between px-6 lg:px-12">
          <Link
            to="/"
            className="group flex items-center gap-4 py-4"
            aria-label="Architectural Association of Kenya — home"
          >
            <span className="flex h-11 w-11 items-center justify-center border border-foreground font-display text-sm font-bold tracking-[0.08em] text-foreground transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
              AAK
            </span>
            <span className="hidden max-w-[13rem] text-[11px] leading-tight uppercase tracking-[0.16em] text-muted-foreground sm:block">
              Architectural Association
              <br />
              of Kenya
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-stretch lg:flex">
            <ul className="flex items-stretch">
              {navLinks.map((link, i) => (
                <li key={link.label} className="flex">
                  <NavItem
                    href={link.href}
                    external={link.external}
                    className="group relative flex items-center gap-2 border-l border-foreground/12 px-6 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground focus-visible:text-foreground"
                  >
                    <span className="font-display text-[10px] tabular-nums text-primary opacity-60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100 group-focus-visible:scale-x-100" />
                  </NavItem>
                </li>
              ))}
              <li className="flex">
                <a
                  href="https://members.aak.or.ke/"
                  className="flex items-center border-l border-foreground/12 bg-foreground px-7 text-sm font-semibold text-background transition-colors hover:bg-primary"
                >
                  Member portal
                </a>
              </li>
            </ul>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="my-2 inline-flex min-h-11 items-center gap-3 border border-foreground/20 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground lg:hidden"
          >
            {open ? "Close" : "Menu"}
            <span aria-hidden="true" className="flex flex-col gap-1">
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-transform duration-300",
                  open && "translate-y-[3px] rotate-45",
                )}
              />
              <span
                className={cn(
                  "block h-px w-5 bg-foreground transition-transform duration-300",
                  open && "-translate-y-[3px] -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div id="mobile-nav" className="border-b border-foreground/12 bg-background lg:hidden">
          <nav aria-label="Mobile" className="mx-auto max-w-[1400px] px-6 py-4">
            <ul>
              {navLinks.map((link, i) => (
                <li key={link.label}>
                  <NavItem
                    href={link.href}
                    external={link.external}
                    onClick={() => setOpen(false)}
                    className="flex min-h-12 items-baseline gap-4 border-b border-foreground/10 py-3 font-display text-xl font-semibold text-foreground"
                  >
                    <span className="font-display text-[10px] tabular-nums text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {link.label}
                  </NavItem>
                </li>
              ))}
            </ul>
            <a
              href="https://members.aak.or.ke/"
              className="mt-5 flex min-h-12 items-center justify-center bg-foreground px-5 text-sm font-semibold text-background"
            >
              Member portal
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
