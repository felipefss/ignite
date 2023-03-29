import { useCartContext } from '@/contexts/CartContext';
import { Handbag } from 'phosphor-react';
import { CartButtonContainer } from './styles';

export function CartButton() {
  const { products, toggleCartVisibility } = useCartContext();

  const isEmpty = products.length === 0;

  function handleClick() {
    if (!isEmpty) {
      toggleCartVisibility();
    }
  }

  return (
    <CartButtonContainer
      empty={isEmpty}
      css={{ pseudoContent: { empty: isEmpty, val: String(products.length) } }}
      onClick={handleClick}
    >
      <Handbag size={24} />
    </CartButtonContainer>
  );
}
