import { toast } from "sonner";

export function PromoBanner() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-6 sm:px-6 lg:py-10">
      <div className="surface-pink relative overflow-hidden rounded-sm px-6 py-12 text-center text-primary-foreground sm:px-12 sm:py-16">
        <div className="pointer-events-none absolute -top-16 -right-10 h-56 w-56 rounded-full bg-background/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -left-10 h-56 w-56 rounded-full bg-background/10 blur-2xl" />
        <div className="relative mx-auto max-w-2xl">
          <span className="label-eyebrow text-primary-foreground/80">Welcome offer</span>
          <h2 className="mt-4 font-display text-3xl leading-tight font-light sm:text-5xl">
            Your cart just got cuter
          </h2>
          <p className="mt-4 text-sm text-primary-foreground/85 sm:text-base">
            Get 15% off your first order — plus early access to every new drop.
          </p>
          <button
            type="button"
            onClick={() =>
              toast.success("Offer unlocked", { description: "Use code MEERAH15 at checkout." })
            }
            className="mt-8 bg-background px-8 py-4 text-[0.68rem] font-medium tracking-[0.26em] text-primary uppercase transition-transform duration-300 hover:-translate-y-0.5"
          >
            Claim your offer
          </button>
        </div>
      </div>
    </section>
  );
}
