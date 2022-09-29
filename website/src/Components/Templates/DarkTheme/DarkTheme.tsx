import { Text } from '@nextui-org/react';
import Title from '@/Components/Title';

import { WrapperStyle } from './style';

const DarkThemeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Dark Theme</Title>
      <Text>Beauty Design default theme is based on React Context API.</Text>

      <p className="font-bold">BUILDING...</p>
    </WrapperStyle>
  );
};
export default DarkThemeTemplate;
