import { Handbag } from 'phosphor-react';
import { CartContainer } from './styles';

export function Cart() {
  return (
    <CartContainer empty={false} css={{ pseudoContent: { empty: false, val: '3' } }}>
      <Handbag size={24} />
    </CartContainer>
  );
}
