'use client';

import Image from 'next/image';
import * as Styled from './styles';

import logo from '@/assets/logo-bookwise.png';
import { Binoculars, ChartLineUp, SignIn } from 'phosphor-react';

export default function NavBar() {
  return (
    <Styled.Container>
      <Image src={logo} alt="" />

      <Styled.Menu>
        <Styled.MenuItem>
          <ChartLineUp /> Inicio
        </Styled.MenuItem>
        <Styled.MenuItem isSelected>
          <Binoculars /> Explorar
        </Styled.MenuItem>
      </Styled.Menu>

      <Styled.AuthFooter>
        <span>Fazer Login</span>
        <SignIn />
      </Styled.AuthFooter>
    </Styled.Container>
  );
}
