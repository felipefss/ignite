import { MapPin, ShoppingCart } from 'phosphor-react';
import { Button } from '../Button';
import * as Styled from './styles';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <a href="/">
        <img src='assets/Logo.svg' alt="Copo take-out de café escrito Coffee Delivery ao lado" />
      </a>
      <Styled.ActionButtons>
        <Button variant='location'>
          <MapPin weight='fill' size={22} />
          <span>Porto Alegre, RS</span>
        </Button>
        <Button variant='cart'>
          <ShoppingCart weight='fill' size={22} />
        </Button>
      </Styled.ActionButtons>
    </Styled.HeaderContainer>
  );
}