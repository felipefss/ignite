import { createContext, ReactNode, useContext, useState } from 'react';
import { toast } from 'react-toastify';
import { api } from '../services/api';
import { Product, Stock } from '../types';

interface CartProviderProps {
  children: ReactNode;
}

interface UpdateProductAmount {
  productId: number;
  amount: number;
}

interface CartContextData {
  cart: Product[];
  addProduct: (productId: number) => Promise<void>;
  removeProduct: (productId: number) => void;
  updateProductAmount: ({ productId, amount }: UpdateProductAmount) => void;
}

type ProductFetch = Omit<Product, 'amount'>;

const CartContext = createContext<CartContextData>({} as CartContextData);

export function CartProvider({ children }: CartProviderProps): JSX.Element {
  const [cart, setCart] = useState<Product[]>(() => {
    const storagedCart = localStorage.getItem('@RocketShoes:cart');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const addProduct = async (productId: number) => {
    try {
      const productIndex = cart.findIndex(product => product.id === productId);

      if (!cart[productIndex]) {
        const product = await api.get<ProductFetch>(`/products/${productId}`);

        setCart(state => {
          const newState = [
            ...state,
            {
              id: productId,
              title: product.data.title,
              price: product.data.price,
              image: product.data.image,
              amount: 1
            }
          ];

          localStorage.setItem('@RocketShoes:cart', JSON.stringify(newState));

          return newState;
        });
      } else {
        updateProductAmount({
          productId,
          amount: cart[productIndex].amount + 1
        });
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      const productIndex = cart.findIndex(product => product.id === productId);

      if (!cart[productIndex]) {
        throw new Error();
      }

      setCart(state => {
        const newState = state.filter(item => item.id !== productId);

        localStorage.setItem('@RocketShoes:cart', JSON.stringify(newState));

        return newState;
      });
    } catch {
      toast.error('Erro na remoção do produto');
    }
  };

  const updateProductAmount = async ({
    productId,
    amount,
  }: UpdateProductAmount) => {
    if (amount <= 0) {
      return;
    }

    try {
      const stock = await api.get<Stock>(`/stock/${productId}`);

      if (amount > stock.data.amount) {
        toast.error('Quantidade solicitada fora de estoque');
        return;
      }

      const productIndex = cart.findIndex(product => product.id === productId);

      setCart(state => {
        const newState = [...state];
        newState[productIndex].amount = amount;

        localStorage.setItem('@RocketShoes:cart', JSON.stringify(newState));

        return newState;
      });
    } catch {
      toast.error('Erro na alteração de quantidade do produto');
    }
  };

  return (
    <CartContext.Provider
      value={{ cart, addProduct, removeProduct, updateProductAmount }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextData {
  const context = useContext(CartContext);

  return context;
}
