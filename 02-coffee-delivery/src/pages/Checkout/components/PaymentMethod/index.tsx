import { Bank, CreditCard, Money } from 'phosphor-react';
import * as Styled from './styles';

export type TypeOfPayment = 'credit' | 'debit' | 'cash';

interface PaymentMethodProps {
  label: string;
  type: TypeOfPayment;
  onSelect: (value: TypeOfPayment) => void;
}

interface IconProps {
  paymentType: TypeOfPayment;
}

export function PaymentMethod({ label, type, onSelect }: PaymentMethodProps) {
  const icon = {
    credit: <CreditCard size={16} />,
    debit: <Bank size={16} />,
    cash: <Money size={16} />
  };

  const Icon = ({ paymentType }: IconProps) => icon[paymentType];

  return (
    <Styled.MethodContainer>
      <input
        type="radio"
        name="paymentMethod"
        value={type}
        onChange={(e) => onSelect(e.target.value as TypeOfPayment)}
      />
      <Icon paymentType={type} />
      <span>{label}</span>
    </Styled.MethodContainer>
  );
}