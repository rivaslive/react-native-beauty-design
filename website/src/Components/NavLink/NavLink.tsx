import { ReactNode } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ItemStyle } from './style';

type NavLinkProps = {
  href: string;
  className?: string;
  activeCss: any;
  children?: ReactNode;
};

const NavLink = ({
  href,
  children,
  className = '',
  activeCss = {}
}: NavLinkProps) => {
  const { pathname } = useRouter();
  const isActive = pathname.startsWith(href);

  return (
    <Link href={href} passHref>
      <ItemStyle
        className={`before:block before:content-[''] before:mr-3 before:bg-zinc-500 before:w-[4px] before:h-[4px] before:rounded ${className}`}
        css={isActive ? activeCss : {}}
      >
        {children}
      </ItemStyle>
    </Link>
  );
};

export default NavLink;