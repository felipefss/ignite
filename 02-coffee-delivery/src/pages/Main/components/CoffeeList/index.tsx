import { Card } from "../Card";

import * as Styled from "./styles";

export function CoffeeList() {
  return (
    <Styled.ListContainer>
      <Styled.Title>Nossos Cafés</Styled.Title>

      <Styled.Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Styled.Cards>
    </Styled.ListContainer>
  );
}