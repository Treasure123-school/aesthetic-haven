import { ArrowUpRight } from "lucide-react";
import { categories } from "@/lib/shop-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

export function Categories() {
  return (
    <section id="categories" className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Categories"
        title="Shop your vibe"
        subtitle="Find pieces that match your mood, style and personality."
      />

      <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:mt-14 lg:grid-cols-4">
        {categories.map((cat, i) => (
          <Reveal
            key={cat.name}
            as="article"
            delay={(i % 4) * 70}
            className={cn("group relative overflow-hidden rounded-sm bg-cream", cat.span)}
          >
            <a href="#trending" className="block h-full">
              <div
                className={cn(
                  "w-full",
                  cat.span.includes("row-span-2")
                    ? "aspect-[4/5] lg:h-full lg:aspect-auto"
                    : cat.span.includes("col-span-2")
                      ? "aspect-[4/5] lg:aspect-[2/1]"
                      : "aspect-[4/5]",
                )}
              >
                <img
                  src={cat.image}
                  alt={cat.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/10 to-transparent transition-opacity duration-500 group-hover:from-charcoal/85" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="font-display text-lg leading-tight font-light text-background sm:text-2xl">
                  {cat.name}
                </h3>
                <p className="mt-1 text-[0.7rem] text-background/75 sm:text-xs">{cat.desc}</p>
                <span className="mt-3 inline-flex translate-y-1 items-center gap-1.5 text-[0.6rem] tracking-[0.24em] text-background uppercase opacity-0 transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
                  Explore
                  <ArrowUpRight className="h-3.5 w-3.5" strokeWidth={1.6} />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
