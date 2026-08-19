import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react";

type CartContextValue = {
  count: number;
  wishlist: string[];
  wishlistCount: number;
  addToCart: (id: string) => void;
  toggleWishlist: (id: string) => boolean;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0);
  const [wishlist, setWishlist] = useState<string[]>([]);

  const addToCart = useCallback(() => setCount((c) => c + 1), []);

  const toggleWishlist = useCallback(
    (id: string) => {
      const added = !wishlist.includes(id);
      setWishlist((list) => (added ? [...list, id] : list.filter((item) => item !== id)));
      return added;
    },
    [wishlist],
  );

  const value = useMemo(
    () => ({
      count,
      wishlist,
      wishlistCount: wishlist.length,
      addToCart,
      toggleWishlist,
    }),
    [count, wishlist, addToCart, toggleWishlist],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
