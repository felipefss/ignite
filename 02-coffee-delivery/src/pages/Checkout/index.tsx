import { DeliveryDetails } from "./components/DeliveryDetails";

export function Checkout() {
  return (
    <div>
      <div>
        <h2>Complete seu pedido</h2>
        <DeliveryDetails />
      </div>
    </div>
  );
}