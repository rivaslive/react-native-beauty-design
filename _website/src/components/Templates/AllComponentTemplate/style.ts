import styled from 'styled-components';
import { mediaQueries } from 'styles/theme/theme';

export const StyleFooterComponent = styled.div`
  margin: 50px 0 0;
  display: flex;
  flex-direction: column;
  justify-content: center;

  ${mediaQueries.minTablet} {
    flex-direction: row;
    justify-content: space-between;
  }
`;
