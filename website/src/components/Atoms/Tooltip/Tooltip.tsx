import React from 'react';
import { StyleButton, StyleContentTooltip, StyleText } from './style';

interface TooltipProps {
  title: string;
  active?: boolean;
  text: React.ReactNode;
  icon: React.ReactNode;
  onClick?: () => void;
}

const Tooltip = ({
  text,
  title,
  icon,
  onClick,
  active = false,
}: TooltipProps) => {
  return (
    <StyleButton
      icon={icon}
      type="link"
      title={title}
      onClick={onClick}
      $active={active}
    >
      <StyleContentTooltip>
        <StyleText>{text}</StyleText>
      </StyleContentTooltip>
    </StyleButton>
  );
};

export default Tooltip;
