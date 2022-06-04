import styled from 'styled-components';
import Title from 'components/Atoms/Title';
import { colors } from 'styles/theme/theme';

export const StyleNext = styled.div`
  display: inline-block;
  padding: 3px 10px;
  height: fit-content;
  margin-bottom: 20px;
  max-width: 100%;
  border-radius: 12px;
  cursor: pointer;
  transition: background-color 200ms;

  .text {
    opacity: 0.7;
    font-weight: 600;
  }

  &:hover {
    background-color: #eaeaea;
    .text {
      opacity: 1;
    }
  }
`;

export const StyleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text {
    margin: 0;
  }
`;

export const StyleIcon = styled.div`
  .anticon {
    margin-left: 10px;
    margin-right: 10px;
    color: ${colors.primary};
  }
`;

export const StyleTitle = styled(Title)`
  &.ant-typography {
    margin-bottom: 0;
  }
`;
