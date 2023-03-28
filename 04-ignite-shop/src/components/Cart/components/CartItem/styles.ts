import { styled } from '@/styles';

export const ItemContainer = styled('div', {
  display: 'flex',
  gap: '1.25rem',
  alignItems: 'center',
});

export const ImageContainer = styled('div', {
  alignSelf: 'stretch',
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
});

export const ItemDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: '100%',

  span: {
    fontSize: '1.125rem',
    lineHeight: 1.6,

    '&:first-child': {
      color: '$gray300',
    },

    '&:last-of-type': {
      fontWeight: '700',
    },
  },

  button: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '$green500',
    fontWeight: '700',
    lineHeight: 1.6,
    cursor: 'pointer',

    '&:hover': {
      color: '$green300',
    },
  },
});
