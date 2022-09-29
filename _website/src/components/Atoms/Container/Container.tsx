import { CSSProperties, ReactNode } from 'react';

// styles
import { StyleContainer } from './style';

export interface ContainerProps {
  children: ReactNode;
  className?: string;
  withTopPadding?: boolean;
  style?: CSSProperties;
  id?: string;
}

function Container({
  children,
  id,
  style,
  className,
  withTopPadding = true,
}: ContainerProps) {
  return (
    <StyleContainer
      $withTopPadding={withTopPadding}
      id={id}
      className={className}
      style={style}
    >
      {children}
    </StyleContainer>
  );
}

export default Container;
