import { useState } from "react";
import { Eye, Heart, Plus, Star } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { formatNaira, type Product } from "@/lib/shop-data";
import { useCart } from "@/components/site/cart-store";

const badgeStyles: Record<string, string> = {
  NEW: "bg-foreground text-background",
  BESTSELLER: "bg-background text-primary border border-primary/30",
  SALE: "bg-primary text-primary-foreground",
  LIMITED: "bg-gold text-charcoal",
};

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const { addToCart, toggleWishlist, wishlist } = useCart();
  const [pop, setPop] = useState(false);
  const liked = wishlist.includes(product.id);

  const discount = product.compareAt
    ? Math.round(((product.compareAt - product.price) / product.compareAt) * 100)
    : 0;

  return (
    <article className={cn("group flex flex-col", className)}>
      <div className="relative overflow-hidden rounded-sm bg-cream">
        <div className="aspect-[4/5] w-full">
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            width={900}
            height={1100}
            className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-[1.06] group-hover:opacity-0"
          />
          <img
            src={product.hoverImage}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full scale-105 object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-100 group-hover:opacity-100"
          />
        </div>

        <div className="pointer-events-none absolute top-3 left-3 flex flex-col items-start gap-1.5">
          {product.badge && (
            <span
              className={cn(
                "label-eyebrow rounded-full px-2.5 py-1 text-[0.55rem]",
                badgeStyles[product.badge],
              )}
            >
              {product.badge}
            </span>
          )}
          {discount > 0 && (
            <span className="label-eyebrow rounded-full bg-background/90 px-2.5 py-1 text-[0.55rem] text-primary">
              -{discount}%
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Add to wishlist"
            onClick={() => {
              const added = toggleWishlist(product.id);
              setPop(true);
              window.setTimeout(() => setPop(false), 360);
              toast(added ? "Saved to wishlist" : "Removed from wishlist", {
                description: product.name,
              });
            }}
            className={cn(
              "grid h-9 w-9 place-items-center rounded-full bg-background/90 shadow-soft backdrop-blur transition-colors hover:text-primary",
              liked && "text-primary",
            )}
          >
            <Heart
              className={cn("h-4 w-4", pop && "animate-pop")}
              strokeWidth={1.5}
              fill={liked ? "currentColor" : "none"}
            />
          </button>
          <button
            type="button"
            aria-label="Quick view"
            onClick={() => toast("Quick view", { description: product.name })}
            className="grid h-9 w-9 translate-y-1 place-items-center rounded-full bg-background/90 opacity-0 shadow-soft backdrop-blur transition-all duration-300 hover:text-primary group-hover:translate-y-0 group-hover:opacity-100"
          >
            <Eye className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        <div className="absolute inset-x-3 bottom-3 translate-y-3 opacity-0 transition-all duration-400 ease-out group-hover:translate-y-0 group-hover:opacity-100 max-sm:translate-y-0 max-sm:opacity-100">
          <button
            type="button"
            onClick={() => {
              addToCart(product.id);
              toast.success("Added to bag", {
                description: `${product.name} — ${formatNaira(product.price)}`,
              });
            }}
            className="flex w-full items-center justify-center gap-2 bg-foreground/95 py-3 text-[0.65rem] font-medium tracking-[0.22em] text-background uppercase backdrop-blur transition-colors hover:bg-primary"
          >
            <Plus className="h-3.5 w-3.5" strokeWidth={2} />
            Add to cart
          </button>
        </div>
      </div>

      <div className="flex flex-1 flex-col pt-3.5">
        <div className="flex items-center gap-1.5">
          <Star className="h-3.5 w-3.5 shrink-0 fill-gold text-gold" strokeWidth={0} />
          <span className="text-xs font-medium">{product.rating}</span>
          <span className="text-xs text-muted-foreground">({product.reviews})</span>
        </div>
        <h3 className="mt-1.5 text-sm leading-snug font-normal text-foreground">{product.name}</h3>
        <div className="mt-1.5 flex flex-wrap items-baseline gap-2">
          <span className="text-sm font-medium text-foreground">{formatNaira(product.price)}</span>
          {product.compareAt && (
            <span className="text-xs text-muted-foreground line-through">
              {formatNaira(product.compareAt)}
            </span>
          )}
        </div>
        {product.colors && (
          <div className="mt-2.5 flex items-center gap-1.5">
            {product.colors.map((color) => (
              <span
                key={color}
                className="h-3 w-3 rounded-full ring-1 ring-border ring-offset-2 ring-offset-background transition-transform hover:scale-110"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="flex flex-col">
      <div className="aspect-[4/5] w-full animate-pulse rounded-sm bg-muted" />
      <div className="mt-3.5 h-3 w-20 animate-pulse rounded-full bg-muted" />
      <div className="mt-2 h-3 w-3/4 animate-pulse rounded-full bg-muted" />
      <div className="mt-2 h-3 w-24 animate-pulse rounded-full bg-muted" />
    </div>
  );
}
