'use client';

import { ChartLineUp } from 'phosphor-react';
import * as Styled from './styles';
import BookList from './components/BookList/page';

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Header>
        <ChartLineUp /> <span>Inicio</span>
      </Styled.Header>

      <Styled.Content>
        <Styled.RecentReviews>
          Avaliações mais recentes
          <BookList />
        </Styled.RecentReviews>

        <Styled.PopularBooks>Livros populares</Styled.PopularBooks>
      </Styled.Content>
    </Styled.Container>
  );
}
