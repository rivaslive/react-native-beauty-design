import React from 'react';
import { Badge } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { CloseOutlined, GithubOutlined, MenuOutlined } from '@ant-design/icons';

// brand
import { repoUrl } from 'utils/getGithub';
import Brand from 'public/favicon.png';

// components
import ThemeButton from 'components/Molecules/ThemeButton';
import { MenuItemProps } from 'components/Molecules/Layout/MenuHome';

// styles
import {
  ButtonGithub,
  StyleBrand,
  StyleBrandLink,
  StyleCollapseSider,
  StyleHead,
  StyleHeadBody,
  StyleHeadContent,
  StyleInputSearch,
  StyleTitle,
} from './style';

const MenuHome = dynamic(import('./MenuHome'), { ssr: false });

interface IProps {
  isHome?: boolean;
  isSolid?: boolean;
  collapse?: boolean;
  onCollapse?: () => void;
  menu?: {
    name: string;
    key: string;
  }[];
}

const Navbar = ({
  onCollapse,
  collapse,
  isSolid = false,
  isHome = false,
  menu,
}: IProps) => {
  return (
    <StyleHead $isHome={isSolid} $isHome2={isHome} theme="light">
      <StyleHeadContent $isHome={isSolid}>
        <StyleHeadBody>
          {!isHome && (
            <StyleCollapseSider onClick={onCollapse}>
              {collapse ? <MenuOutlined /> : <CloseOutlined />}
            </StyleCollapseSider>
          )}
          <Link href="/" passHref>
            <StyleBrandLink>
              <Badge count="BETA" offset={[20, 10]}>
                <StyleBrand>
                  <Image
                    src={Brand}
                    height={30}
                    width={40}
                    alt=""
                    objectFit="contain"
                  />
                  <StyleTitle variant="ROBOT_24_28_500">
                    Beauty Design
                  </StyleTitle>
                </StyleBrand>
              </Badge>
            </StyleBrandLink>
          </Link>
        </StyleHeadBody>
        {!isHome ? (
          <StyleInputSearch
            placeholder="Search..."
            bordered={false}
            size="large"
          />
        ) : (
          <MenuHome items={menu as MenuItemProps[]} />
        )}

        {/* Github */}
        <a href={repoUrl} target="_blank" rel="noreferrer noopener">
          <ButtonGithub icon={<GithubOutlined />} />
        </a>
      </StyleHeadContent>
    </StyleHead>
  );
};

export default Navbar;
