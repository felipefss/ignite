import Image from 'next/image';
import Head from 'next/head';
import { stripe } from '@/lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Link from 'next/link';
import { useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';

import { CartButton, HomeContainer, Product, ProductInfo } from './home';

import 'keen-slider/keen-slider.min.css';
import { Handbag } from 'phosphor-react';

interface HomeProps {
  products: {
    id: string;
    name: string;
    imageUrl: string;
    price: string;
  }[];
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} prefetch={false}>
            <Product className="keen-slider__slide">
              <Image src={product.imageUrl} width={520} height={480} alt="" />

              <footer>
                <ProductInfo>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ProductInfo>

                <CartButton type="button">
                  <Handbag size={28} weight="bold" />
                </CartButton>
              </footer>
            </Product>
          </Link>
        ))}
      </HomeContainer>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  });

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price;

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount ?? 0) / 100),
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
