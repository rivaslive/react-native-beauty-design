import styled from 'styled-components';

export const StyleWhyCard = styled.div<{ $isExample: boolean }>`
  min-height: 300px;
  padding: ${({ $isExample }) => ($isExample ? '10px 30px' : '30px')};
  border-radius: 16px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const StyleImagen = styled.div<{ $isExample: boolean }>`
  text-align: center;
  width: ${({ $isExample }) => ($isExample ? '100%' : '110px')};
  height: ${({ $isExample }) => ($isExample ? '200px' : '150px')};
  margin: auto;

  .image {
    text-align: center;
    margin: auto;
    width: 100%;
    height: 100%;

    img {
      margin: auto;
    }
  }
`;

export const StyleTitle = styled.h3`
  font-size: 20px;
  line-height: 22px;
`;

export const StyleSummary = styled.p`
  width: 180px;
  margin: auto;
  max-width: 100%;
  font-size: 14px;
  line-height: 20px;
  color: #777777;
`;
