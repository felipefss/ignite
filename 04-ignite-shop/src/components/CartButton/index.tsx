import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from './styles';

export function CartButton() {
  return (
    <CartButtonContainer empty={false} css={{ pseudoContent: { empty: false, val: '3' } }}>
      <Handbag size={24} />
    </CartButtonContainer>
  );
}
