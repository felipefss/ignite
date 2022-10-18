import { Bank, CreditCard, Money } from 'phosphor-react';
import { ChangeEvent, InputHTMLAttributes } from 'react';
import * as Styled from './styles';

export type TypeOfPayment = 'credit' | 'debit' | 'cash';

interface PaymentMethodProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: TypeOfPayment;
}

interface IconProps {
  paymentType: TypeOfPayment;
}

export function PaymentMethod({ label, type, ...props }: PaymentMethodProps) {
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
        {...props}
      />
      <Icon paymentType={type} />
      <span>{label}</span>
    </Styled.MethodContainer>
  );
}