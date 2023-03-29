import { useCartContext } from '@/contexts/CartContext';
import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from './styles';

export function CartButton() {
  const { products } = useCartContext();

  const isEmpty = products.length === 0;

  return (
    <CartButtonContainer empty={isEmpty} css={{ pseudoContent: { empty: isEmpty, val: String(products.length) } }}>
      <Handbag size={24} />
    </CartButtonContainer>
  );
}
