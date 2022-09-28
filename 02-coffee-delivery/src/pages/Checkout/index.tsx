import { DeliveryDetails } from "./components/DeliveryDetails";
import { PaymentType } from "./components/PaymentType";

import * as Styled from './styles';

export function Checkout() {
  return (
    <Styled.CheckoutContainer>
      <section>
        <Styled.Title>Complete seu pedido</Styled.Title>
        <DeliveryDetails />
        <PaymentType />
      </section>

      <section>
        <Styled.Title>Cafés selecionados</Styled.Title>
      </section>
    </Styled.CheckoutContainer>
  );
}