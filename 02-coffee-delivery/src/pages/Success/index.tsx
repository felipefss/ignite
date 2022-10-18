import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

import * as Styled from './styles';

const paymentMapping = {
  credit: 'Crédito',
  debit: 'Débito',
  cash: 'Dinheiro'
};

export function Success() {
  const { deliveryDetails, paymentType } = useContext(CartContext);

  const mappedPaymentType = paymentType ? paymentMapping[paymentType] : null;

  return (
    <Styled.SuccessContainer>
      <Styled.Title>Uhu! Pedido confirmado</Styled.Title>
      <Styled.Subtitle>Agora é só aguardar que logo o café chegará até você</Styled.Subtitle>

      <Styled.MainSection>
        <Styled.OrderInfoWrapper>
          <Styled.OrderInfo>

            <Styled.InfoDetail>
              <Styled.Icon variant="local">
                <MapPin weight="fill" />
              </Styled.Icon>

              <div>
                <span>Entrega em <strong>{deliveryDetails.rua}, {deliveryDetails.numero}</strong></span>
                <span>{deliveryDetails.bairro} - {deliveryDetails.cidade}, {deliveryDetails.uf}</span>
              </div>
            </Styled.InfoDetail>

            <Styled.InfoDetail>
              <Styled.Icon variant="time">
                <Timer weight="fill" />
              </Styled.Icon>

              <div>
                <span>Previsão de entrega</span>
                <strong>20 min - 30 min</strong>
              </div>
            </Styled.InfoDetail>

            <Styled.InfoDetail>
              <Styled.Icon variant="payment">
                <CurrencyDollar />
              </Styled.Icon>

              <div>
                <span>Pagamento na entrega</span>
                <strong>{mappedPaymentType}</strong>
              </div>
            </Styled.InfoDetail>

          </Styled.OrderInfo>
        </Styled.OrderInfoWrapper>

        <img src="/assets/Success_Order.svg" alt="Homem em scooter com entrega de cafés na garupa" />
      </Styled.MainSection>
    </Styled.SuccessContainer>
  );
}