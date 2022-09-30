import { DeliveryDetails } from "./components/DeliveryDetails";
import { OrderDetails } from "./components/OrderDetails";
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
        <OrderDetails />
      </section>
    </Styled.CheckoutContainer>
  );
}