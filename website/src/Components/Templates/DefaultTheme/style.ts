import { styled } from '@nextui-org/react';

export const WrapperStyle = styled('div', {});

export const ColorStyle = styled('article', {
  transition: 'transform 0.2s ease-out',
  '&:hover': {
    transform: 'translateY(5px)',
    transition: 'transform 0.2s ease-in'
  }
});
