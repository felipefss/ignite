import { createContext, useContext, useState, ReactNode } from 'react';

export interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  quantity: number;
  defaultPriceId: string;
}

interface CartContext {
  products: Product[];
  addToCart: (item: Omit<Product, 'quantity'>) => void;
  removeFromCart: (id: string) => void;
  updateItemQuantity: (id: string, step: number) => void;
  toggleCartVisibility: () => void;
  isCartVisible: boolean;
}

interface CartProviderProps {
  children: ReactNode;
}

const CartContext = createContext({} as CartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [isCartVisible, setIsCartVisible] = useState(false);

  function addToCart(item: Omit<Product, 'quantity'>) {
    const index = products.findIndex((product) => product.id === item.id);

    if (index === -1) {
      setProducts((prev) => [...prev, { ...item, quantity: 1 }]);
    } else {
      updateItemQuantity(item.id, 1);
    }
  }

  function removeFromCart(id: string) {
    setProducts((prev) => {
      const newValue = prev.filter((item) => item.id !== id);

      if (newValue.length === 0) {
        setIsCartVisible(false);
      }

      return newValue;
    });
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

  function toggleCartVisibility() {
    setIsCartVisible((prev) => !prev);
  }

  return (
    <CartContext.Provider
      value={{
        products,
        addToCart,
        removeFromCart,
        updateItemQuantity,
        toggleCartVisibility,
        isCartVisible,
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
