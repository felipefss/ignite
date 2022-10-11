import { ShoppingCart } from 'phosphor-react';
import { useContext, useState } from 'react';

import { Button } from '../../../../components/Button';
import { QuantityCounter } from '../../../../components/QuantityCounter';
import { CartContext } from '../../../../contexts/CartContext';

import { formatToReais } from '../../../../utils/format';
import { ICoffee } from '../CoffeeList';

import * as Styled from './styles';

export function Card({ id, name, description, price, image, tags }: ICoffee) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  const [currencySign, currencyValue] = formatToReais(price).split(/\s/);

  function updateQuantity(step: number) {
    // Quantity can't be less than 1
    if (quantity === 1 && step === -1) {
      return;
    }

    setQuantity(prev => prev + step);
  }

  function handleAddToCart() {
    addToCart({
      id,
      name,
      price,
      image,
      quantity
    });

    // Reset quantity
    setQuantity(1);
  }

  return (
    <Styled.CardContainer>
      <Styled.Image src={image} alt="Xícara de café vista de cima" />

      <Styled.Tags>
        {tags.map(tag => <Styled.Tag key={tag}>{tag}</Styled.Tag>)}
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
          <Button variant='icon' onClick={handleAddToCart}>
            <ShoppingCart weight='fill' size={22} />
          </Button>
        </Styled.Purchase>
      </Styled.Footer>
    </Styled.CardContainer>
  );
}