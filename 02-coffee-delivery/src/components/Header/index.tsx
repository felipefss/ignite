import { MapPin, ShoppingCart } from 'phosphor-react';
import Logo from '../../assets/Logo.svg';
import { Button } from '../Button';
import * as Styled from './styles';

export function Header() {
  return (
    <Styled.HeaderContainer>
      <img src={Logo} alt="Copo take-out de café escrito Coffee Delivery ao lado" />
      <Styled.ActionButtons>
        <Button variant='icon'>
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