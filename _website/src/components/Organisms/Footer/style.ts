import styled from 'styled-components';
import { mediaQueries } from 'styles/theme/theme';
import { Button } from 'antd';

export const StyleFooter = styled.div`
  padding: 20px;
  background: rgb(100, 100, 100, 0.03);

  ${mediaQueries.minTablet} {
    padding: 50px;
  }
`;

export const StyleButton = styled(Button)`
  &.ant-btn {
    padding: 0;
    margin: 0;
    color: #444444;
    font-size: 16px;
    font-weight: 600;
  }
`;
