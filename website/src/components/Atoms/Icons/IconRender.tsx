/* eslint-disable react/no-unstable-nested-components */
import * as React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

interface IconProps {
  icon: React.ComponentType<
    CustomIconComponentProps | React.SVGProps<SVGSVGElement>
  >;

  [key: string]: unknown;
}

// create icons in base a svg
const IconRender = ({ icon: Custom, ...rest }: IconProps) => {
  return (
    <Icon
      component={(props: any) => {
        // @ts-ignore
        return <Custom {...props} {...rest} />;
      }}
    />
  );
};

export default IconRender;
