import { Card } from './components/Card';
import { Profile } from './components/Profile';

import * as Styled from './styles';

export function Blog() {
  return (
    <Styled.Container>
      <Profile />

      <Styled.CounterContainer>
        <Styled.CounterTitle>Publicações</Styled.CounterTitle>
        <Styled.Counter>6 publicações</Styled.Counter>
      </Styled.CounterContainer>

      <form action="#">
        <Styled.SearchInput type="text" placeholder="Buscar conteúdo" />
      </form>

      <Styled.CardList>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Styled.CardList>
    </Styled.Container>
  );
}
