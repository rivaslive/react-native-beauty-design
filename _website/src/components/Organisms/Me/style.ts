import styled from 'styled-components';

// components
import Title from 'components/Atoms/Title';

// styles
import { colors, mediaQueries } from 'styles/theme/theme';

export const StyleMe = styled.div`
  margin: 70px auto;
  width: 90%;
  padding: 30px 10px 50px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgb(100, 100, 100, 0.03);

  ${mediaQueries.minTablet} {
    flex-direction: row;
  }
`;

export const StyleImage = styled.div`
  flex: 1 1;
  margin-top: 20px;
  padding-left: 10px;

  .image-profile {
    max-width: 450px;
  }
`;

export const StyleContent = styled.div`
  text-align: center;
  flex: 1 1;

  .color-secondary {
    &.ant-typography {
      color: ${colors.secondary};
    }
  }
`;

export const StyleTitle = styled(Title)`
  &.ant-typography {
    margin-bottom: 0;
    margin-top: 0 !important;
  }
`;
