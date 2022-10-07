import { useContext } from "react";
import { Card } from "../Card";

import { CartContext } from "../../../../contexts/CartContext";

import * as Styled from "./styles";

export function CoffeeList() {
  const { coffees } = useContext(CartContext);

  return (
    <Styled.ListContainer>
      <Styled.Title>Nossos Cafés</Styled.Title>

      <Styled.Cards>
        {coffees.map(coffee => (
          <Card
            key={coffee.id}
            name={coffee.name}
            description={coffee.description}
            price={coffee.price}
            image={coffee.image}
            tags={coffee.tags}
          />
        ))}
      </Styled.Cards>
    </Styled.ListContainer>
  );
}