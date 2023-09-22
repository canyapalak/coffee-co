import React, { createContext, useState, ReactNode } from "react";
import { CartContextType, Product } from "../types";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // ADDING ITEMS TO CART BY ONE
  const addToCart = (productToAdd: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].qty += 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...productToAdd, qty: 1 }]);
    }
  };

  // REMOVING ITEMS FROM CART BY ONE
  const removeFromCart = (productToAdd: Product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === productToAdd.id
    );

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      const currentQty = updatedCart[existingProductIndex].qty;

      if (currentQty > 1) {
        updatedCart[existingProductIndex].qty -= 1;
      } else {
        updatedCart.splice(existingProductIndex, 1);
      }

      setCart(updatedCart);
    }
  };

  // REMOVING THE WHOLE ITEM FROM CART
  const deleteFromCart = (productToAdd: Product) => {
    const updatedCart = cart.map((item) => {
      if (item.id === productToAdd.id) {
        return { ...item, qty: 0 };
      }
      return item;
    });

    const filteredCart = updatedCart.filter((item) => item.qty > 0);
    setCart(filteredCart);
  };

  // CLEARING THE ENTIRE CART
  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, deleteFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
