import { media } from "@/data/site";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";

const spanClass: Record<string, string> = {
  wide: "sm:col-span-2",
  tall: "",
  regular: "",
};

const aspectClass: Record<string, string> = {
  wide: "aspect-16/9",
  tall: "aspect-4/3",
  regular: "aspect-4/3",
};

export function MediaGrid() {
  return (
    <section
      id="media"
      aria-labelledby="media-title"
      className="bg-secondary py-24 lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <SectionHeading
          index="05"
          eyebrow="Media & projects"
          title={<span id="media-title">Work, events and award-winning projects</span>}
          description="A rolling record of what members are building, the sites we visit and the projects recognised at the Awards of Excellence."
        />

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {media.map((item, i) => (
            <Reveal
              key={item.id}
              delay={(i % 3) * 80}
              className={spanClass[item.span] ?? ""}
            >
              <a
                href={item.href}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-card"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className={`w-full object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105 ${aspectClass[item.span] ?? "aspect-4/3"}`}
                  />
                </div>
                <div className="flex flex-1 flex-col justify-end gap-2 px-6 py-6">
                  <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-primary">
                    {item.category}
                  </span>
                  <h3 className="font-display text-lg font-semibold leading-snug text-foreground">
                    {item.title}
                  </h3>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
