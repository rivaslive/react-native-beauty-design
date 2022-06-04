import React from 'react';
import IconRender from './IconRender';

import {
  ArrowLeftSVG,
  ArrowRightSVG,
  LeftSVG,
  RightSVG,
  MarkerSVG,
  PhoneSVG,
  MessageSVG,
  FacebookSVG,
  CloseSVG,
  BurgerSVG,
} from './icons';

interface IconProps {
  [key: string]: unknown;
}

// render function icon
export default IconRender;

export const ArrowLeft = (props: IconProps) => (
  <IconRender {...props} icon={ArrowLeftSVG} />
);
export const ArrowRight = (props: IconProps) => (
  <IconRender {...props} icon={ArrowRightSVG} />
);
export const Left = (props: IconProps) => (
  <IconRender {...props} icon={LeftSVG} />
);
export const Right = (props: IconProps) => (
  <IconRender {...props} icon={RightSVG} />
);
export const Marker = (props: IconProps) => (
  <IconRender {...props} icon={MarkerSVG} />
);
export const Phone = (props: IconProps) => (
  <IconRender {...props} icon={PhoneSVG} />
);
export const Message = (props: IconProps) => (
  <IconRender {...props} icon={MessageSVG} />
);
export const Facebook = (props: IconProps) => (
  <IconRender {...props} icon={FacebookSVG} />
);
export const Close = (props: IconProps) => (
  <IconRender {...props} icon={CloseSVG} />
);
export const Burger = (props: IconProps) => (
  <IconRender {...props} icon={BurgerSVG} />
);
