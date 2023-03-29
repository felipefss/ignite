import { createContext, useContext, useState, type ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: string;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart: (item: Product) => void;
  removeFromCart: (id: string) => void;
  updateItemQuantity: (id: string, step: number) => void;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);

  function addToCart(item: Product) {
    setProducts((prev) => [...prev, item]);
  }

  function removeFromCart(id: string) {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  }

  function updateItemQuantity(id: string, step: number) {
    setProducts((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const quantity = item.quantity + step;

          return {
            ...item,
            quantity,
          };
        }

        return item;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        updateItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('No CartContext provided.');
  }

  return context;
}
