import styled from 'styled-components';

// theme
import { colors, mediaQueries } from 'styles/theme/theme';

// components
import Title from 'components/Atoms/Title';

export const StyleContentTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 90px;
  z-index: 2;

  ${mediaQueries.minTablet} {
    width: 50%;
  }
`;

export const StyleCTA = styled.div`
  width: 500px;
  max-width: 100%;
  margin-top: 10px;
  text-align: center;

  ${mediaQueries.minTablet} {
    text-align: left;
  }
`;

export const StyleSeccondSection = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 10px 0;
  width: 100%;
  min-height: 100vh;
`;

export const StyleBanner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background-image: url('/background-2.svg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat no-repeat;
  z-index: 1;
`;

export const StyleTitle = styled(Title)`
  &.ant-typography {
    width: 500px;
    max-width: 100%;
    font-weight: 800;
    margin-top: 0 !important;
    margin-bottom: 10px;
    text-align: center;
    color: rgba(0, 0, 0, 0.8);

    ${mediaQueries.minTablet} {
      font-size: 50px;
      line-height: 60px;
    }
  }
`;

export const StyleSubTitle = styled(Title)`
  &.ant-typography {
    max-width: 100%;
    font-size: 16px;
    line-height: 20px;
    font-weight: 400;
    margin-bottom: 0;
    text-align: center;
    color: ${colors.secondary};
    text-transform: capitalize;
  }
`;

export const StyleContentSlick = styled.div`
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 90px;
  z-index: 2;

  ${mediaQueries.minTablet} {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const StyleText = styled.h2`
  width: 500px;
  max-width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  text-align: center;
  color: rgba(100, 100, 100, 0.8);
`;
