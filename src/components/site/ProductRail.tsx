import { useEffect, useState, type ReactNode } from "react";
import type { Product } from "@/lib/shop-data";
import { ProductCard, ProductCardSkeleton } from "@/components/site/ProductCard";
import { SectionHeading } from "@/components/site/SectionHeading";
import { Reveal } from "@/components/site/Reveal";
import { cn } from "@/lib/utils";

type Props = {
  id?: string | undefined;
  eyebrow?: string | undefined;
  title: string;
  subtitle?: string | undefined;
  products: Product[];
  action?: ReactNode | undefined;
  variant?: "grid" | "scroll";
  className?: string | undefined;
};

export function ProductRail({
  id,
  eyebrow,
  title,
  subtitle,
  products,
  action,
  variant = "grid",
  className,
}: Props) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const t = window.setTimeout(() => setReady(true), 450);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <section id={id} className={cn("mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:py-24", className)}>
      <SectionHeading
        eyebrow={eyebrow}
        title={title}
        subtitle={subtitle}
        align="left"
        action={action}
      />

      {variant === "scroll" ? (
        <div className="no-scrollbar -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:mx-0 sm:px-0 lg:mt-14 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible">
          {(ready ? products : products.slice(0, 4)).map((product, i) =>
            ready ? (
              <Reveal
                key={product.id}
                delay={(i % 4) * 70}
                className="w-[62%] shrink-0 snap-start sm:w-[40%] lg:w-auto"
              >
                <ProductCard product={product} />
              </Reveal>
            ) : (
              <div key={product.id} className="w-[62%] shrink-0 sm:w-[40%] lg:w-auto">
                <ProductCardSkeleton />
              </div>
            ),
          )}
        </div>
      ) : (
        <div className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-6 lg:mt-14 lg:grid-cols-4">
          {products.map((product, i) =>
            ready ? (
              <Reveal key={product.id} delay={(i % 4) * 70}>
                <ProductCard product={product} />
              </Reveal>
            ) : (
              <ProductCardSkeleton key={product.id} />
            ),
          )}
        </div>
      )}
    </section>
  );
}
