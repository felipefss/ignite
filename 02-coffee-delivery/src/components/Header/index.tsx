import { MapPin, ShoppingCart } from 'phosphor-react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import { Button } from '../Button';
import * as Styled from './styles';

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <Styled.HeaderContainer>
      <Link to='/'>
        <img src='assets/Logo.svg' alt="Copo take-out de café escrito Coffee Delivery ao lado" />
      </Link>
      <Styled.ActionButtons>
        <Button variant='location'>
          <MapPin weight='fill' size={22} />
          <span>Porto Alegre, RS</span>
        </Button>
        <Link to='/checkout'>
          <Button variant='cart' cartAmount={cart.length}>
            <ShoppingCart weight='fill' size={22} />
          </Button>
        </Link>
      </Styled.ActionButtons>
    </Styled.HeaderContainer>
  );
}