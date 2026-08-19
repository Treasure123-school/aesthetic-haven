import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import dress from "@/assets/p-dress.jpg";
import { formatNaira } from "@/lib/shop-data";

const TARGET_MS = 1000 * 60 * 60 * 34 + 1000 * 60 * 12;

function useCountdown() {
  const [remaining, setRemaining] = useState(TARGET_MS);

  useEffect(() => {
    const deadline = Date.now() + TARGET_MS;
    const tick = () => setRemaining(Math.max(0, deadline - Date.now()));
    tick();
    const id = window.setInterval(tick, 1000);
    return () => window.clearInterval(id);
  }, []);

  const total = Math.floor(remaining / 1000);
  return {
    days: Math.floor(total / 86400),
    hours: Math.floor((total % 86400) / 3600),
    minutes: Math.floor((total % 3600) / 60),
    seconds: total % 60,
  };
}

export function LimitedDrop() {
  const { days, hours, minutes, seconds } = useCountdown();
  const units = [
    ["Days", days],
    ["Hrs", hours],
    ["Min", minutes],
    ["Sec", seconds],
  ] as const;

  return (
    <section className="bg-foreground text-background">
      <div className="mx-auto grid max-w-[1400px] items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div className="relative order-2 lg:order-1">
          <div className="overflow-hidden rounded-sm">
            <img
              src={dress}
              alt="Rosé satin mini dress from the limited drop"
              loading="lazy"
              width={900}
              height={1100}
              className="h-[22rem] w-full object-cover sm:h-[30rem]"
            />
          </div>
          <span className="label-eyebrow absolute top-4 left-4 rounded-full bg-primary px-3 py-1.5 text-[0.55rem] text-primary-foreground">
            Only 32 left
          </span>
        </div>

        <div className="order-1 lg:order-2">
          <span className="label-eyebrow inline-flex items-center gap-2 text-primary-soft">
            <span className="h-px w-6 bg-primary-soft" />
            Limited drop
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[0.98] font-light tracking-tight sm:text-5xl lg:text-6xl">
            Not everything
            <span className="block italic">stays forever.</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-background/70 sm:text-base">
            Discover our limited pieces before they leave the collection. The Rosé Satin Mini Dress
            is part of a 120-piece run only.
          </p>

          <div className="mt-8 grid max-w-sm grid-cols-4 gap-2">
            {units.map(([label, value]) => (
              <div
                key={label}
                className="rounded-sm border border-background/15 bg-background/5 px-2 py-3 text-center"
              >
                <p className="font-display text-2xl leading-none font-light tabular-nums">
                  {String(value).padStart(2, "0")}
                </p>
                <p className="label-eyebrow mt-2 text-[0.5rem] text-background/60">{label}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
            <div className="flex items-baseline gap-3">
              <span className="font-display text-2xl font-light">{formatNaira(58000)}</span>
              <span className="text-sm text-background/50 line-through">{formatNaira(72000)}</span>
              <span className="label-eyebrow rounded-full bg-primary px-2.5 py-1 text-[0.55rem]">
                -19%
              </span>
            </div>
          </div>

          <a
            href="#trending"
            className="group mt-8 inline-flex items-center gap-2 bg-primary px-8 py-4 text-[0.68rem] font-medium tracking-[0.26em] text-primary-foreground uppercase transition-colors duration-300 hover:bg-primary-soft"
          >
            Shop the drop
            <ArrowRight
              className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={1.8}
            />
          </a>
        </div>
      </div>
    </section>
  );
}
