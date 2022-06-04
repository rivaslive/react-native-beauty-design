import Title from 'components/Atoms/Title';

import { StyleCard, StyleIcon } from './style';

interface CardComponentListProps {
  title: string;
  icon: string;
}

const CardComponentList = ({ title, icon }: CardComponentListProps) => {
  return (
    <StyleCard>
      <Title variant="POPPINS_24_32_800">{title}</Title>
      <StyleIcon>
        <i className={`bx bx-${icon}`} />
      </StyleIcon>
    </StyleCard>
  );
};

export default CardComponentList;
