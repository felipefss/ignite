import { ChangeEvent, useContext, useState } from "react";
import { CurrencyDollar } from "phosphor-react";

import { CartContext } from "../../../../contexts/CartContext";
import { PaymentMethod, TypeOfPayment } from "../PaymentMethod";

import * as Styled from './styles';

export function PaymentType() {
  const { updatePaymentType, paymentType } = useContext(CartContext);
  const [selectedOption, setSelectedOption] = useState<TypeOfPayment | null>(paymentType);

  function handleSelectPaymentMethod(value: TypeOfPayment) {
    setSelectedOption(value);
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
        <PaymentMethod
          label="Cartão de Crédito"
          type="credit"
          checked={selectedOption === 'credit'}
          onChange={(e) => handleSelectPaymentMethod(e.target.value as TypeOfPayment)}
        />
        <PaymentMethod
          label="Cartão de Débito"
          type="debit"
          checked={selectedOption === 'debit'}
          onChange={(e) => handleSelectPaymentMethod(e.target.value as TypeOfPayment)}
        />
        <PaymentMethod
          label="Dinheiro"
          type="cash"
          checked={selectedOption === 'cash'}
          onChange={(e) => handleSelectPaymentMethod(e.target.value as TypeOfPayment)}
        />
      </Styled.PaymentMethods>
    </Styled.PaymentContainer>
  );
}