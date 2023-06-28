import * as Styled from './styles';

import { ReactNode } from 'react';

export default function BookList({ children }: { children: ReactNode }) {
  return <Styled.Container>{children}</Styled.Container>;
}
