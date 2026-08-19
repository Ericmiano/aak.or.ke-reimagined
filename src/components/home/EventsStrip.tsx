import { ArrowUpRight, CalendarDays, MapPin } from "lucide-react";
import { events } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function EventsStrip() {
  return (
    <section id="events" aria-labelledby="events-title" className="bg-foreground py-20 lg:py-24">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-background/50">
              <span className="text-primary tabular-nums">01</span>
              <span className="h-px w-10 bg-background/20" aria-hidden="true" />
              <span>Ongoing &amp; upcoming</span>
            </div>
            <h2
              id="events-title"
              className="mt-5 font-display text-3xl font-semibold tracking-tight text-background sm:text-4xl"
            >
              What&rsquo;s happening at AAK
            </h2>
          </div>
          <a
            href="https://members.aak.or.ke/"
            className="link-underline self-start text-sm font-medium text-background/70 md:self-auto"
          >
            All events
          </a>
        </Reveal>
      </div>

      <div className="mt-12 overflow-x-auto pb-4 no-scrollbar">
        <ul className="mx-auto flex w-max max-w-none gap-5 px-6 lg:px-12">
          {events.map((event, i) => (
            <li key={event.id} className="w-[min(84vw,26rem)]">
              <Reveal delay={i * 80} className="h-full">
                <a
                  href={event.href}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-background/12 bg-background/5 p-7 transition-colors duration-300 hover:border-primary/60 hover:bg-background/10"
                >
                  <div>
                    <div className="flex items-center gap-3">
                      <span
                        className={cn(
                          "inline-flex items-center gap-2 rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em]",
                          event.status === "ongoing"
                            ? "bg-primary/15 text-primary"
                            : "bg-background/10 text-background/70",
                        )}
                      >
                        {event.status === "ongoing" ? (
                          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-primary" />
                        ) : null}
                        {event.status === "ongoing" ? "Ongoing" : "Upcoming"}
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.14em] text-background/45">
                        {event.kicker}
                      </span>
                    </div>
                    <h3 className="mt-6 font-display text-xl font-semibold leading-snug text-background">
                      {event.title}
                    </h3>
                    <div className="mt-5 space-y-2 text-sm text-background/60">
                      <p className="flex items-center gap-2">
                        <CalendarDays className="h-4 w-4 text-primary" aria-hidden="true" />
                        <time dateTime={event.isoDate}>{event.date}</time>
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" aria-hidden="true" />
                        {event.location}
                      </p>
                    </div>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-background">
                    {event.cta}
                    <ArrowUpRight className="h-4 w-4 text-primary transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
