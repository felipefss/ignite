import { ReactNode } from 'react';
import * as Styled from './styles';

interface ButtonProps {
  children: ReactNode;
  variant?: 'button' | 'icon' | 'small' | 'cart' | 'location';
  cartAmount?: number;
}

const buttonsMap = {
  button: '',
  icon: Styled.IconButton,
  small: '',
  cart: Styled.CartButton,
  location: Styled.LocationButton
};

export function Button({ children, variant = 'button', cartAmount }: ButtonProps) {
  const ButtonComponent = buttonsMap[variant];

  return (
    <ButtonComponent cartAmount={cartAmount}>
      {children}
    </ButtonComponent>
  );
}