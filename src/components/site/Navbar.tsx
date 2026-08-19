import { useEffect, useState } from "react";
import { Heart, Menu, Search, ShoppingBag, User, X } from "lucide-react";
import logo from "@/assets/meerah-logo.png.asset.json";
import { cn } from "@/lib/utils";
import { useCart } from "@/components/site/cart-store";

const links = [
  "Home",
  "Shop",
  "New Arrivals",
  "Fashion",
  "Accessories",
  "Beauty & Lifestyle",
  "Sale",
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count, wishlistCount } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/60 backdrop-blur-xl transition-all duration-300",
        scrolled ? "bg-background/92 shadow-soft" : "bg-background/70",
      )}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6 lg:py-4">
        <button
          type="button"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="grid h-10 w-10 shrink-0 place-items-center rounded-full text-foreground transition-colors hover:bg-accent lg:hidden"
        >
          <Menu className="h-5 w-5" strokeWidth={1.4} />
        </button>

        <a href="#top" className="flex min-w-0 items-center justify-center lg:justify-start">
          <img
            src={logo.url}
            alt="Meerah Aesthetics"
            width={150}
            height={44}
            className="h-9 w-auto object-contain sm:h-11"
          />
        </a>

        <nav className="hidden min-w-0 items-center justify-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href="#top"
              className={cn(
                "label-eyebrow relative py-2 whitespace-nowrap text-foreground/80 transition-colors hover:text-primary",
                "after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                link === "Sale" && "text-primary",
              )}
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-0.5 sm:gap-1">
          <button
            type="button"
            aria-label="Search"
            onClick={() => setSearchOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent hover:text-primary"
          >
            <Search className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.4} />
          </button>
          <button
            type="button"
            aria-label="Wishlist"
            className="relative hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent hover:text-primary sm:grid"
          >
            <Heart className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.4} />
            {wishlistCount > 0 && <Bubble value={wishlistCount} />}
          </button>
          <button
            type="button"
            aria-label="Cart"
            className="relative grid h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent hover:text-primary"
          >
            <ShoppingBag className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.4} />
            {count > 0 && <Bubble value={count} />}
          </button>
          <button
            type="button"
            aria-label="Account"
            className="hidden h-10 w-10 place-items-center rounded-full transition-colors hover:bg-accent hover:text-primary lg:grid"
          >
            <User className="h-[1.15rem] w-[1.15rem]" strokeWidth={1.4} />
          </button>
        </div>
      </div>

      {searchOpen && (
        <div className="border-t border-border/60 bg-background/95 px-4 py-3 sm:px-6">
          <div className="mx-auto flex max-w-2xl items-center gap-3 border-b border-border pb-2">
            <Search className="h-4 w-4 shrink-0 text-muted-foreground" strokeWidth={1.4} />
            <input
              autoFocus
              placeholder="Search bags, jewelry, beauty…"
              className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="button"
              onClick={() => setSearchOpen(false)}
              aria-label="Close search"
              className="text-muted-foreground transition-colors hover:text-primary"
            >
              <X className="h-4 w-4" strokeWidth={1.4} />
            </button>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <div
        className={cn(
          "fixed inset-0 z-50 lg:hidden",
          open ? "pointer-events-auto" : "pointer-events-none",
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            "absolute inset-0 bg-charcoal/40 transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0",
          )}
        />
        <div
          className={cn(
            "absolute inset-y-0 left-0 flex w-[84%] max-w-sm flex-col bg-background transition-transform duration-400 ease-out",
            open ? "translate-x-0" : "-translate-x-full",
          )}
        >
          <div className="flex items-center justify-between border-b border-border px-5 py-4">
            <img src={logo.url} alt="Meerah Aesthetics" className="h-9 w-auto object-contain" />
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full hover:bg-accent"
            >
              <X className="h-5 w-5" strokeWidth={1.4} />
            </button>
          </div>
          <nav className="flex-1 overflow-y-auto px-5 py-6">
            {links.map((link) => (
              <a
                key={link}
                href="#top"
                onClick={() => setOpen(false)}
                className="block border-b border-border/60 py-4 font-display text-xl font-light tracking-tight text-foreground"
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="surface-blush px-5 py-6">
            <p className="label-eyebrow text-primary">Members get more</p>
            <p className="mt-2 font-display text-lg font-light">15% off your first order</p>
            <button className="mt-4 w-full bg-primary py-3 text-xs font-medium tracking-[0.2em] text-primary-foreground uppercase">
              Create account
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function Bubble({ value }: { value: number }) {
  return (
    <span className="absolute top-1 right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[0.6rem] leading-none font-medium text-primary-foreground">
      {value}
    </span>
  );
}
