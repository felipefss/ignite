import axios from "axios";
import { useEffect, useState } from "react";

import { Card } from "../Card";

import * as Styled from "./styles";

const BASE_URL = 'http://localhost:3000/coffees';

export interface ICoffee {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  tags: string[];
}

export function CoffeeList() {
  const [coffees, setCoffees] = useState<ICoffee[]>([]);

  useEffect(() => {
    axios.get<ICoffee[]>(BASE_URL).then(({ data }) => {
      setCoffees(data);
    });
  }, []);

  return (
    <Styled.ListContainer>
      <Styled.Title>Nossos Cafés</Styled.Title>

      <Styled.Cards>
        {coffees.map(coffee => (
          <Card
            key={coffee.id}
            id={coffee.id}
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