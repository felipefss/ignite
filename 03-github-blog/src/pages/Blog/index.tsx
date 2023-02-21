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

      <section>
        <div>
          <header>
            <span>Javascript data types and data structures</span>
            <span>Há 1 dia</span>
          </header>

          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi corrupti consequuntur reprehenderit dolorem
            ipsam, culpa autem dicta. Debitis optio dolor beatae a possimus totam, eaque commodi, eius, corporis
            dignissimos fugiat.
          </span>
        </div>
      </section>
    </Styled.Container>
  );
}
