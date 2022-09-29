import React from 'react';
import { LinkOutlined } from '@ant-design/icons';
import Link from 'next/link';

// styles
import { ITitleProps, StyleLink, StyleTitle, StyleTitleContent } from './style';

const Title = ({
  children,
  id,
  isLink = false,
  variant = 'ROBOT_28_39_400',
  color = '',
  className = '',
  textTransform = 'none',
  ...rest
}: ITitleProps) => {
  if (isLink) {
    const onClick = () => {
      const { origin, pathname } = window.location;
      const ref = `${children as string}`.split(' ').join('-');
      return navigator.clipboard.writeText(`${origin}${pathname}#${ref}`);
    };

    return (
      <StyleTitleContent id={id} className={className}>
        <Link href={`#${children as string}`.split(' ').join('-')} passHref>
          <a>
            <StyleTitle
              level={2}
              $isLink
              $color={color}
              $variant={variant}
              $textTransform={textTransform}
              {...rest}
            >
              {children}
            </StyleTitle>
          </a>
        </Link>
        <StyleLink onClick={onClick}>
          <LinkOutlined />
        </StyleLink>
      </StyleTitleContent>
    );
  }

  return (
    <StyleTitle
      id={id}
      level={2}
      $color={color}
      $variant={variant}
      className={className}
      $textTransform={textTransform}
      {...rest}
    >
      {children}
    </StyleTitle>
  );
};

export default Title;
