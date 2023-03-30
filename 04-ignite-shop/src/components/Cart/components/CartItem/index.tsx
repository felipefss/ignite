import { useCartContext } from '@/contexts/CartContext';
import { priceFormat } from '@/utils/priceFormat';
import Image from 'next/image';

import { ImageContainer, ItemContainer, ItemDetails } from './styles';

interface Props {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
}

export function CartItem({ id, imageUrl, name, price }: Props) {
  const { removeFromCart } = useCartContext();

  function handleRemove() {
    removeFromCart(id);
  }

  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={imageUrl} width={95} height={95} alt="camiseta" />
      </ImageContainer>

      <ItemDetails>
        <span>{name}</span>
        <span>{priceFormat(price)}</span>
        <button type="button" onClick={handleRemove}>
          Remover
        </button>
      </ItemDetails>
    </ItemContainer>
  );
}
