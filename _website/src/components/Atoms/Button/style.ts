import styled, { css } from 'styled-components';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

// styles
import { colors } from 'styles/theme/theme';

export type VariantButtons = 'LANDING_GRADIENT_CIAN' | 'LANDING_CONTACT_DARK';

export interface IButtonProps extends ButtonProps {
  variant?: VariantButtons;
}

interface IProps extends ButtonProps {
  $variant: VariantButtons;
}

const cssVariants = {
  LANDING_CONTACT_DARK: css`
    border-radius: 20px;
    background: ${colors.secondary};
    border: 1px solid transparent;
    color: white;
    &:hover {
      box-shadow: 2px 2px 12px 0 ${colors.secondary};
    }
  `,
  LANDING_GRADIENT_CIAN: css`
    height: auto;
    padding: 12px 30px;
    border-radius: 12px;
    border-color: transparent;
    background: ${colors.primary};

    &:hover {
      box-shadow: 2px 2px 12px 0 ${colors.primary};
    }
  `,
};

export const StyleButton = styled(Button)<IProps>`
  &.ant-btn {
    ${({ $variant }) => cssVariants[$variant]}
  }
`;
