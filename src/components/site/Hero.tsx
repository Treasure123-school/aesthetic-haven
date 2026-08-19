import { ArrowRight, Sparkles, Star } from "lucide-react";
import heroImage from "@/assets/hero.jpg";
import bagImage from "@/assets/p-bag.jpg";
import { formatNaira } from "@/lib/shop-data";

export function Hero() {
  return (
    <section className="surface-blush relative overflow-hidden">
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute right-1/3 bottom-0 h-64 w-64 rounded-full bg-secondary/50 blur-3xl" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:py-24">
        <div className="relative z-10 max-w-xl">
          <span className="label-eyebrow inline-flex items-center gap-2 rounded-full border border-primary/25 bg-background/70 px-4 py-2 text-primary backdrop-blur">
            <Sparkles className="h-3 w-3" strokeWidth={1.8} />
            The New Season
          </span>

          <h1 className="mt-6 font-display text-[2.6rem] leading-[0.98] font-light tracking-tight text-foreground sm:text-6xl lg:text-[4.6rem]">
            Your style.
            <br />
            Your aesthetic.
            <br />
            <span className="text-primary italic">Your moment.</span>
          </h1>

          <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground sm:text-base">
            Curated fashion, accessories and aesthetic essentials designed to make every look feel
            effortlessly yours.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#trending"
              className="group inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-[0.68rem] font-medium tracking-[0.26em] text-primary-foreground uppercase shadow-card transition-all duration-300 hover:bg-primary-soft hover:shadow-lift"
            >
              Shop now
              <ArrowRight
                className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
                strokeWidth={1.8}
              />
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center border border-foreground/20 px-8 py-4 text-[0.68rem] font-medium tracking-[0.26em] text-foreground uppercase transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Explore collection
            </a>
          </div>

          <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-border/70 pt-6">
            {[
              ["10K+", "Happy customers"],
              ["4.9/5", "Average rating"],
              ["48H", "Lagos delivery"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-xl font-light text-foreground">{value}</dt>
                <dd className="label-eyebrow mt-1 text-[0.55rem] text-muted-foreground">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-t-[10rem] rounded-b-sm shadow-lift">
            <img
              src={heroImage}
              alt="Model wearing a blush satin set with a structured handbag"
              width={1408}
              height={1600}
              className="h-[26rem] w-full object-cover object-top sm:h-[34rem] lg:h-[40rem]"
            />
          </div>

          <div className="absolute -top-3 right-3 rotate-3 rounded-full bg-primary px-4 py-3 text-center text-primary-foreground shadow-card sm:right-6">
            <p className="font-display text-lg leading-none font-light">15%</p>
            <p className="label-eyebrow mt-1 text-[0.5rem]">Off first order</p>
          </div>

          <div className="absolute -bottom-4 -left-2 w-[15rem] rounded-sm border border-border/70 bg-background/95 p-3 shadow-lift backdrop-blur sm:left-4 sm:w-[17rem]">
            <div className="flex items-center gap-3">
              <img
                src={bagImage}
                alt="Satin Bow Shoulder Bag"
                loading="lazy"
                className="h-16 w-14 shrink-0 rounded-sm object-cover"
              />
              <div className="min-w-0">
                <p className="label-eyebrow text-[0.5rem] text-primary">Trending now</p>
                <p className="mt-1 truncate text-xs font-medium">Satin Bow Shoulder Bag</p>
                <div className="mt-1 flex items-center gap-2">
                  <span className="text-xs font-medium">{formatNaira(42500)}</span>
                  <span className="flex items-center gap-0.5 text-[0.65rem] text-muted-foreground">
                    <Star className="h-3 w-3 fill-gold text-gold" strokeWidth={0} />
                    4.9
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
