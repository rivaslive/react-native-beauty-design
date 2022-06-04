import styled from 'styled-components';

// components
import Title from 'components/Atoms/Title';

// styles
import { mediaQueries } from 'styles/theme/theme';

export const StyleMe = styled.div`
  margin: 70px auto;
  width: 90%;
  padding: 20px 10px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  ${mediaQueries.minTablet} {
    flex-direction: row;
  }
`;

export const StyleImage = styled.div`
  flex: 1 1;
  margin-top: 20px;
  max-width: 100%;
  text-align: center;

  > div {
    margin: auto;
  }

  .image-profile {
    max-width: 450px;
    margin: auto;
  }
`;

export const StyleContent = styled.div`
  flex: 1 1;
  text-align: left;

  .content {
    margin-top: 10px;
  }

  ${mediaQueries.minTablet} {
    padding-left: 20px;
  }
`;

export const StyleWrapperImages = styled.div`
  display: flex;
  margin-top: 30px;

  .img {
    margin-right: 20px;
  }
`;

export const StyleSponsors = styled.div`
  display: flex;
  margin-top: 30px;

  .img {
    margin-right: 10px;
  }
`;

export const StyleTitle = styled(Title)`
  &.ant-typography {
    margin-bottom: 0;
    margin-top: 10px !important;
  }
`;
