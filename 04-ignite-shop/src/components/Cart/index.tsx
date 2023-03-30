import * as Dialog from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';

import {
  Body,
  CartContent,
  CartQuantity,
  CartTotal,
  CheckoutInfo,
  DialogClose,
  Footer,
  PurchaseButton,
  Title,
} from './styles';

import { CartItem } from './components/CartItem';
import { useCartContext } from '@/contexts/CartContext';
import { priceFormat } from '@/utils/priceFormat';
import { useState } from 'react';
import axios from 'axios';

export function Cart() {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);

  const { products, isCartVisible, toggleCartVisibility } = useCartContext();

  const cartSize = products.length;
  const totalPrice = products.reduce((sum, item) => sum + item.price, 0);

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products,
      });

      const { checkoutUrl } = response.data;
      window.location.href = checkoutUrl;
    } catch (err) {
      setIsCreatingCheckoutSession(false);
      // Conectar com uma ferramenta de observabilidade (Datadog / Sentry / Mend)
      alert('Falha ao redirecionar ao checkout!');
    }
  }

  return (
    <Dialog.Root open={isCartVisible}>
      <Dialog.Portal>
        <Dialog.Overlay />
        <CartContent>
          <DialogClose asChild onClick={toggleCartVisibility}>
            <X size={24} weight="bold" />
          </DialogClose>

          <Body>
            <Title>Sacola de compras</Title>
            {products.map((product) => (
              <CartItem
                key={product.id}
                id={product.id}
                imageUrl={product.imageUrl}
                name={product.name}
                price={product.price}
              />
            ))}
          </Body>

          <Footer>
            <CheckoutInfo>
              <CartQuantity>
                <span>Quantidade</span>
                <span>
                  {cartSize} ite{cartSize > 1 ? 'ns' : 'm'}
                </span>
              </CartQuantity>

              <CartTotal>
                <span>Valor total</span>
                <span>{priceFormat(totalPrice)}</span>
              </CartTotal>
            </CheckoutInfo>

            <PurchaseButton type="button" onClick={handleBuyProduct}>
              Finalizar compra
            </PurchaseButton>
          </Footer>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
