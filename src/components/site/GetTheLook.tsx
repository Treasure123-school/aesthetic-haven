import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { looks } from "@/lib/shop-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function GetTheLook() {
  const [active, setActive] = useState(looks[0]!.name);

  return (
    <section className="surface-blush">
      <div className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
        <SectionHeading
          eyebrow="Style inspiration"
          title="Get the look"
          subtitle="Six aesthetics, endlessly re-mixable. Tap a mood to shop the pieces behind it."
        />

        <div className="no-scrollbar mt-8 -mx-4 flex gap-2 overflow-x-auto px-4 sm:mx-0 sm:flex-wrap sm:justify-center sm:px-0">
          {looks.map((look) => (
            <button
              key={look.name}
              type="button"
              onClick={() => setActive(look.name)}
              className={cn(
                "label-eyebrow shrink-0 rounded-full border px-4 py-2.5 text-[0.58rem] transition-all duration-300",
                active === look.name
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-background/70 text-foreground/70 hover:border-primary/40 hover:text-primary",
              )}
            >
              {look.name}
            </button>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {looks.map((look, i) => (
            <Reveal
              key={look.name}
              as="article"
              delay={(i % 3) * 70}
              className={cn(
                "group relative overflow-hidden rounded-sm bg-cream transition-all duration-500",
                active === look.name ? "ring-1 ring-primary ring-offset-4 ring-offset-background" : "",
              )}
            >
              <button
                type="button"
                onClick={() => setActive(look.name)}
                className="block w-full text-left"
              >
                <div className="aspect-[4/5] w-full">
                  <img
                    src={look.image}
                    alt={`${look.name} aesthetic`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 sm:p-5">
                  <div className="min-w-0">
                    <h3 className="font-display text-lg font-light text-background sm:text-2xl">
                      {look.name}
                    </h3>
                    <p className="text-[0.65rem] text-background/75 sm:text-xs">
                      {look.items} pieces
                    </p>
                  </div>
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-background/90 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <ArrowUpRight className="h-4 w-4" strokeWidth={1.6} />
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
