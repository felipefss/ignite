import { CurrencyDollar } from "phosphor-react";
import { PaymentMethod } from "../PaymentMethod";

import * as Styled from './styles';

export function PaymentType() {
  return (
    <Styled.PaymentContainer>
      <Styled.Header>
        <CurrencyDollar size={22} />

        <Styled.Title>
          <h3>Pagamento</h3>
          <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
        </Styled.Title>
      </Styled.Header>

      <Styled.PaymentMethods>
        <PaymentMethod label="Cartão de Crédito" type="credit" />
        <PaymentMethod label="Cartão de Débito" type="debit" />
        <PaymentMethod label="Dinheiro" type="cash" />
      </Styled.PaymentMethods>
    </Styled.PaymentContainer>
  );
}