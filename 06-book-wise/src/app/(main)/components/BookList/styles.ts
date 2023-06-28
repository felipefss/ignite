import { css, styled } from 'styled-components';

interface ContainerProps {
  $grid?: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  gap: 0.75rem;

  ${({ $grid }) =>
    $grid &&
    css`
      grid-template-columns: repeat(3, 1fr);
      gap: 1.25rem;
    `}
`;
