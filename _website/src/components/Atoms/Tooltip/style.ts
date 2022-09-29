import styled, { css } from 'styled-components';
import { Button } from 'antd';

export const StyleContentTooltip = styled.div``;

export const StyleButton = styled(Button)<{ $active: boolean }>`
  margin-bottom: 0;
  padding: 0;
  height: auto;
  display: flex;
  align-items: center;

  .anticon {
    margin-top: 1px;
  }

  ${({ $active }) =>
    $active &&
    css`
      &.ant-btn {
        transform: scale(1.1);
        transition: all 200ms;
        color: rgba(0, 0, 0, 0.85);
        font-weight: bold;
      }
    `}
`;

export const StyleText = styled.div`
  font-size: 12px;
  line-height: 12px;
  height: 12px;
  margin-left: 5px;
`;
