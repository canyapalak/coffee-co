export interface Product {
  id: number;
  name: string;
  gr: number;
  img: string;
  price: number;
  int: number;
  text: string;
  qty: number;
}

export interface CartProducts {
  cart: Product[];
}

export interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
}
