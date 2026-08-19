import { ArrowRight } from "lucide-react";
import editorial from "@/assets/editorial.jpg";

export function Editorial() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={editorial}
        alt="Two models in deep pink and blush campaign styling"
        loading="lazy"
        width={1920}
        height={1008}
        className="h-[30rem] w-full object-cover object-center sm:h-[36rem] lg:h-[44rem]"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/70 via-charcoal/30 to-transparent" />

      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6">
          <div className="max-w-lg">
            <span className="label-eyebrow text-background/80">Featured collection</span>
            <h2 className="mt-4 font-display text-4xl leading-[0.95] font-light tracking-tight text-background sm:text-6xl lg:text-7xl">
              The Pink
              <span className="block italic">Edit</span>
            </h2>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-background/85 sm:text-base">
              A curated collection of statement pieces, soft textures and effortless essentials made
              for your aesthetic.
            </p>
            <a
              href="#trending"
              className="group mt-8 inline-flex items-center gap-2 bg-background px-8 py-4 text-[0.68rem] font-medium tracking-[0.26em] text-foreground uppercase transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Shop the edit
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
