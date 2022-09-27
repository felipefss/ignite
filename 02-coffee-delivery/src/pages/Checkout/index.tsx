import { DeliveryDetails } from "./components/DeliveryDetails";

import * as Styled from './styles';

export function Checkout() {
  return (
    <Styled.CheckoutContainer>
      <section>
        <Styled.Title>Complete seu pedido</Styled.Title>
        <DeliveryDetails />
      </section>

      <section>
        <Styled.Title>Cafés selecionados</Styled.Title>
      </section>
    </Styled.CheckoutContainer>
  );
}