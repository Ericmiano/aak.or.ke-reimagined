import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/site/Reveal";

const paths = [
  {
    title: "Become a member",
    body: "Join the chapter that matches your discipline and access CPD, advocacy and professional networks.",
    href: "https://members.aak.or.ke/register",
    cta: "Start application",
  },
  {
    title: "Validate a certificate",
    body: "Confirm that a practitioner's AAK membership certificate is genuine and current.",
    href: "https://members.aak.or.ke/validate",
    cta: "Check a certificate",
  },
  {
    title: "Find a professional",
    body: "Search the member directory for architects, surveyors, planners and engineers near you.",
    href: "https://members.aak.or.ke/directory",
    cta: "Open the directory",
  },
];

export function Membership() {
  return (
    <section
      id="membership"
      aria-labelledby="membership-title"
      className="bg-foreground py-24 text-background lg:py-32"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <Reveal className="max-w-3xl">
          <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-background/55">
            <span className="tabular-nums text-primary">07</span>
            <span className="h-px w-10 bg-background/25" aria-hidden="true" />
            <span>Membership</span>
          </div>
          <h2
            id="membership-title"
            className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight sm:text-4xl lg:text-5xl"
          >
            Practise with the standing of a recognised professional body.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-background/15 md:grid-cols-3">
          {paths.map((path, i) => (
            <div key={path.title} className="bg-foreground p-8 lg:p-10">
              <Reveal delay={i * 80}>
                <h3 className="font-display text-xl font-semibold">{path.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-background/65">{path.body}</p>
                <a
                  href={path.href}
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                >
                  {path.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Reveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
