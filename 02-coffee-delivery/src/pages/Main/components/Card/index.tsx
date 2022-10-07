import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react';

import { Button } from '../../../../components/Button';
import { QuantityCounter } from '../../../../components/QuantityCounter';

import { Coffee } from '../../../../contexts/CartContext';
import { formatToReais } from '../../../../utils/format';

import * as Styled from './styles';

interface CardProps extends Omit<Coffee, 'id'> { }

export function Card({ name, description, price, image, tags }: CardProps) {
  const [quantity, setQuantity] = useState(1);

  const [currencySign, currencyValue] = formatToReais(price).split(/\s/);

  function updateQuantity(step: number) {
    // Quantity can't be less than 1
    if (quantity === 1 && step === -1) {
      return;
    }

    setQuantity(prev => prev + step);
  }

  return (
    <Styled.CardContainer>
      <Styled.Image src={image} alt="Xícara de café vista de cima" />

      <Styled.Tags>
        {tags.map(tag => <Styled.Tag>{tag}</Styled.Tag>)}
      </Styled.Tags>

      <Styled.Name>{name}</Styled.Name>
      <Styled.Description>{description}</Styled.Description>

      <Styled.Footer>
        <Styled.Price>{currencySign} <span>{currencyValue}</span></Styled.Price>

        <Styled.Purchase>
          <QuantityCounter
            quantity={quantity}
            onChange={updateQuantity}
          />
          <Button variant='icon'>
            <ShoppingCart weight='fill' size={22} />
          </Button>
        </Styled.Purchase>
      </Styled.Footer>
    </Styled.CardContainer>
  );
}