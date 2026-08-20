import { ArrowUpRight } from "lucide-react";
import { publications } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-title"
      className="bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          index="06"
          eyebrow="Publications"
          title={<span id="publications-title">Research, policy and the record</span>}
          description="The association's submissions, reports and magazines — public documents that shape how Kenya builds."
        />

        <ul className="mt-14 border-t border-border">
          {publications.map((doc, i) => (
            <li key={doc.title}>
              <Reveal delay={i * 60}>
                <a
                  href={doc.href}
                  className="group flex flex-col gap-2 border-b border-border py-7 transition-colors hover:bg-secondary/60 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
                >
                  <div className="flex items-start gap-6 sm:items-center">
                    <span className="pt-1 font-display text-xs tabular-nums text-muted-foreground sm:pt-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-display text-lg font-semibold leading-snug text-foreground sm:text-xl">
                      {doc.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4 pl-12 sm:pl-0">
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {doc.meta}
                    </span>
                    <ArrowUpRight className="h-5 w-5 shrink-0 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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
