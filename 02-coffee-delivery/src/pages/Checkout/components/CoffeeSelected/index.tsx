import { Button } from '../../../../components/Button';
import { QuantityCounter } from '../../../../components/QuantityCounter';
import { formatToReais } from '../../../../utils/format';
import { Trash } from 'phosphor-react';

import * as Styled from './styles';

interface CoffeeSelectedProps {
  name: string;
  imgSrc: string;
  price: number;
}

export function CoffeeSelected({ name, imgSrc, price }: CoffeeSelectedProps) {
  return (
    <Styled.Container>
      <Styled.Info>
        <img src={`/assets/${imgSrc}`} alt="Xícara de café vista de cima" />

        <Styled.Details>
          <span>{name}</span>

          <Styled.Actions>
            <QuantityCounter />

            <Button>
              <Trash size={16} />
              <span>REMOVER</span>
            </Button>
          </Styled.Actions>
        </Styled.Details>
      </Styled.Info>

      <span>{formatToReais(price)}</span>
    </Styled.Container>
  );
}