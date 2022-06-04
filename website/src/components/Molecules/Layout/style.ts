import styled from 'styled-components';

// components
import { Button, Input, Layout, Menu } from 'antd';
import Title from 'components/Atoms/Title';

// styles
import { colors, mediaQueries } from 'styles/theme/theme';

const { Header, Sider, Content } = Layout;

export const StyleLayout = styled(Layout)`
  overflow: hidden;
`;

export const StyleHead = styled(Header)<{
  $isHome: boolean;
  $isHome2: boolean;
}>`
  position: ${({ $isHome, $isHome2 }) =>
    $isHome || $isHome2 ? 'sticky' : 'absolute'};
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: saturate(180%) blur(10px);
  box-shadow: ${({ $isHome }) =>
    $isHome ? 'none' : 'rgb(2 1 1 / 10%) 0px 5px 20px -5px'};
  width: 100%;
  padding: ${({ $isHome2 }) => ($isHome2 ? '0' : '5px 0')};
  top: 0;
  transition: padding-top 350ms;
  z-index: 10;
`;

export const StyleHeadContent = styled.div<{ $isHome: boolean }>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;

  ${mediaQueries.minTablet} {
    padding: 5px 20px;
  }
`;

export const StyleHeadBody = styled.div`
  display: flex;
  align-items: center;
`;

export const StyleCollapseSider = styled.div`
  display: block;
  cursor: pointer;
  line-height: 0;

  .anticon svg {
    width: 22px;
    height: 22px;
  }

  ${mediaQueries.minTablet} {
    display: none;
  }
`;

export const StyleBrand = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  margin-left: 10px;

  ${mediaQueries.minTablet} {
    margin-left: 0;
  }
`;

export const StyleBrandLink = styled.a`
  display: flex;
  align-items: center;
  height: inherit;
`;

export const ButtonGithub = styled(Button)`
  margin: 0;
  padding: 0;
  border: none;
  font-size: 32px;
  line-height: 0;
  background-color: transparent;

  .anticon {
    svg {
      width: 27px;
      height: 27px;
    }
  }
`;

export const StyleTitle = styled(Title)`
  &.ant-typography {
    margin-top: 0 !important;
    margin-bottom: 0;
    font-size: 18px;

    ${mediaQueries.minTablet} {
      font-size: 24px;
    }
  }
`;

export const StyleInputSearch = styled(Input)`
  display: none;
  width: 250px;
  max-width: 100%;
  border-radius: 8px;
  background-color: rgba(234, 234, 234, 0.7);
  border: none;
  box-shadow: none;

  &:hover,
  &:active,
  &:focus {
    box-shadow: 0 2px 8px #f0f1f2;
  }

  ${mediaQueries.minTablet} {
    display: block;
  }
`;

export const StyleSider = styled(Sider)`
  &.ant-layout-sider {
    .ant-menu-inline,
    .ant-menu-vertical,
    .ant-menu-vertical-left {
      border-right: none;
    }

    .ant-layout-sider-zero-width-trigger {
      display: none;
    }

    .ant-layout-sider-children {
      margin-top: 64px;
      height: calc(100vh - 64px);
      overflow-y: auto;
      scrollbar-width: none;

      &::-webkit-scrollbar {
        width: 0;
      }

      &::-webkit-scrollbar-thumb {
        background-color: transparent;
      }

      .ant-menu.ant-menu-root {
        padding: 0 5px 0 10px;
      }

      .ant-menu-item {
        border-radius: 12px;
      }
    }
  }

  .ant-menu-title-content {
    font-size: 14px;
  }

  .ant-menu-item-group-title {
    padding: 8px 16px;
    color: #00000073;
    margin-top: 16px;
    margin-bottom: 16px;
    padding-left: 25px !important;
    line-height: 1.5715;
    transition: all 0.3s;
    font-size: 13px;

    &:after {
      position: relative;
      top: 12px;
      display: block;
      width: calc(100% - 20px);
      height: 1px;
      background: #f0f0f0;
      content: '';
      transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    }
  }

  .ant-menu-item.ant-menu-item-selected {
    background: rgba(2, 164, 157, 0.08);

    &:after {
      border-right: 3px solid ${colors.primary};
    }

    .ant-menu-title-content {
      * {
        color: ${colors.primary};
      }
    }
  }

  //Hover
  .ant-menu-item.ant-menu-item-active {
    .ant-menu-title-content {
      &:hover {
        * {
          color: ${colors.primary};
        }
      }
    }
  }
`;

export const StyleContent = styled(Content)`
  position: relative;
  display: flex;
  height: 100vh;
  flex: 0 0 100%;
  padding: 0;
  background: white;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;

  ${mediaQueries.minTablet} {
    padding: 10px 0 10px 25px;
    flex: 0 0 calc(100% - 250px);
    transition: all 500ms;

    &.collapsed {
      transition: all 500ms;
      flex: 0 0 100%;
    }
  }
`;

export const StyleBody = styled.div`
  width: 100%;

  &:before {
    content: '';
    display: block;
    height: 64px;
    width: 100%;
  }

  ${mediaQueries.minTablet} {
    width: calc(100% - 140px);
    padding-right: 25px;
  }
`;

export const StyleSpace = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  padding-bottom: 20px;

  a {
    margin-left: 5px;
  }
`;

export const StyleIndice = styled.div`
  display: none;
  position: sticky;
  right: 0;
  top: 64px;
  height: fit-content;
  width: 250px;
  padding: 10px 20px 10px 0;

  ${mediaQueries.minTablet} {
    display: block;
  }
`;

export const StyleIndiceElement = styled(Button)`
  &.ant-btn {
    position: relative;
    width: 100%;
    text-align: left;
    margin-left: 25px;
    font-size: 13px;
    color: #444444;
    cursor: pointer;
    padding: 0 0 0 20px;
    background-color: transparent;
    border: none;
    height: auto;
    text-transform: capitalize;
    box-shadow: none;
    transition: opacity 150ms;

    span {
      font-size: 13px;
    }

    &:hover,
    &:active,
    &:focus {
      opacity: 0.8;
    }

    &.active {
      font-weight: 700;
    }
  }
`;

export const ActiveStyle = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  margin: auto;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  background-color: ${colors.black};
`;

export const StyleAsideFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  height: 75px;
  width: 100%;
`;

export const StyleMenuHome = styled(Menu)`
  &.ant-menu {
    display: none;
    width: 475px;
    max-width: 100%;
    justify-content: flex-end;

    ${mediaQueries.minTablet} {
      display: flex;
      justify-content: center;
      flex: 1;
    }

    &.ant-menu-horizontal {
      border-bottom: 0;
      background: transparent;

      .ant-menu-item {
        color: rgb(100, 100, 100);
        font-weight: 600;
      }

      .ant-menu-item.ant-menu-item-selected {
        &:after {
          border-color: transparent;
        }

        .ant-menu-title-content {
          * {
            color: ${colors.primary};
          }
        }
      }

      //Hover
      .ant-menu-item.ant-menu-item-active {
        &:after {
          border-color: transparent;
        }

        .ant-menu-title-content {
          &:hover {
            * {
              color: ${colors.primary};
            }
          }
        }
      }
    }
  }
`;

export const StyleMenuHomeItem = styled(Menu.Item)``;
