import menu from '@/assets/v1.json';
import * as icons from '@/Components/Icons';
import NavLink from '@/Components/NavLink';

import { CollapseItemStyle, CollapseStyle } from './style';

const RenderIcon = ({ Component }: { Component?: any }) => {
  if (!Component) return null;
  return <Component className="text-xl" />;
};

const Aside = () => {
  return (
    <>
      {menu.map(({ children, name, key, icon }) => {
        return (
          <CollapseStyle
            shadow
            key={key}
            animated={false}
            divider={false}
            className="p-0 bg-transparent shadow-none"
          >
            <CollapseItemStyle
              expanded
              title={name}
              // @ts-ignore
              contentLeft={<RenderIcon Component={icons[icon]} />}
            >
              {children.map(({ key, name, path }) => {
                return (
                  <NavLink
                    key={key}
                    href={path}
                    activeCss={{
                      color: '$text !important',
                      fontWeight: '$bold'
                    }}
                    className="text-neutral-400"
                  >
                    {name}
                  </NavLink>
                );
              })}
            </CollapseItemStyle>
          </CollapseStyle>
        );
      })}

      <div className="h-20 w-full" />
    </>
  );
};

export default Aside;
