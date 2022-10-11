import { useContext } from 'react';

import { Button } from '../../../../components/Button';
import { CoffeeSelected } from '../CoffeeSelected';
import { CartContext } from '../../../../contexts/CartContext';
import { formatToReais } from '../../../../utils/format';

import * as Styled from './styles';

const DELIVERY_RATE = 3.5;

export function OrderDetails() {
  const { cart } = useContext(CartContext);

  const subTotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const total = subTotal + DELIVERY_RATE;

  return (
    <Styled.OrderContainer>
      {cart.map(item => (
        <div key={item.id}>
          <CoffeeSelected
            id={item.id}
            name={item.name}
            imgSrc={item.image}
            price={item.price}
            quantity={item.quantity}
          />

          <Styled.Divider />
        </div>
      ))}

      <Styled.Total>
        <Styled.TotalLine>
          <span>Total de itens</span>
          <span>{formatToReais(subTotal)}</span>
        </Styled.TotalLine>

        <Styled.TotalLine>
          <span>Entrega</span>
          <span>{formatToReais(DELIVERY_RATE)}</span>
        </Styled.TotalLine>

        <Styled.TotalLine>
          <span>Total</span>
          <span>{formatToReais(total)}</span>
        </Styled.TotalLine>
      </Styled.Total>

      <Button>Confirmar pedido</Button>
    </Styled.OrderContainer>
  );
}