import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-architecture.jpg";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[92vh] items-end overflow-hidden bg-foreground">
      <img
        src={heroImage}
        alt="Golden-hour view of a modern Nairobi building facade with a deep concrete grid"
        width={1920}
        height={1280}
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover opacity-80 hero-zoom"
      />
      <div
        className="absolute inset-0 bg-linear-to-t from-foreground via-foreground/60 to-foreground/20"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-6 pb-20 pt-36 lg:px-12 lg:pb-28">
        <p className="hero-item text-xs font-medium uppercase tracking-[0.28em] text-primary-foreground/70">
          Since 1967 · Nairobi, Kenya
        </p>
        <h1 className="hero-item hero-delay-1 mt-7 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-primary-foreground sm:text-6xl lg:text-7xl">
          Shaping Kenya&rsquo;s built environment with
          <span className="text-primary"> professional integrity</span>.
        </h1>
        <p className="hero-item hero-delay-2 mt-7 max-w-xl text-lg leading-relaxed text-primary-foreground/75">
          The Architectural Association of Kenya unites eight professional chapters advancing
          safe, sustainable and well-planned development across the country.
        </p>
        <div className="hero-item hero-delay-3 mt-10">
          <a
            href="#events"
            className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
          >
            See what&rsquo;s happening now
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>

        <dl className="hero-item hero-delay-4 mt-16 grid max-w-3xl grid-cols-2 gap-x-8 gap-y-8 border-t border-primary-foreground/15 pt-8 sm:grid-cols-4">
          {[
            { k: "1967", v: "Founded" },
            { k: "8", v: "Professional chapters" },
            { k: "10,000+", v: "Members & students" },
            { k: "47", v: "Counties reached" },
          ].map((stat) => (
            <div key={stat.v}>
              <dt className="sr-only">{stat.v}</dt>
              <dd>
                <span className="block font-display text-2xl font-semibold text-primary-foreground sm:text-3xl">
                  {stat.k}
                </span>
                <span className="mt-1 block text-xs uppercase tracking-[0.16em] text-primary-foreground/55">
                  {stat.v}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
