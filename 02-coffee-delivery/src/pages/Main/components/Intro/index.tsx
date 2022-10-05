import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import * as Styled from './styles';

export function Intro() {
  return (
    <Styled.IntroContainer>
      <div>
        <Styled.Title>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
        </Styled.Title>

        <Styled.Features>
          <Styled.FeaturesItem>
            <Styled.Icon bgColor='yellow-dark'>
              <ShoppingCart size={16} weight='fill' color='white' />
            </Styled.Icon>
            <span>Compra simples e segura</span>
          </Styled.FeaturesItem>

          <Styled.FeaturesItem>
            <Styled.Icon bgColor='text'>
              <Package size={16} weight='fill' color='white' />
            </Styled.Icon>
            <span>Embalagem mantém o café intacto</span>
          </Styled.FeaturesItem>

          <Styled.FeaturesItem>
            <Styled.Icon bgColor='yellow'>
              <Timer size={16} weight='fill' color='white' />
            </Styled.Icon>
            <span>Entrega rápida e rastreada</span>
          </Styled.FeaturesItem>

          <Styled.FeaturesItem>
            <Styled.Icon bgColor='purple'>
              <Coffee size={16} weight='fill' color='white' />
            </Styled.Icon>
            <span>O café chega fresquinho até você</span>
          </Styled.FeaturesItem>
        </Styled.Features>
      </div>

      <img src='/assets/Coffee_Cup_Beans.svg' alt="Copo de café takeaway com amostras de grãos inteiros e moídos ao redor" />
    </Styled.IntroContainer>
  );
}