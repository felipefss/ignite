import { createContext, ReactNode, useState } from "react";

interface Coffee {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  cart: Coffee[];
  addToCart: (coffee: Coffee) => void;
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([]);

  function addToCart(coffee: Coffee) {
    setCart(prev => [...prev, coffee]);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart
    }}>
      {children}
    </CartContext.Provider>
  );
}