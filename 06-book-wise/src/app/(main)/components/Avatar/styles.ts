import { Root } from '@radix-ui/react-avatar';
import styled from 'styled-components';

export const AvatarContainer = styled(Root)`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 42px;
  background: var(--gradient-vertical);
  padding: 1px;
  border-radius: 999px;

  img {
    border-radius: 999px;
  }
`;
