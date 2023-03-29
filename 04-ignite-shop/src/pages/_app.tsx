import { Cart } from '@/components/Cart';
import { CartButton } from '@/components/CartButton';
import { CartProvider } from '@/contexts/CartContext';
import { globalStyles } from '@/styles/global';
import { Container, Header } from '@/styles/pages/app';
import type { AppProps } from 'next/app';
import Image from 'next/image';

import logoImg from '../assets/logo.svg';

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <CartProvider>
        <Header>
          <Image src={logoImg.src} width={130} height={52} alt="" />
          <CartButton />
        </Header>

        <Cart />

        <Component {...pageProps} />
      </CartProvider>
    </Container>
  );
}
