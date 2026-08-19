import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  action,
  className,
}: {
  eyebrow?: string | undefined;
  title: string;
  subtitle?: string | undefined;
  align?: "center" | "left";
  action?: ReactNode | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-5 sm:flex-row sm:items-end",
        align === "center" ? "sm:flex-col sm:items-center sm:text-center" : "sm:justify-between",
        className,
      )}
    >
      <div className={cn("min-w-0", align === "center" && "max-w-xl")}>
        {eyebrow && (
          <span className="label-eyebrow inline-flex items-center gap-2 text-primary">
            <span className="h-px w-6 bg-primary" />
            {eyebrow}
          </span>
        )}
        <h2 className="mt-3 text-3xl leading-[1.05] font-light tracking-tight text-foreground sm:text-4xl lg:text-5xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {subtitle}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
