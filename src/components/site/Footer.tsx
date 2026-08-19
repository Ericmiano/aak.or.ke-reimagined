import { chapters } from "@/data/site";

const quickLinks = [
  { label: "About AAK", href: "https://aak.or.ke/about-us/" },
  { label: "Membership", href: "https://members.aak.or.ke/application/registerv3/" },
  { label: "Members Directory", href: "https://members.aak.or.ke/directory" },
  { label: "Validate Certificate", href: "https://members.aak.or.ke/validate" },
  { label: "Mulika Mjengo", href: "https://aak.or.ke/mulika-mjengo/" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="mx-auto max-w-[1400px] px-6 py-20 lg:px-12">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl font-bold tracking-[0.16em]">AAK</p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              The Architectural Association of Kenya has united professionals across the built
              and natural environment since 1967.
            </p>
            <address className="mt-6 space-y-1 text-sm not-italic text-background/60">
              <p>Professional Centre, Parliament Road</p>
              <p>P.O. Box 44258–00100, Nairobi, Kenya</p>
              <p>
                <a className="link-underline" href="mailto:info@aak.or.ke">
                  info@aak.or.ke
                </a>
              </p>
            </address>
          </div>

          <nav aria-label="Chapters">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
              Chapters
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-background/70">
              {chapters.slice(0, 8).map((chapter) => (
                <li key={chapter.name}>
                  <a className="link-underline" href={chapter.href}>
                    {chapter.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Quick links">
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
              Quick links
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-background/70">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a className="link-underline" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-background/40">
              Follow
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm text-background/70">
              <li>
                <a className="link-underline" href="https://x.com/AAKenya">
                  X (Twitter)
                </a>
              </li>
              <li>
                <a className="link-underline" href="https://www.linkedin.com/company/architectural-association-of-kenya/">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="link-underline" href="https://www.facebook.com/AAKenya/">
                  Facebook
                </a>
              </li>
              <li>
                <a className="link-underline" href="https://www.instagram.com/aakenya/">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-background/15 pt-8 text-xs text-background/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Architectural Association of Kenya. All rights reserved.</p>
          <p>Building a safe, sustainable and well-planned Kenya.</p>
        </div>
      </div>
    </footer>
  );
}
