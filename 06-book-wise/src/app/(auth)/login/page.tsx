'use client';

import * as Styled from './styles';

import loginCover from '@/assets/login-cover.png';
import logoGoogle from '@/assets/logo-google.svg';
import logoGithub from '@/assets/logo-github.svg';
import logoVisitor from '@/assets/logo-visitor.svg';
import Image from 'next/image';

export default function Login() {
  return (
    <Styled.Container>
      <Styled.Cover src={loginCover} alt="Picture of a lady reading a book on the sofa" priority={true} />

      <Styled.Actions>
        <Styled.WelcomeText>
          <span>Boas vindas!</span>
          <span>Faça seu login ou acesse como visitante</span>
        </Styled.WelcomeText>

        <Styled.ActionButtons>
          <button>
            <Image src={logoGoogle} alt="" />
            <span>Entrar com Google</span>
          </button>
          <button>
            <Image src={logoGithub} alt="" />
            <span>Entrar com GitHub</span>
          </button>
          <button>
            <Image src={logoVisitor} alt="" />
            <span>Acessar como visitante</span>
          </button>
        </Styled.ActionButtons>
      </Styled.Actions>
    </Styled.Container>
  );
}
