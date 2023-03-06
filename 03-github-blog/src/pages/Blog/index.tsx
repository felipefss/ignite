import { FormEvent, useRef, useState } from 'react';
import { Card } from './components/Card';
import { Profile } from './components/Profile';
import { useSearchPost } from './hooks/useSearchPost';

import * as Styled from './styles';

export function Blog() {
  const [searchInput, setSearchInput] = useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const posts = useSearchPost(searchInput);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    setSearchInput(searchInputRef.current?.value ?? '');
  }

  return (
    <Styled.Container>
      <Profile />

      <Styled.CounterContainer>
        <Styled.CounterTitle>Publicações</Styled.CounterTitle>
        <Styled.Counter>{posts.length} publicações</Styled.Counter>
      </Styled.CounterContainer>

      <form onSubmit={handleSubmit}>
        <Styled.SearchInput ref={searchInputRef} type="text" placeholder="Buscar conteúdo" />
      </form>

      <Styled.CardList>
        {posts.map((post) => (
          <Card key={post.id} id={post.id} title={post.title} body={post.body} createdAt={post.createdAt} />
        ))}
      </Styled.CardList>
    </Styled.Container>
  );
}
