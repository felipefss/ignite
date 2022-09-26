import { Minus, Plus } from 'phosphor-react';
import * as Styled from './styles';

export function QuantityCounter() {
  return (
    <Styled.CounterContainer>
      <Styled.CounterButton><Minus size={14} /></Styled.CounterButton>
      <Styled.Count>1</Styled.Count>
      <Styled.CounterButton><Plus size={14} /></Styled.CounterButton>
    </Styled.CounterContainer>
  );
}