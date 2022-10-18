import { ButtonHTMLAttributes, ReactNode } from 'react';
import * as Styled from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'button' | 'icon' | 'small' | 'cart' | 'location';
  cartAmount?: number;
}

const buttonsMap = {
  button: Styled.DefaultButton,
  icon: Styled.IconButton,
  small: Styled.SmallButton,
  cart: Styled.CartButton,
  location: Styled.LocationButton
};

export function Button({ children, variant = 'button', cartAmount, ...props }: ButtonProps) {
  const ButtonComponent = buttonsMap[variant];

  return (
    <ButtonComponent cartAmount={cartAmount} {...props}>
      {children}
    </ButtonComponent>
  );
}