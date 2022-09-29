import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

// utils
import { getIdComponent } from 'utils/getIdComponent';

// menu
import * as menuData from 'assets/menu';

// components
import Container from 'components/Atoms/Container';
import Title from 'components/Atoms/Title';
import Navbar from './Navbar';

// styles
import {
  ActiveStyle,
  StyleAsideFooter,
  StyleBody,
  StyleContent,
  StyleIndice,
  StyleIndiceElement,
  StyleLayout,
  StyleSider,
  StyleSpace,
} from './style';

const MenuPages = dynamic(() => import('./Menu'), { ssr: false });

type VersionType = keyof typeof menuData;

interface ElementProps {
  id: string;
  title: string;
}

interface IProps {
  children: React.ReactNode;
  noIndice?: boolean;
  data?: {
    howToUse?: string;
    ejemplos: ElementProps[];
    apis: ElementProps[];
  };
}

const defaultData = { ejemplos: [], apis: [] };

const Layout = ({ children, noIndice = false, data = defaultData }: IProps) => {
  const { pathname, query, asPath } = useRouter();
  const version = query?.version;
  const component = query?.component;
  const [isOpenMenu, setIsOpenMenu] = useState<boolean>(true);
  const [selectedKey, setSelectedKey] = useState<string>('get-started');
  const [selectIndice, setSelectedIndice] = useState<string>('');
  const [collapseClass, setCollapseClass] = useState<string>('');

  const onCollapse = () => {
    setIsOpenMenu((prev) => {
      const collapsed = !prev;
      const newClass = collapsed ? 'collapsed' : '';
      setCollapseClass(newClass);
      return collapsed;
    });
  };

  const indiceList = useMemo(() => {
    const apis = data?.apis?.length ? [{ id: 'api', title: 'API' }] : [];
    const out = [
      ...(data?.ejemplos?.filter((f) => f.title) || []),
      ...apis,
      ...(data?.apis?.filter((f) => f.title) || []),
    ];
    if (data.howToUse) {
      out.unshift({
        id: 'How-to-use?',
        title: 'How to use?',
      });
    }
    return out;
  }, [data]);

  React.useEffect(() => {
    if (version) {
      menuData[version as VersionType].forEach((item) => {
        item.children.forEach((c) => {
          const isActive = component === c.key || pathname.endsWith(c.key);
          if (isActive) {
            const content = document.querySelector('#content');
            content?.scrollTo({ top: 0, behavior: 'smooth' });
            setSelectedKey(c.key);
          }
        });
      });
    }
  }, [component, version, pathname]);

  React.useEffect(() => {
    indiceList.forEach((i) => {
      const title = getIdComponent(i.title);
      if (asPath.endsWith(`#${title}`)) {
        setSelectedIndice(i.title);
      }
    });
  }, [asPath, indiceList]);

  if (!version) return null;

  return (
    <StyleLayout>
      <Navbar collapse={isOpenMenu} onCollapse={onCollapse} />
      <StyleLayout>
        {/* Aside */}
        <StyleSider
          width={250}
          theme="light"
          breakpoint="lg"
          collapsedWidth="0"
          onCollapse={onCollapse}
          collapsed={isOpenMenu}
        >
          <MenuPages
            version={version}
            onSelectKey={setSelectedKey}
            selectedKey={selectedKey}
          />
          <StyleAsideFooter />
        </StyleSider>
        {/* End Aside */}

        <StyleContent id="content" className={collapseClass}>
          {/* content children */}
          <StyleBody>
            <Container withTopPadding={false}>{children}</Container>
            <StyleSpace>
              © Copyright 2022 Beauty Design Created by
              <a
                href="https://kevin-rivas.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kevin Rivas
              </a>
            </StyleSpace>
          </StyleBody>
          {/* end content children */}

          {/* Indice */}
          <StyleIndice>
            {!noIndice && (
              <>
                <Title variant="ROBOT_19_29_600">Contents</Title>
                {indiceList.map((i, index) => (
                  <Link
                    passHref
                    key={`indice-${index}`}
                    href={`#${getIdComponent(i.title)}`}
                  >
                    <a>
                      <StyleIndiceElement
                        className={selectIndice === i.title ? 'active' : ''}
                      >
                        {selectIndice === i.title && <ActiveStyle />}
                        {i.title}
                      </StyleIndiceElement>
                    </a>
                  </Link>
                ))}
              </>
            )}
          </StyleIndice>
          {/* End Indice */}
        </StyleContent>
      </StyleLayout>
    </StyleLayout>
  );
};

export default Layout;
