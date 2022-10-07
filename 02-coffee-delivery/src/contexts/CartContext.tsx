import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";

const BASE_URL = 'http://localhost:3000/coffees';

export interface Coffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

interface CartProviderProps {
  children: ReactNode;
}

interface ICartContext {
  coffees: Coffee[];
}

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [coffees, setCoffees] = useState<Coffee[]>([]);

  useEffect(() => {
    axios.get<Coffee[]>(BASE_URL).then(({ data }) => {
      setCoffees(data);
    });
  }, []);

  return (
    <CartContext.Provider value={{
      coffees
    }}>
      {children}
    </CartContext.Provider>
  );
}