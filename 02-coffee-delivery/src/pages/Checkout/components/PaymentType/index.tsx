import { useContext } from "react";
import { CurrencyDollar } from "phosphor-react";

import { CartContext } from "../../../../contexts/CartContext";
import { PaymentMethod, TypeOfPayment } from "../PaymentMethod";

import * as Styled from './styles';

export function PaymentType() {
  const { updatePaymentType } = useContext(CartContext);

  function onSelectPaymentMethod(value: TypeOfPayment) {
    updatePaymentType(value);
  }

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
        <PaymentMethod label="Cartão de Crédito" type="credit" onSelect={onSelectPaymentMethod} />
        <PaymentMethod label="Cartão de Débito" type="debit" onSelect={onSelectPaymentMethod} />
        <PaymentMethod label="Dinheiro" type="cash" onSelect={onSelectPaymentMethod} />
      </Styled.PaymentMethods>
    </Styled.PaymentContainer>
  );
}