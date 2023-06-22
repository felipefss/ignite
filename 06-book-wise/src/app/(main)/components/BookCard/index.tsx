import Image from 'next/image';
import * as Styled from './styles';

import bookImg from '@/images/books/Book.png';
import { Star } from 'phosphor-react';

export default function BookCard() {
  return (
    <Styled.Container>
      <Styled.Header>
        <Styled.UserInfo>
          <Styled.Avatar>
            <Image src="https://github.com/felipefss.png" alt="" width={40} height={40} />
          </Styled.Avatar>

          <Styled.Title>
            <h1>Jaxson Dias</h1>
            <time dateTime="2023-06-19 12:00">Hoje</time>
          </Styled.Title>
        </Styled.UserInfo>

        <Styled.Rating>
          {/* Put in own component */}
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="fill" />
          <Star weight="regular" />
        </Styled.Rating>
      </Styled.Header>

      <Styled.Content>
        <Image src={bookImg} alt="" />

        <Styled.Summary>
          <Styled.BookInfo>
            <h2>O hobbit</h2>
            <span>J.R.R. Tolkien</span>
          </Styled.BookInfo>

          <p>
            {`Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi deleniti maxime ab quos iste rerum eligendi
            ipsam molestias harum sint, id cum repellendus soluta expedita. Praesentium vero nisi dolores consectetur.
            Nobis, nesciunt cumque autem tenetur corporis natus, quasi aliquid laudantium esse blanditiis eos quo
            repellat nulla in doloribus obcaecati, eveniet tempore sint voluptatem iste ipsum nostrum rem earum! Ad,
            labore? Sed, porro dolores quas id esse dignissimos molestias pariatur eveniet possimus enim qui culpa
            similique. Deleniti accusantium enim repellat ex esse nemo sequi perspiciatis doloremque, maiores, quidem,
            corrupti magnam ratione. Reiciendis eum veritatis rem nesciunt fugiat, eaque cum? Obcaecati dolorem tenetur
            vero ipsam necessitatibus accusantium delectus architecto provident in ad qui dicta odio, deserunt quos
            fugit, sapiente quia molestiae esse.`
              .slice(0, 230)
              .trim()}
            <span>... </span>

            <Styled.ExpandTextButton type="button">ver mais</Styled.ExpandTextButton>
          </p>
        </Styled.Summary>
      </Styled.Content>
    </Styled.Container>
  );
}
