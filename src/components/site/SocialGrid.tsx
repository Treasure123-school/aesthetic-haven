import { Heart, Instagram, MessageCircle } from "lucide-react";
import { socialGrid } from "@/lib/shop-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

export function SocialGrid() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Community"
        title="Follow the aesthetic"
        subtitle="See how our community styles it."
        align="left"
        action={
          <a
            href="#top"
            className="inline-flex items-center gap-2 border border-foreground/20 px-6 py-3.5 text-[0.65rem] font-medium tracking-[0.24em] uppercase transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <Instagram className="h-4 w-4" strokeWidth={1.4} />
            @meerahaesthetics
          </a>
        }
      />

      <div className="mt-10 grid grid-cols-2 gap-2 sm:gap-3 lg:mt-14 lg:grid-cols-4">
        {socialGrid.map((image, i) => (
          <Reveal key={i} delay={(i % 4) * 60} className="group relative overflow-hidden rounded-sm">
            <div className="aspect-square w-full">
              <img
                src={image}
                alt={`Community styling post ${i + 1}`}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center gap-5 bg-charcoal/55 opacity-0 transition-opacity duration-400 group-hover:opacity-100">
              <span className="flex items-center gap-1.5 text-sm text-background">
                <Heart className="h-4 w-4 fill-background" strokeWidth={0} />
                {320 + i * 47}
              </span>
              <span className="flex items-center gap-1.5 text-sm text-background">
                <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
                {12 + i * 3}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
