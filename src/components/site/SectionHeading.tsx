import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  action?: ReactNode;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
  action,
}: SectionHeadingProps) {
  return (
    <Reveal className={cn("flex flex-col gap-8 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">
          <span className="text-primary tabular-nums">{index}</span>
          <span className="h-px w-10 bg-border" aria-hidden="true" />
          <span>{eyebrow}</span>
        </div>
        <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {description ? (
          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            {description}
          </p>
        ) : null}
      </div>
      {action ? <div className="shrink-0">{action}</div> : null}
    </Reveal>
  );
}
