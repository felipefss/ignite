import { styled } from 'styled-components';

export const Container = styled.div`
  margin-top: 4.5rem;
  margin-inline: auto;
`;

export const Header = styled.header`
  display: flex;
  gap: 0.75rem;

  svg {
    color: var(--green-100);
  }

  span {
    color: var(--gray-100);
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 1.4;
  }
`;

export const Content = styled.main`
  display: flex;
  gap: 4rem;

  margin-top: 2.5rem;
`;

export const RecentReviews = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 608px;
`;

export const PopularBooks = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 324px;
`;

export const PopularBooksHead = styled.div`
  display: flex;
  justify-content: space-between;

  a {
    all: unset;

    display: flex;
    align-items: center;
    gap: 0.5rem;

    font-size: 0.875rem;
    font-weight: 700;
    line-height: 1.6;
    color: var(--purple-100);
    cursor: pointer;
  }
`;
