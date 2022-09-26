import * as Styled from './styles';

import Expresso from '../../../../assets/Expresso.svg';
import { Button } from '../../../../components/Button';
import { ShoppingCart } from 'phosphor-react';
import { QuantityCounter } from '../../../../components/QuantityCounter';

export function Card() {
  return (
    <Styled.CardContainer>
      <Styled.Image src={Expresso} alt="Xícara de café vista de cima" />
      <Styled.Tag>Tradicional</Styled.Tag>

      <Styled.Name>Expresso Tradicional</Styled.Name>
      <Styled.Description>O tradicional café feito com água quente e grãos moídos</Styled.Description>

      <Styled.Footer>
        <Styled.Price>R$ <span>9,90</span></Styled.Price>

        <Styled.Purchase>
          <QuantityCounter />
          <Button variant='icon'>
            <ShoppingCart weight='fill' />
          </Button>
        </Styled.Purchase>
      </Styled.Footer>
    </Styled.CardContainer>
  );
}