import Image from 'next/image';
import * as Styled from './styles';
import { Star } from 'phosphor-react';

import bookImg from '@/images/books/Book.png';

export default function SmallBookCard() {
  return (
    <Styled.Container>
      <Image src={bookImg} width={64} height={94} alt="" />

      <Styled.Content>
        <Styled.BookInfo>
          <h3>A Revolução dos Bichos</h3>
          <span>George Orwell</span>
        </Styled.BookInfo>

        <Styled.Rating>
          {/* Put in own component */}
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="regular" />
        </Styled.Rating>
      </Styled.Content>
    </Styled.Container>
  );
}
