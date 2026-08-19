import { ArrowUpRight } from "lucide-react";
import { initiatives } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { cn } from "@/lib/utils";

export function Initiatives() {
  return (
    <section
      id="initiatives"
      aria-labelledby="initiatives-title"
      className="border-t border-border bg-muted/40 py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          index="03"
          eyebrow="Projects &amp; initiatives"
          title={<span id="initiatives-title">Programmes we run for the public good</span>}
          description="Three long-running initiatives where our members put professional expertise to work for Kenyan communities."
        />

        <ul className="mt-16 grid gap-6 lg:grid-cols-3">
          {initiatives.map((initiative, i) => (
            <li key={initiative.id}>
              <Reveal delay={i * 100} className="h-full">
                <a
                  href={initiative.href}
                  className="group flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-card transition-[border-color,transform] duration-500 hover:-translate-y-1 hover:border-foreground/25"
                >
                  <div className="overflow-hidden">
                    <img
                      src={initiative.image}
                      alt={`${initiative.title} initiative`}
                      loading="lazy"
                      className="aspect-16/10 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span
                      className={cn(
                        "text-[11px] font-semibold uppercase tracking-[0.16em]",
                        initiative.tone === "green" ? "text-sustain" : "text-primary",
                      )}
                    >
                      {initiative.eyebrow}
                    </span>
                    <h3 className="mt-4 font-display text-2xl font-semibold tracking-tight text-foreground">
                      {initiative.title}
                    </h3>
                    <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {initiative.description}
                    </p>
                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      {initiative.cta}
                      <ArrowUpRight
                        className={cn(
                          "h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
                          initiative.tone === "green" ? "text-sustain" : "text-primary",
                        )}
                      />
                    </span>
                  </div>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
