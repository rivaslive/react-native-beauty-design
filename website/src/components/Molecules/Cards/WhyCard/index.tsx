import Imagen from 'components/Atoms/Imagen';
import React from 'react';
import { StyleImagen, StyleSummary, StyleTitle, StyleWhyCard } from './style';

interface IProps {
  image: any;
  title: string;
  summary: string;
  className?: string;
  isExample?: boolean;
}

const WhyCard = ({
  image,
  title,
  summary,
  isExample = false,
  ...rest
}: IProps) => {
  return (
    <StyleWhyCard $isExample={isExample} {...rest}>
      <StyleImagen $isExample={isExample}>
        <Imagen className="image" src={image} width="100%" height="100%" />
      </StyleImagen>
      <StyleTitle>{title}</StyleTitle>
      <StyleSummary>{summary}</StyleSummary>
    </StyleWhyCard>
  );
};

export default React.memo(WhyCard);
