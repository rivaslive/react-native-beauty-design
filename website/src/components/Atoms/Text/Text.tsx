import React from 'react';
import { ITextProps, StyleText } from './style';

const Text = ({
  children,
  html,
  variant = 'ROBOT_16_22_400',
  color = '',
  ...rest
}: ITextProps) => {
  if (html) {
    return (
      <StyleText
        $color={color}
        $variant={variant}
        {...rest}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return (
    <StyleText $color={color} $variant={variant} {...rest}>
      {children}
    </StyleText>
  );
};

export default Text;
