import { Button } from '../../../../components/Button';
import { CoffeeSelected } from '../CoffeeSelected';
import * as Styled from './styles';

export function OrderDetails() {
  return (
    <Styled.OrderContainer>
      <CoffeeSelected
        name='Expresso Tradicional'
        imgSrc='Expresso.svg'
        price={9.9}
      />

      <Styled.Divider />

      <CoffeeSelected
        name='Latte'
        imgSrc='Latte.svg'
        price={19.8}
      />

      <Styled.Divider />

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