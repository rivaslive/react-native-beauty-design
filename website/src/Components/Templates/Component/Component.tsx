import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';

import { WrapperStyle } from './style';

export type ComponentProps = {
  title: string;
  description: string;
};

const ComponentTemplate = ({ title, description }: ComponentProps) => {
  return (
    <WrapperStyle>
      <Title>{title}</Title>
      <Text>{description}</Text>
    </WrapperStyle>
  );
};
export default ComponentTemplate;
