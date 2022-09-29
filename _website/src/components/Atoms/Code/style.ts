import styled from 'styled-components';
import { Typography } from 'antd';

export const StyleCode = styled(Typography.Text)`
  &.ant-typography code {
    background-color: rgb(54, 52, 73);
    color: #fcfcfa;
    padding: 7px 10px;
    border-radius: 10px;
  }
`;

export const StyleBlockCode = styled.pre``;
