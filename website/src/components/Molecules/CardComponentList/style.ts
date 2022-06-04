import styled from 'styled-components';
import { colors } from 'styles/theme/theme';

export const StyleIcon = styled.div`
  height: 100%;
  width: 100px;
  position: absolute;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  top: 0;
  right: 0;
  padding: 10px;
  border-radius: 14px;

  i.bx {
    color: ${colors.black};
    transition: color 250ms;
    font-size: 35px;
    opacity: 0.6;
  }

  .bx-burst-hover {
    background: red !important;
  }
`;

export const StyleCard = styled.div`
  position: relative;
  padding: 20px;
  border-radius: 14px;
  cursor: pointer;
  background-color: #f1f1f1;

  .ant-typography {
    opacity: 0.8;
  }

  &:hover {
    box-shadow: rgb(0 0 0 / 20%) 0 5px 20px -5px;

    ${StyleIcon} {
      i.bx {
        transform: scale(1.3);
      }
    }
  }
`;
