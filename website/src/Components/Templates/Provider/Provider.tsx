import { Text, Link as NLink } from '@nextui-org/react';
import Link from 'next/link';

import ROUTES from '@/config/routes';
import Title from '@/Components/Title';
import BlockCode from '@/Components/BlockCode';

import * as examples from './examples';
import { WrapperStyle } from './style';

const ProviderTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Provider</Title>
      <Text>
        For <strong>React Native Beauty Design</strong> to work correctly, you
        need to set up the ThemeProvider at the root of your application.
      </Text>

      <Title level={2} className="mt-12">
        Setup:
      </Title>

      <Text>Go to the root of your application and do this:</Text>

      <BlockCode className="mt-5" code={examples.basic} />

      <Title level={2} className="mt-12">
        Editing theme:
      </Title>

      <Text>
        You can override all{' '}
        <Link href={ROUTES.DEFAULT_THEME.path} passHref>
          <NLink className="inline">default theme</NLink>
        </Link>
      </Text>

      <BlockCode className="mt-5" code={examples.editingTheme} />

      <Title level={2} className="mt-12">
        Theme object:
      </Title>

      <BlockCode className="mt-5" code={examples.themeObject} />
    </WrapperStyle>
  );
};
export default ProviderTemplate;
