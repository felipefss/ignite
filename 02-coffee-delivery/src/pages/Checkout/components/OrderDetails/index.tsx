import { useContext } from 'react';
import { Button } from '../../../../components/Button';
import { CartContext } from '../../../../contexts/CartContext';
import { CoffeeSelected } from '../CoffeeSelected';
import * as Styled from './styles';

export function OrderDetails() {
  const { cart } = useContext(CartContext);

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
          <span>R$ 29,70</span>
        </Styled.TotalLine>

        <Styled.TotalLine>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </Styled.TotalLine>

        <Styled.TotalLine>
          <span>Total</span>
          <span>R$ 33,20</span>
        </Styled.TotalLine>
      </Styled.Total>

      <Button>Confirmar pedido</Button>
    </Styled.OrderContainer>
  );
}