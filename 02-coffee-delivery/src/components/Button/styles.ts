import styled from "styled-components";


interface CartButtonProps {
  cartAmount?: number;
}

const BaseButton = styled.button<CartButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 6px;

  cursor: pointer;
`;

export const DefaultButton = styled(BaseButton)`
  padding: 0.75rem 0.5rem;

  background-color: ${props => props.theme.yellow};
  color: ${props => props.theme.white};
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 1.6;
  text-transform: uppercase;
  font-stretch: 100%;

  &:hover {
    background-color: ${props => props.theme["yellow-dark"]};
  }
`;

export const IconButton = styled(BaseButton)`
  padding: 0.5rem;

  background-color: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme.card};

  &:hover {
    background-color: ${props => props.theme.purple};
  }
`;

export const SmallButton = styled(BaseButton)`
  background-color: ${props => props.theme.button};
  padding: 0 0.5rem;
  gap: 0.25rem;
  color: ${props => props.theme.purple};

  span {
    color: ${props => props.theme.text};
    font-size: 0.75rem;
    text-transform: uppercase;
  }

  &:hover {
    background-color: ${props => props.theme.hover};
  }
`;

export const CartButton = styled(BaseButton)`
  padding: 0.5rem;

  background-color: ${props => props.theme["yellow-light"]};
  color: ${props => props.theme["yellow-dark"]};

  &::before {
    content: ${({ cartAmount }) => {
    if (cartAmount) {
      return `'${cartAmount}'`;
    }
    return 'none';
  }};
    position: absolute;
    top: 25px;
    right: 150px;

    width: 20px;
    height: 20px;
    
    background-color: ${props => props.theme["yellow-dark"]};
    color: ${props => props.theme.white};
    font-size: 12px;
    line-height: 1.3;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    font-weight: 700;
    border-radius: 1000px;
  }
`;

export const LocationButton = styled(BaseButton)`
  padding: 0.75rem;
  gap: 0.25rem;

  background-color: ${props => props.theme["purple-light"]};
  color: ${props => props.theme["purple-dark"]};

  cursor: auto;

  span {
    font-size: 0.875rem;
    line-height: 1.3;
  }
`;
