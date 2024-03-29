import Image from 'next/image';
import Head from 'next/head';
import { stripe } from '@/lib/stripe';
import { GetStaticProps } from 'next';
import Stripe from 'stripe';
import Link from 'next/link';
import { MouseEvent, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { Handbag } from 'phosphor-react';

import { CartButton, HomeContainer, Product, ProductInfo } from './home';
import { useCartContext } from '@/contexts/CartContext';

import 'keen-slider/keen-slider.min.css';
import { priceFormat } from '@/utils/priceFormat';

interface Product {
  id: string;
  name: string;
  imageUrl: string;
  price: number;
  defaultPriceId: string;
}

interface HomeProps {
  products: Product[];
}

export default function Home({ products }: HomeProps) {
  const { addToCart } = useCartContext();

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  });

  function handleAddToCart(e: MouseEvent, item: Product) {
    e.preventDefault();

    addToCart(item);
  }

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
                  <span>{priceFormat(product.price)}</span>
                </ProductInfo>

                <CartButton type="button" onClick={(e) => handleAddToCart(e, product)}>
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
      price: price.unit_amount,
      defaultPriceId: price.id,
    };
  });

  return {
    props: { products },
    revalidate: 60 * 60 * 2, // 2 hours
  };
};
