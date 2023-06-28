import { styled } from 'styled-components';

export const Container = styled.article`
  height: 280px;
  background-color: var(--gray-700);
  padding: 1.5rem;
  border-radius: 8px;
  overflow-y: hidden;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Avatar = styled.div`
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

export const Title = styled.div`
  h1 {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--gray-100);
  }

  time {
    font-size: 0.875rem;
    line-height: 1.6;
    color: var(--gray-400);
  }
`;

export const Rating = styled.div`
  display: flex;
  gap: 0.25rem;
  color: var(--purple-100);
`;

export const Content = styled.div`
  display: flex;
  gap: 1.25rem;
  margin-top: 2rem;

  img {
    width: 108px;
    height: 152px;
    border-radius: 4px;
  }
`;

export const Summary = styled.section`
  p {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.6;
    color: var(--gray-300);
  }
`;

export const ExpandTextButton = styled.button`
  color: var(--purple-100);
  font-weight: 700;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const BookInfo = styled.header`
  margin-bottom: 1.25rem;

  h2 {
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
