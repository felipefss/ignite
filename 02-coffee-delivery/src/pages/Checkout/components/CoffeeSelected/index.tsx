import { useContext, useState } from 'react';
import { Trash } from 'phosphor-react';

import { Button } from '../../../../components/Button';
import { QuantityCounter } from '../../../../components/QuantityCounter';
import { formatToReais } from '../../../../utils/format';

import * as Styled from './styles';
import { CartContext } from '../../../../contexts/CartContext';

interface CoffeeSelectedProps {
  id: number;
  name: string;
  imgSrc: string;
  price: number;
  quantity: number;
}

export function CoffeeSelected({ id, name, imgSrc, price, quantity }: CoffeeSelectedProps) {
  const { updateCartItem, removeCartItem } = useContext(CartContext);

  function updateQuantity(step: number) {
    // Quantity can't be less than 1
    if (quantity === 1 && step === -1) {
      return;
    }

    updateCartItem(id, step);
  }

  function handleDelete() {
    removeCartItem(id);
  }

  return (
    <Styled.Container>
      <Styled.Info>
        <img src={imgSrc} alt="Xícara de café vista de cima" />

        <Styled.Details>
          <span>{name}</span>

          <Styled.Actions>
            <QuantityCounter
              quantity={quantity}
              onChange={updateQuantity}
            />

            <Button variant='small' onClick={handleDelete}>
              <Trash size={16} />
              <span>REMOVER</span>
            </Button>
          </Styled.Actions>
        </Styled.Details>
      </Styled.Info>

      <span>{formatToReais(price * quantity)}</span>
    </Styled.Container>
  );
}