import styled from 'styled-components';
import { mediaQueries } from 'styles/theme/theme';

export const StyleExample = styled.div`
  position: relative;
  display: inline-block;
  scroll-margin-top: 80px;
  width: 100%;
  margin: 0 0 16px;
  border-radius: 14px;
  transition: all 0.2s;
`;

export const StyleFirstSection = styled.div`
  text-align: center;
  width: 100%;

  ${mediaQueries.minTablet} {
    padding: 0 24px 50px;
    width: 50%;
  }
`;

export const StyleFrameImage = styled.div`
  position: relative;
  width: 219px;
  height: 451px;
  padding: 12px;
  margin: auto;

  .img,
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
  }

  .video-js {
    height: 100%;
    border-radius: 25px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/frame.png');
    background-size: contain;
    background-repeat: no-repeat no-repeat;
  }
`;

export const StyleSecondSection = styled.div`
  padding: 0;
  margin-top: 20px;

  .title {
    background: white;
    padding: 0 5px;
  }
`;

export const StyleTitle = styled.div`
  width: fit-content;
  margin-top: -15px;
`;

export const StyleContent = styled.div`
  align-items: flex-start;

  ${mediaQueries.minTablet} {
    display: flex;
  }
`;

export const StyleCode = styled.div`
  margin-bottom: 30px;

  ${mediaQueries.minTablet} {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const StyleFooter = styled.div`
  text-align: center;
  padding: 14px 24px;
  background: rgb(54, 52, 73);
  border-radius: 14px;
  box-shadow: rgb(0 0 0 / 20%) 0px 5px 20px -5px;
`;

export const StyleSpace = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button.ant-btn {
    padding: 0;
    margin: 0;
    color: white;
    transition: all 200ms;

    &:hover,
    &:active,
    &:focus {
      color: white !important;
      transform: scale(1.1);
      transition: all 200ms;
    }
  }
`;

export const StyleShowCode = styled.div`
  border-top: 1px dashed #f0f0f0;
  padding: 10px 0;
  opacity: 0;
  position: absolute;
  transition: opacity 350ms;

  &.show {
    position: relative;
    opacity: 1;
  }
`;

export const StyleWrapperPlay = styled.div`
  position: absolute;
  cursor: pointer;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  z-index: 2;
`;

export const StylePlay = styled.div`
  width: 40px;
  height: 40px;
  background: url('/player.png') no-repeat no-repeat center center;
  background-size: contain;

  &.d-none {
    display: none;
  }
`;

export const StyleReload = styled.div`
  margin-top: 10px;
  width: 40px;
  height: 40px;
  background: url('/reload.png') no-repeat no-repeat center center;
  background-size: contain;

  &.d-none {
    display: none;
  }

  .anticon {
    color: #cccccc;
    font-size: 30px;
  }
`;

export const StyleImage = styled.img<{ $src: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: ${({ $src }) => ($src ? 'block' : 'none')};
`;
