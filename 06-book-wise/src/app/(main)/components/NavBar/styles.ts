import { css, styled } from 'styled-components';

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  margin: 1.25rem;
  padding: 2.5rem 0 1.5rem;
  height: calc(100vh - 2.5rem);
  width: 232px;
  background-color: var(--gray-700);
  border-radius: 12px;
`;

export const Menu = styled.div`
  flex: 1;
  margin-top: 4rem;

  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

interface MenuItemProps {
  $isSelected?: boolean;
}

export const MenuItem = styled.button<MenuItemProps>`
  color: var(--gray-400);
  line-height: 1.6;
  position: relative;
  cursor: pointer;

  &:hover {
    color: var(--gray-100);
  }

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      color: var(--gray-100);
      font-weight: 700;

      &::before {
        content: '';
        position: absolute;
        left: -20px;
        width: 4px;
        height: 1.5rem;
        background: var(--gradient-vertical);
        border-radius: 999px;
      }
    `}
`;

export const AuthFooter = styled.button`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  cursor: pointer;

  span {
    color: var(--gray-200);
    font-weight: 700;
    line-height: 1.6;
  }

  svg {
    color: var(--green-100);
  }
`;
