import { useContext } from "react";
import { MapPinLine } from "phosphor-react";

import { CartContext, DeliveryAddress } from "../../../../contexts/CartContext";

import * as Styled from './styles';

export function DeliveryDetails() {
  const { deliveryDetails, updateDeliveryAddress } = useContext(CartContext);

  function handleInputChange(field: keyof DeliveryAddress, value: string) {
    updateDeliveryAddress(field, value);
  }

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
          value={deliveryDetails.cep}
          onChange={(e) => handleInputChange('cep', e.target.value)}
        />
        <Styled.Input
          type="text"
          placeholder="Rua"
          value={deliveryDetails.rua}
          onChange={(e) => handleInputChange('rua', e.target.value)}
        />

        <Styled.Info>
          <Styled.Input
            type="text"
            placeholder="Número"
            value={deliveryDetails.numero}
            onChange={(e) => handleInputChange('numero', e.target.value)}
          />

          <Styled.InputGroup>
            <Styled.ComplementoInput
              type="text"
              placeholder="Complemento"
              value={deliveryDetails.complemento}
              onChange={(e) => handleInputChange('complemento', e.target.value)}
            />
            <Styled.OptionalText>Opcional</Styled.OptionalText>
          </Styled.InputGroup>
        </Styled.Info>

        <Styled.Info>
          <Styled.Input
            type="text"
            placeholder="Bairro"
            value={deliveryDetails.bairro}
            onChange={(e) => handleInputChange('bairro', e.target.value)}
          />
          <Styled.GrownInput
            type="text"
            placeholder="Cidade"
            value={deliveryDetails.cidade}
            onChange={(e) => handleInputChange('cidade', e.target.value)}
          />
          <Styled.Input
            type="text"
            placeholder="UF"
            maxLength={2}
            minLength={2}
            size={2}
            value={deliveryDetails.uf}
            onChange={(e) => handleInputChange('uf', e.target.value)}
          />
        </Styled.Info>
      </Styled.Form>
    </Styled.DeliveryContainer>
  );
}