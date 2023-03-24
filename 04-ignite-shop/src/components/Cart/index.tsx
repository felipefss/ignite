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

import shirt from '../../assets/Shirt.png';

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
            <div>
              <Image src={shirt} width={95} height={95} alt="camiseta" />

              <div>
                <span>Camiseta Beyond the Limits</span>
                <span>R$ 79,90</span>
                <button>Remover</button>
              </div>
            </div>
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
