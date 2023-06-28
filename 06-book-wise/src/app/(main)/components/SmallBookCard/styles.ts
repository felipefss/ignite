import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  gap: 1.25rem;

  padding: 1rem 1.25rem;
  background-color: var(--gray-700);
  border-radius: 8px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const BookInfo = styled.header`
  h3 {
    font-size: 1rem;
    font-weight: 700;
    line-height: 1.4;
    color: var(--gray-100);
  }

  span {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 0.25rem;
  color: var(--purple-100);
`;
