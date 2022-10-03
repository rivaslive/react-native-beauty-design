import {
  Navbar as NextNavbar,
  Input,
  Text,
  Image,
  Button,
  Grid,
  Badge
} from '@nextui-org/react';
import Link from 'next/link';
import { useTheme as useNextTheme } from 'next-themes';

import ROUTES from '@/config/routes';
import {
  GithubIcon,
  SunIcon,
  SearchIcon,
  DiscordIcon
} from '@/Components/Icons';
import { onlyDesk, onlyMobile } from './style';
import { ReactNode } from 'react';
import Aside from '@/Components/Aside';

type NavbarProps = {
  isActive?: string;
  contentFit?: boolean;
};

type NavbarItemProps = {
  Component: any;
  href: string;
  children: ReactNode;
  [key: string]: any;
};

const RenderItem = ({
  Component,
  href,
  children,
  ...rest
}: NavbarItemProps) => {
  return (
    <Link href={href} passHref>
      <Component {...rest}>{children}</Component>
    </Link>
  );
};

const RenderLink = ({ href, children }: Omit<NavbarItemProps, 'Component'>) => {
  return (
    <Link href={href} passHref>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex justify-center align-center"
      >
        {children}
      </a>
    </Link>
  );
};

const menu = [ROUTES.HOME, ROUTES.DOCS, ROUTES.COMPONENTS, ROUTES.ABOUT];

const Navbar = ({ isActive, contentFit, ...props }: NavbarProps) => {
  const { setTheme, theme } = useNextTheme();

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <NextNavbar
      variant="floating"
      className={contentFit ? 'max-w-8xl mx-auto rounded-2xl' : 'rounded-2xl'}
      css={{
        background: 'transparent'
      }}
      containerCss={{ maxWidth: '100%', borderRadius: '$base' }}
      {...props}
    >
      <Link href={ROUTES.HOME.path} passHref>
        <a>
          <NextNavbar.Brand>
            <Image
              src="/brand.svg"
              alt="Default Image"
              width={50}
              height={50}
            />
            <Badge color="warning" content="Preview" shape="rectangle">
              <Text b className="text-2xl">
                Beauty Design
              </Text>
            </Badge>
          </NextNavbar.Brand>
        </a>
      </Link>
      <NextNavbar.Content css={onlyDesk} variant="underline">
        {menu.map(({ path, name }) => (
          <RenderItem
            href={path}
            key={name}
            Component={NextNavbar.Link}
            itemCss={{ fontWeight: '$bold' }}
            isActive={name === isActive}
          >
            {name}
          </RenderItem>
        ))}

        {/*
        <Link href="/" passHref>
          <NextNavbar.Link itemCss={{ fontWeight: '$bold' }}>
            Templates
          </NextNavbar.Link>
        </Link>
        */}
      </NextNavbar.Content>

      <NextNavbar.Content>
        <NextNavbar.Content css={onlyDesk}>
          <Grid.Container gap={2} className="w-auto">
            <RenderLink href={ROUTES.DISCORD.path}>
              <Button
                auto
                icon={<DiscordIcon />}
                className="h-auto bg-transparent text-2xl"
                css={{
                  color: '$text'
                }}
              />
            </RenderLink>

            <RenderLink href={ROUTES.GITHUB.path}>
              <Button
                auto
                icon={<GithubIcon />}
                className="h-auto bg-transparent text-2xl"
                css={{
                  color: '$text'
                }}
              />
            </RenderLink>
            <Button
              auto
              onClick={toggleTheme}
              icon={<SunIcon />}
              className="h-auto bg-transparent text-2xl"
              css={{
                color: '$text'
              }}
            />
          </Grid.Container>
          <Input
            bordered
            placeholder="Search..."
            contentRight={<SearchIcon />}
          />
        </NextNavbar.Content>

        <Grid.Container css={onlyMobile} gap={2}>
          <RenderLink href={ROUTES.DISCORD.path}>
            <Button
              auto
              icon={<DiscordIcon />}
              className="h-auto bg-transparent text-2xl"
              css={{
                color: '$text'
              }}
            />
          </RenderLink>
          <RenderLink href={ROUTES.GITHUB.path}>
            <Button
              auto
              icon={<GithubIcon />}
              className="h-auto bg-transparent text-2xl"
              css={{
                color: '$text'
              }}
            />
          </RenderLink>
          <Button
            auto
            onClick={toggleTheme}
            icon={<SunIcon />}
            className="h-auto bg-transparent text-2xl"
            css={{
              color: '$text'
            }}
          />
          <NextNavbar.Toggle aria-label="toggle navigation" />
        </Grid.Container>

        <NextNavbar.Collapse css={{ background: '$background' }}>
          <NextNavbar.CollapseItem></NextNavbar.CollapseItem>
          <NextNavbar.CollapseItem className="w-full">
            <Input
              bordered
              css={{ width: '100%' }}
              placeholder="Search..."
              contentRight={<SearchIcon />}
            />
          </NextNavbar.CollapseItem>

          <Aside titleClass="mt-3" />
        </NextNavbar.Collapse>
      </NextNavbar.Content>
    </NextNavbar>
  );
};

export default Navbar;
