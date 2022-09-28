import { Bank, CreditCard, CurrencyDollar, Money } from "phosphor-react";

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
        <Styled.Method>
          <input type="radio" name="paymentType" />
          <CreditCard size={16} />
          <span>Cartão de Crédito</span>
        </Styled.Method>

        <Styled.Method>
          <input type="radio" name="paymentType" />
          <Bank size={16} />
          <span>Cartão de Débito</span>
        </Styled.Method>

        <Styled.Method>
          <input type="radio" name="paymentType" />
          <Money size={16} />
          <span>Dinheiro</span>
        </Styled.Method>
      </Styled.PaymentMethods>
    </Styled.PaymentContainer>
  );
}