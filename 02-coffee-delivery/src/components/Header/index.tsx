import { MapPin, ShoppingCart } from 'phosphor-react';
import { ReactNode, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { Button } from '../Button';
import * as Styled from './styles';

interface ConditionalLinkProps {
  children: ReactNode;
}

export function Header() {
  const { cart, clearCheckout } = useContext(CartContext);
  const location = useLocation();

  function ConditionalLink({ children }: ConditionalLinkProps) {
    if (cart.length) {
      return <Link to='/checkout'>{children}</Link>;
    }

    return <>{children}</>
  };

  function handleGoToHome() {
    if (location.pathname === '/success') {
      clearCheckout();
    }
  }

  return (
    <Styled.HeaderContainer>
      <Link to='/' onClick={handleGoToHome}>
        <img src='assets/Logo.svg' alt="Copo take-out de café escrito Coffee Delivery ao lado" />
      </Link>
      <Styled.ActionButtons>
        <Button variant='location'>
          <MapPin weight='fill' size={22} />
          <span>Porto Alegre, RS</span>
        </Button>
        <ConditionalLink>
          <Button variant='cart' cartAmount={cart.length}>
            <ShoppingCart weight='fill' size={22} />
          </Button>
        </ConditionalLink>
      </Styled.ActionButtons>
    </Styled.HeaderContainer>
  );
}