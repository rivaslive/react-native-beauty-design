import React from 'react';

import { IButtonProps, StyleButton } from './style';

const Button = ({
  children,
  variant = 'LANDING_GRADIENT_CIAN',
  ...rest
}: IButtonProps) => {
  return (
    <StyleButton $variant={variant} {...rest}>
      {children}
    </StyleButton>
  );
};

export default React.memo(Button);
