import { Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/shop-data";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";

const stats = [
  ["4.9/5", "Average rating"],
  ["10K+", "Happy customers"],
  ["98%", "Would recommend us"],
];

export function Testimonials() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24">
      <SectionHeading
        eyebrow="Social proof"
        title="Loved by you"
        subtitle="Real reviews from the Meerah community across Nigeria."
      />

      <div className="mt-10 grid gap-4 sm:gap-6 lg:mt-14 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal
            key={t.name}
            as="article"
            delay={i * 90}
            className="relative flex h-full flex-col rounded-sm border border-border/70 bg-card p-6 shadow-soft transition-shadow duration-500 hover:shadow-card"
          >
            <Quote className="h-6 w-6 text-primary/25" strokeWidth={1.2} />
            <div className="mt-4 flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, s) => (
                <Star
                  key={s}
                  className="h-3.5 w-3.5 fill-gold text-gold"
                  strokeWidth={0}
                  style={{ opacity: s + 1 <= Math.round(t.rating) ? 1 : 0.25 }}
                />
              ))}
              <span className="ml-1 text-xs text-muted-foreground">{t.rating.toFixed(1)}</span>
            </div>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">"{t.review}"</p>
            <div className="mt-6 flex items-center gap-3 border-t border-border/70 pt-5">
              <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-secondary text-xs font-medium text-secondary-foreground">
                {t.initials}
              </span>
              <div className="min-w-0">
                <p className="truncate text-sm font-medium">{t.name}</p>
                <p className="truncate text-[0.7rem] text-muted-foreground">
                  {t.product} · {t.date}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border/70 pt-8 text-center lg:mt-14">
        {stats.map(([value, label]) => (
          <div key={label}>
            <p className="font-display text-2xl font-light text-primary sm:text-4xl">{value}</p>
            <p className="label-eyebrow mt-2 text-[0.5rem] text-muted-foreground sm:text-[0.6rem]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
