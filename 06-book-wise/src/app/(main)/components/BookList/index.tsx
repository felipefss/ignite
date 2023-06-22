import * as Styled from './styles';

import BookCard from '../BookCard';

export default function BookList() {
  return (
    <Styled.Container>
      <BookCard />
      <BookCard />
      <BookCard />
      <BookCard />
    </Styled.Container>
  );
}
