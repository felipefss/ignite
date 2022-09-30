import { Bank, CreditCard, Money } from 'phosphor-react';
import * as Styled from './styles';

type PaymentType = 'credit' | 'debit' | 'cash';

interface PaymentMethodProps {
  label: string;
  type: PaymentType;
}

interface IconProps {
  paymentType: PaymentType;
}

export function PaymentMethod({ label, type }: PaymentMethodProps) {
  const icon = {
    credit: <CreditCard size={16} />,
    debit: <Bank size={16} />,
    cash: <Money size={16} />
  };

  const Icon = ({ paymentType }: IconProps) => icon[paymentType];

  return (
    <Styled.MethodContainer>
      <input type="radio" name="paymentMethod" />
      <Icon paymentType={type} />
      <span>{label}</span>
    </Styled.MethodContainer>
  );
}