'use client';

import { CaretRight, ChartLineUp } from 'phosphor-react';
import * as Styled from './styles';
import BookList from './components/BookList';
import BookCard from './components/BookCard';
import SmallBookCard from './components/SmallBookCard';
import Link from 'next/link';

export default function Home() {
  return (
    <Styled.Container>
      <Styled.Header>
        <ChartLineUp /> <span>Inicio</span>
      </Styled.Header>

      <Styled.Content>
        <Styled.RecentReviews>
          Avaliações mais recentes
          <BookList>
            <BookCard />
            <BookCard />
            <BookCard />
            <BookCard />
          </BookList>
        </Styled.RecentReviews>

        <Styled.PopularBooks>
          <Styled.PopularBooksHead>
            <span>Livros populares</span>
            <Link href="#">
              Ver todos <CaretRight />
            </Link>
          </Styled.PopularBooksHead>
          <BookList>
            <SmallBookCard />
            <SmallBookCard />
            <SmallBookCard />
            <SmallBookCard />
          </BookList>
        </Styled.PopularBooks>
      </Styled.Content>
    </Styled.Container>
  );
}
