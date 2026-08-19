import { chapters } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

export function Chapters() {
  return (
    <section
      id="chapters"
      aria-labelledby="chapters-title"
      className="bg-background py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          index="04"
          eyebrow="The association"
          title={<span id="chapters-title">Eight professional chapters, one association</span>}
          description="Experts across the built and natural environment disciplines, united behind technical excellence and sustainable development in Kenya."
        />

        <ul className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {chapters.map((chapter, i) => (
            <li key={chapter.name} className="bg-card">
              <Reveal delay={(i % 4) * 70}>
                <a href={chapter.href} className="group block">
                  <div className="overflow-hidden">
                    <img
                      src={chapter.image}
                      alt={`${chapter.name} chapter of the Architectural Association of Kenya`}
                      loading="lazy"
                      className="aspect-4/3 w-full object-cover grayscale transition-[transform,filter] duration-[1200ms] ease-out group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-3 px-6 py-5">
                    <h3 className="font-display text-base font-semibold leading-tight text-foreground">
                      {chapter.name}
                    </h3>
                    <span className="text-[11px] uppercase tracking-[0.14em] text-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      Explore
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
