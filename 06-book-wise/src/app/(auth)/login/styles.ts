import Image from 'next/image';
import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.25rem;
`;

export const Cover = styled(Image)`
  height: calc(100vh - 2.5rem);
  width: auto;
`;

export const Actions = styled.section`
  margin-inline: auto;
  width: 372px;
`;

export const WelcomeText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 2.5rem;

  span {
    &:first-child {
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1.4;
      color: var(--gray-100);
    }

    &:last-child {
      color: var(--gray-200);
      line-height: 1.6;
    }
  }
`;

export const ActionButtons = styled.div`
  display: grid;
  gap: 1rem;

  button {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    padding: 1.25rem 1.5rem;
    border-radius: 8px;

    background-color: var(--gray-600);
    cursor: pointer;

    transition: opacity 0.2s linear;

    &:hover {
      opacity: 0.8;
    }
  }
`;
