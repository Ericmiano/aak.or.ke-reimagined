import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

export function Spotlight() {
  return (
    <section aria-labelledby="spotlight-title" className="bg-background py-24 lg:py-32">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <Reveal className="order-2 lg:order-1">
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
              <span className="text-primary tabular-nums">02</span>
              <span className="h-px w-10 bg-border" aria-hidden="true" />
              <span>In the spotlight</span>
            </div>
            <p className="mt-6 inline-flex rounded-full bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
              Entries open · Deadline 18 March 2026
            </p>
            <h2
              id="spotlight-title"
              className="mt-5 font-display text-3xl font-semibold leading-[1.08] tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              AAK &ndash; Basco DuraCoat Awards of Excellence in Architecture 2026
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Celebrating outstanding architectural achievement across Kenya and East Africa.
              Submit a completed project built between 2020 and 2025 across nine categories,
              from residential and commercial to hospitality and institutional work.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">
              <a
                href="https://aak.or.ke/aak-duracoat-awards-2026-registration/"
                className="group inline-flex items-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background transition-transform duration-300 hover:-translate-y-0.5"
              >
                Enter the awards
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="https://members.aak.or.ke/eventdetailv2?eid=baM8JnQ3+AaNamasUK2rTg=="
                className="link-underline text-sm font-medium text-foreground"
              >
                View the 2026 gala details
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <figure className="relative overflow-hidden rounded-3xl">
              <img
                src="https://aak.or.ke/wp-content/uploads/2026/01/AAK-DURACOAT-AWARDS-OF-EXCELLENCE-2026-1-scaled.webp"
                alt="AAK Basco DuraCoat Awards of Excellence in Architecture 2026 campaign artwork"
                loading="lazy"
                className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-[1.03]"
              />
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
