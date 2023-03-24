import { styled } from '@/styles';
import * as Dialog from '@radix-ui/react-dialog';

export const CartContent = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  height: '100vh',
  width: '30rem',

  backgroundColor: '$gray800',
  boxShadow: '-4px 0 30px rgb(0, 0, 0, 0.8)',

  display: 'flex',
  flexDirection: 'column',
});

export const Title = styled(Dialog.Title, {});

export const DialogClose = styled(Dialog.Close, {
  alignSelf: 'flex-end',
  margin: '1.5rem',
});

export const Body = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  margin: '0 3rem',
});

export const Footer = styled('footer', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.125rem',
  margin: '3rem',
});

export const CheckoutInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  color: '$gray100',
  lineHeight: 1.6,
});

export const CartQuantity = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
});

export const CartTotal = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '1.125rem',
  fontWeight: 'bold',
});

export const PurchaseButton = styled('button', {
  backgroundColor: '$green500',
  color: '$white',
  border: 'none',
  borderRadius: 8,
  padding: '1.25rem 2rem',
  cursor: 'pointer',

  fontSize: '1.125rem',
  fontWeight: 'bold',
  lineHeight: 1.6,

  transition: 'background-color 0.2s',

  '&:hover': {
    backgroundColor: '$green300',
  },
});
