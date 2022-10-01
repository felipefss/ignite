import { MapPinLine } from "phosphor-react";

import * as Styled from './styles';

export function DeliveryDetails() {
  return (
    <Styled.DeliveryContainer>
      <Styled.Header>
        <MapPinLine size={22} />

        <Styled.Title>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </Styled.Title>
      </Styled.Header>

      <Styled.Form>
        <Styled.Input
          type="text"
          placeholder="CEP"
          maxLength={9}
          minLength={9}
          size={9}
          width={12.75}
        />
        <Styled.Input type="text" placeholder="Rua" />

        <Styled.Info>
          <Styled.Input type="text" placeholder="Número" />

          <Styled.InputGroup>
            <Styled.ComplementoInput type="text" placeholder="Complemento" />
            <Styled.OptionalText>Opcional</Styled.OptionalText>
          </Styled.InputGroup>
        </Styled.Info>

        <Styled.Info>
          <Styled.Input type="text" placeholder="Bairro" />
          <Styled.GrownInput type="text" placeholder="Cidade" />
          <Styled.Input type="text" placeholder="UF" maxLength={2} minLength={2} size={2} />
        </Styled.Info>
      </Styled.Form>
    </Styled.DeliveryContainer>
  );
}