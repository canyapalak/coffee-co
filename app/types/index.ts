export interface Product {
  id: number;
  name: {
    en: string;
    de: string;
    tr: string;
  };
  gr: number;
  img: string;
  price: number;
  int: number;
  text: {
    en: string;
    de: string;
    tr: string;
  };
  qty: number;
}

export interface CartProducts {
  cart: Product[];
}
export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  deleteFromCart: (product: Product) => void;
  clearCart: () => void;
}

export type Language = "en" | "de" | "tr";
