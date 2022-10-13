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
  addToCart: (coffee: Coffee) => void;
  updateCartItem: (id: number, quantity: number) => void;
  removeCartItem: (id: number) => void;
  updatePaymentType: (value: PaymentType) => void;
  updateDeliveryAddress: (key: keyof DeliveryAddress, value: string) => void;
}

type PaymentType = 'credit' | 'debit' | 'cash';

export const CartContext = createContext({} as ICartContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState<Coffee[]>([]);
  const [paymentType, setPamentType] = useState<PaymentType | null>(null);
  const [deliveryDetails, setDeliveryDetails] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: ''
  });

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

  function updateDeliveryAddress(key: keyof DeliveryAddress, value: string) {
    setDeliveryDetails(prev => ({ ...prev, [key]: value }));
  }

  return (
    <CartContext.Provider value={{
      cart,
      deliveryDetails,
      addToCart,
      updateCartItem,
      removeCartItem,
      updatePaymentType,
      updateDeliveryAddress
    }}>
      {children}
    </CartContext.Provider>
  );
}