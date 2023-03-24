import { styled } from '@/styles';

export const CartButtonContainer = styled('button', {
  backgroundColor: '$gray800',
  color: '#8D8D99',
  borderRadius: 6,
  border: 'none',
  padding: '0.75rem',

  variants: {
    empty: {
      false: {
        color: '#C4C4CC',
        cursor: 'pointer',

        '&:hover': {
          filter: 'brightness(1.5)',
        },

        '&::after': {
          position: 'absolute',
          marginTop: -48,
          marginLeft: 16,
          height: 24,
          width: 24,
          backgroundColor: '$green500',
          color: '$white',
          border: '3px solid $gray900',
          borderRadius: 1000,

          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        },
      },
    },
  },
});
