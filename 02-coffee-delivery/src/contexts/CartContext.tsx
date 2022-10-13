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
  updateCartItem: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  updatePaymentType: (value: PaymentType) => void;
}

type PaymentType = 'credit' | 'debit' | 'cash';

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([]);
  const [paymentType, setPamentType] = useState<PaymentType | null>(null);

  function addToCart(coffee: Coffee) {
    if (cart.find(item => item.id === coffee.id)) {
      updateCartItem(coffee.id, coffee.quantity);
    } else {
      setCart(prev => [...prev, coffee]);
    }
  }

  function updateCartItem(id: number, quantity: number) {
    setCart(prev => {
      return prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });
    })
  }

  function removeCartItem(id: number) {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  function updatePaymentType(value: PaymentType) {
    setPamentType(value);
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      updateCartItem,
      removeCartItem,
      updatePaymentType
    }}>
      {children}
    </CartContext.Provider>
  );
}