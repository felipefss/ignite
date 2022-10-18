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

export interface DeliveryAddress {
  cep: string;
  rua: string;
  numero: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface ICartContext {
  cart: Coffee[];
  deliveryDetails: DeliveryAddress;
  paymentType: PaymentType | null;
  addToCart: (coffee: Coffee) => void;
  updateCartItem: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  updatePaymentType: (value: PaymentType) => void;
  updateDeliveryAddress: (key: keyof DeliveryAddress, value: string) => void;
  clearCart: () => void;
  clearCheckout: () => void;
}

const emptyDeliveryDetails = {
  cep: '',
  rua: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  uf: ''
};

type PaymentType = 'credit' | 'debit' | 'cash';

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>(() => {
    const storedCart = localStorage.getItem('@coffee-delivery:cart-1.0.0');

    if (storedCart) {
      return JSON.parse(storedCart);
    }

    return [];
  });
  const [paymentType, setPaymentType] = useState<PaymentType | null>(null);
  const [deliveryDetails, setDeliveryDetails] = useState(emptyDeliveryDetails);

  function addToCart(coffee: Coffee) {
    if (cart.find(item => item.id === coffee.id)) {
      updateCartItem(coffee.id, coffee.quantity);
    } else {
      setCart(prev => {
        const newState = [...prev, coffee];

        localStorage.setItem('@coffee-delivery:cart-1.0.0', JSON.stringify(newState));

        return newState;
      });
    }
  }

  function updateCartItem(id: number, quantity: number) {
    setCart(prev => {
      const newState = prev.map(item => {
        if (item.id === id) {
          return {
            ...item,
            quantity: item.quantity + quantity
          };
        }
        return item;
      });

      localStorage.setItem('@coffee-delivery:cart-1.0.0', JSON.stringify(newState));

      return newState;
    })
  }

  function removeCartItem(id: number) {
    setCart(prev => {
      const newState = prev.filter(item => item.id !== id);

      localStorage.setItem('@coffee-delivery:cart-1.0.0', JSON.stringify(newState));

      return newState;
    });
  }

  function updatePaymentType(value: PaymentType) {
    setPaymentType(value);
  }

  function updateDeliveryAddress(key: keyof DeliveryAddress, value: string) {
    setDeliveryDetails(prev => ({ ...prev, [key]: value }));
  }

  function clearCheckout() {
    setDeliveryDetails(emptyDeliveryDetails);
    setPaymentType(null);
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider value={{
      cart,
      deliveryDetails,
      paymentType,
      addToCart,
      updateCartItem,
      removeCartItem,
      updatePaymentType,
      updateDeliveryAddress,
      clearCart,
      clearCheckout
    }}>
      {children}
    </CartContext.Provider>
  );
}