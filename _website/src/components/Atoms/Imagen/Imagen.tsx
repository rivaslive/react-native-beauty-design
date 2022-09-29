import React from 'react';
import { StyleImage } from './style';

type ImagenProps = {
  className?: string;
  src?: string;
  width?: string | number;
  height?: string | number;
  objectFit?: string;
  [key: string]: unknown;
};

const Imagen = ({
  className,
  src,
  width,
  height,
  objectFit = 'contain',
  ...rest
}: ImagenProps) => {
  return (
    <StyleImage className={className}>
      <img
        // @ts-ignore
        src={src}
        alt=""
        loading="lazy"
        width={width}
        height={height}
        // @ts-ignore
        style={{ objectFit }}
        {...rest}
      />
    </StyleImage>
  );
};

export default Imagen;
