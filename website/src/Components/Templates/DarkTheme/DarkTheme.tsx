import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';

import * as examples from './examples';
import { WrapperStyle } from './style';
import Playground from '@/Components/Playground';

const DarkThemeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Dark Mode</Title>
      <Text>
        Beauty Design automatically handles the dark and light theme you can
        change using a useTheme function.
      </Text>

      <Title level={2} className="mt-5">
        Change Theme:
      </Title>

      <Playground code={examples.basic} />
    </WrapperStyle>
  );
};
export default DarkThemeTemplate;
