/* eslint-disable react/no-unescaped-entities */
import { Text } from '@nextui-org/react';

import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import { WrapperStyle } from './style';

const HomeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Getting started</Title>
      <Text>
        Welcome to the <strong>React Native Beauty Design</strong>{' '}
        documentation! Beauty Design allows you to make beautiful, modern, and
        fast mobile/applications regardless of your design experience, created
        with React and React Native.
      </Text>

      <Title level={2} className="mt-12">
        Instalation:
      </Title>

      <Text>
        Inside your React project directory, install NextUI by running either of
        the following:
      </Text>

      <BlockCode
        className="mt-4"
        language="bash"
        code="expo install react-native-beauty-design"
      />
      <BlockCode language="bash" code="yarn add react-native-beauty-design" />
      <BlockCode
        language="bash"
        code="npm install react-native-beauty-design"
      />
    </WrapperStyle>
  );
};
export default HomeTemplate;
