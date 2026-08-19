import { PackageCheck, ShieldCheck, Sparkles, Truck } from "lucide-react";

const items = [
  { icon: Truck, title: "Free Shipping", desc: "On selected orders" },
  { icon: ShieldCheck, title: "Secure Checkout", desc: "Safe & protected payments" },
  { icon: Sparkles, title: "Curated Collections", desc: "Handpicked aesthetic pieces" },
  { icon: PackageCheck, title: "Easy Returns", desc: "Simple shopping experience" },
];

export function ValueStrip() {
  return (
    <section className="border-y border-border/70 bg-background">
      <div className="mx-auto grid max-w-[1400px] grid-cols-2 gap-x-4 gap-y-7 px-4 py-8 sm:px-6 lg:grid-cols-4 lg:py-10">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex min-w-0 items-start gap-3">
            <Icon className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.3} />
            <div className="min-w-0">
              <p className="label-eyebrow text-[0.6rem] text-foreground">{title}</p>
              <p className="mt-1 text-xs text-muted-foreground">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
