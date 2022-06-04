import styled from 'styled-components';
import { mediaQueries } from 'styles/theme/theme';

export const StyleContainer = styled.div<{ $withTopPadding: boolean }>`
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  padding: ${({ $withTopPadding }) =>
    $withTopPadding ? '75px 15px' : '0 15px'};

  ${mediaQueries.minTablet} {
    max-width: 750px;
  }

  ${mediaQueries.minDesktop} {
    max-width: 1170px;
  }
`;
