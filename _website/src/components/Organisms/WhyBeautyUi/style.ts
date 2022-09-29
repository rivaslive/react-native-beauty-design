import styled from 'styled-components';

// theme
import { colors, mediaQueries } from 'styles/theme/theme';

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
  padding: 20px 0;
  width: 100%;
  height: 100vh;
  margin-top: 100px;

  ${mediaQueries.minTablet} {
    margin-top: 50px;
  }

  &:before {
    content: '';
    position: absolute;
    width: 140px;
    height: 150px;
    border-radius: 100%;
    background: ${colors.secondary};
    top: 30px;
    left: -40px;
    opacity: 0.5;
  }

  &:after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    border-radius: 100%;
    background: ${colors.primary};
    bottom: 30%;
    right: 40px;
    opacity: 0.3;
  }

  .active .slick-center {
    .why-card {
      box-shadow: 0 6px 12px 0 rgba(100, 100, 100, 0.2);
      transform: scale(1.05);
      transition: all 350ms;

      ${mediaQueries.minTablet} {
        transform: scale(1.2);
      }
    }
  }
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
  width: 850px;
  max-width: 100%;
  display: block;
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
