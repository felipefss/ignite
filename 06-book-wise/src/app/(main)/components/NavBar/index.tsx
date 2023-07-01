'use client';

import Image from 'next/image';
import { Binoculars, ChartLineUp, SignIn, SignOut, User } from 'phosphor-react';

import * as Styled from './styles';

import logo from '@/assets/logo-bookwise.png';
import Avatar from '../Avatar';

export default function NavBar() {
  const isLoggedIn = true;

  return (
    <Styled.Container>
      <Image src={logo} alt="" />

      <Styled.Menu>
        <Styled.MenuItem>
          <ChartLineUp /> Inicio
        </Styled.MenuItem>
        <Styled.MenuItem $isSelected={true}>
          <Binoculars /> Explorar
        </Styled.MenuItem>
        {isLoggedIn && (
          <Styled.MenuItem>
            <User /> Perfil
          </Styled.MenuItem>
        )}
      </Styled.Menu>

      <Styled.AuthFooter $isLoggedIn={isLoggedIn} type="button">
        {isLoggedIn ? (
          <>
            <Avatar size={32} />
            Cristofer
            <SignOut />
          </>
        ) : (
          <>
            <span>Fazer Login</span>
            <SignIn />
          </>
        )}
      </Styled.AuthFooter>
    </Styled.Container>
  );
}
