import React from 'react';
import { AlertProps } from 'antd/lib/alert';

// styles
import { StyleAlert } from './style';

const AlertBanner = (props: AlertProps) => {
  return <StyleAlert {...props} />;
};

export default AlertBanner;
