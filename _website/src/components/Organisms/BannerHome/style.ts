import styled from 'styled-components';

// theme
import { mediaQueries } from 'styles/theme/theme';

// components
import Title from 'components/Atoms/Title';

export const StyleBanner = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 150px;
  height: 150px;
  background-image: url('/background-mobile.svg');
  background-size: cover;
  background-position: bottom left;
  background-repeat: no-repeat no-repeat;
  z-index: 1;

  ${mediaQueries.minTablet} {
    background-image: url('/background.svg');
    width: 50%;
    height: 100%;
  }

  ${mediaQueries.minBigTablet} {
    width: 45%;
  }
`;

export const StyleContentTitle = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  z-index: 2;

  ${mediaQueries.minTablet} {
    width: 50%;
  }

  ${mediaQueries.minBigTablet} {
    width: 55%;
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

export const StyleImage = styled.div`
  width: 500px;
  max-width: 100%;
  text-align: center;

  ${mediaQueries.minTablet} {
    text-align: left;
  }
`;

export const StyleFirstSection = styled.div`
  position: relative;
  padding: 50px 20px 0;
  width: 100%;
  min-height: 100vh;

  ${mediaQueries.minTablet} {
    margin-top: -30px;
  }
`;

export const StyleTitle = styled(Title)`
  &.ant-typography {
    width: 500px;
    max-width: 100%;
    font-weight: 800;
    margin-bottom: 10px;
    color: rgba(0, 0, 0, 0.8);
    text-align: center;

    ${mediaQueries.maxTablet} {
      font-size: 55px;
      line-height: 60px;
    }

    ${mediaQueries.minTablet} {
      text-align: left;
    }
  }
`;

export const StyleText = styled.h2`
  width: 500px;
  max-width: 100%;
  font-size: 16px;
  line-height: 20px;
  font-weight: 400;
  color: rgba(100, 100, 100, 0.8);

  ${mediaQueries.minTablet} {
  }
`;
