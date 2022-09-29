import { ReactNode } from 'react';
import { Text } from '@nextui-org/react';

import Aside from '@/Components/Aside';
import Footer from '@/Components/Footer';
import {
  AsideStyle,
  WrapperStyle,
  ContentStyle,
  BodyStyle,
  BreadStyle
} from './style';

type LayoutProps = {
  children?: ReactNode;
  css?: any;
};

const LayoutContainer = ({ children, ...props }: LayoutProps) => {
  return (
    <WrapperStyle
      className="relative max-w-8xl mx-auto px-4 sm:px-6 md:px-8"
      {...props}
    >
      <AsideStyle className="hidden lg:block fixed z-20 inset-0 top-[88px] left-[max(0px,calc(50%-45rem))] right-auto w-[19.5rem] py-10 px-8 overflow-y-auto">
        <nav className="lg:text-sm lg:leading-6 relative h-full px-5">
          <Text b size="$xl">
            Documentation
          </Text>

          <Aside />
        </nav>
      </AsideStyle>

      <BodyStyle className="lg:pl-[19.5rem]">
        <ContentStyle className="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16">
          {children}
          <div className="h-20"/>
          <Footer className="rounded p-4" completeFooter={false} />

          <BreadStyle className="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-45rem))] w-[19.5rem] py-10 overflow-y-auto hidden xl:block">
            <div className="px-8">
              <p>Breadcrumb</p>
            </div>
          </BreadStyle>
        </ContentStyle>
      </BodyStyle>
    </WrapperStyle>
  );
};

export default LayoutContainer;
