import { MapPinLine } from "phosphor-react";

export function DeliveryDetails() {
  return (
    <section>
      <div>
        <MapPinLine />

        <div>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </div>
      </div>

      <div>
        <input type="text" placeholder="CEP" />
        <input type="text" placeholder="Rua" />

        <div>
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Complemento" />
        </div>

        <div>
          <input type="text" placeholder="Bairro" />
          <input type="text" placeholder="Cidade" />
          <input type="text" placeholder="UF" maxLength={2} minLength={2} />
        </div>
      </div>
    </section>
  );
}