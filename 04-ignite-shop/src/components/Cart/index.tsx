import * as Dialog from '@radix-ui/react-dialog';
import Image from 'next/image';
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

export function Cart() {
  return (
    <Dialog.Root open>
      <Dialog.Portal>
        <Dialog.Overlay />
        <CartContent>
          <DialogClose asChild>
            <X size={24} weight="bold" />
          </DialogClose>

          <Body>
            <Title>Sacola de compras</Title>
            <CartItem />
            <CartItem />
            <CartItem />
          </Body>

          <Footer>
            <CheckoutInfo>
              <CartQuantity>
                <span>Quantidade</span>
                <span>3 itens</span>
              </CartQuantity>

              <CartTotal>
                <span>Valor total</span>
                <span>R$ 270,00</span>
              </CartTotal>
            </CheckoutInfo>

            <PurchaseButton>Finalizar compra</PurchaseButton>
          </Footer>
        </CartContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
