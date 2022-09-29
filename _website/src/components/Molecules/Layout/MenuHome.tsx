import React from 'react';
import Link from 'next/link';

// components

// styles
import {
  StyleMenuHome,
  StyleMenuHomeItem,
} from 'components/Molecules/Layout/style';

export interface MenuItemProps {
  key: string;
  href: string;
  name: string;
}

interface MenuHomeProps {
  items: MenuItemProps[];
}

const MenuHome = ({ items }: MenuHomeProps) => {
  const last = items.length - 1 || 0;
  return (
    <StyleMenuHome mode="horizontal">
      {items.map((i, index: number) => {
        if (last === index) return null;
        if (i.key === 'documentation') {
          return (
            <StyleMenuHomeItem key={i.key}>
              <Link href={i?.href} passHref>
                <a>{i.name}</a>
              </Link>
            </StyleMenuHomeItem>
          );
        }
        return (
          <StyleMenuHomeItem key={i.key}>
            <Link href={i?.href ? i.href : `#${i.key}`}>{i.name}</Link>
          </StyleMenuHomeItem>
        );
      })}
    </StyleMenuHome>
  );
};

/*
{items && items?.length && (
        <Button variant="LANDING_CONTACT_DARK">
          <Link
              href={
                items[last]?.href ? items[last].href : `#${items[last].key}`
              }
            >
              {items[last].name}
            </Link>
        </Button>
      )}
*/

export default MenuHome;
