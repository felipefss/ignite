import Image from 'next/image';

import shirt from '../../../../assets/Shirt.png';
import { ImageContainer, ItemContainer, ItemDetails } from './styles';

export function CartItem() {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image src={shirt} width={95} height={95} alt="camiseta" />
      </ImageContainer>

      <ItemDetails>
        <span>Camiseta Beyond the Limits</span>
        <span>R$ 79,90</span>
        <button>Remover</button>
      </ItemDetails>
    </ItemContainer>
  );
}
