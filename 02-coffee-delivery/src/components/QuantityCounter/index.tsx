import { Minus, Plus } from 'phosphor-react';
import * as Styled from './styles';

interface QuantityCounterProps {
  quantity: number;
  onChange: (step: number) => void;
}

export function QuantityCounter({ quantity, onChange }: QuantityCounterProps) {
  return (
    <Styled.CounterContainer>
      <Styled.CounterButton onClick={() => onChange(-1)}>
        <Minus size={14} />
      </Styled.CounterButton>

      <Styled.Count>{quantity}</Styled.Count>

      <Styled.CounterButton onClick={() => onChange(1)}>
        <Plus size={14} />
      </Styled.CounterButton>
    </Styled.CounterContainer>
  );
}