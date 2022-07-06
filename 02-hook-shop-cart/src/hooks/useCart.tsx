import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
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

  useEffect(() => {
    localStorage.setItem('@RocketShoes:cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = async (productId: number) => {
    try {
      const stock = await api.get<Stock>(`/stock/${productId}`);
      const productIndex = cart.findIndex(product => product.id === productId);

      if (productIndex !== -1) {
        const amount = cart[productIndex].amount;

        if ((amount + 1) > stock.data.amount) {
          toast.error('Quantidade solicitada fora de estoque');
          return;
        }

        setCart(state => {
          state[productIndex].amount++;
          return state;
        });
      } else {
        if (stock.data.amount === 0) {
          toast.error('Quantidade solicitada fora de estoque');
          return;
        }

        const product = (await api.get<ProductFetch>(`/products/${productId}`)).data;

        setCart([...cart, {
          id: productId,
          title: product.title,
          price: product.price,
          image: product.image,
          amount: 1
        }]);
      }
    } catch {
      toast.error('Erro na adição do produto');
    }
  };

  const removeProduct = (productId: number) => {
    try {
      setCart(state => state.filter(item => item.id !== productId));
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
        state[productIndex].amount = amount;
        return state;
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
