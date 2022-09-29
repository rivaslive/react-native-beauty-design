import React from 'react';

// styles
import { StyleCode } from './style';

interface CodeProps {
  children?: React.ReactNode;
  copiable?: boolean;
  code?: boolean;
}

const Code = ({ children, copiable = true, code = true }: CodeProps) => {
  return (
    <StyleCode code={code} copyable={copiable}>
      {children}
    </StyleCode>
  );
};

export default Code;
