import { Text, Link as NLink } from '@nextui-org/react';
import Link from 'next/link';

import ROUTES from '@/config/routes';
import Title from '@/Components/Title';

import { WrapperStyle } from './style';

const DefaultThemeTemplate = () => {
  return (
    <WrapperStyle>
      <Title>Default Theme</Title>
      <Text>Beauty Design default theme is based on React Context API.</Text>

      <Title level={2} className="mt-12">
        Colors:
      </Title>

      <Text>
        Beauty Design includes a default color palette out-of-the-box that is a
        great starting point if you don't have your own specific branding in
        mind. You can access the colors through the theme object, see the{' '}
        <Link href={ROUTES.PROVIDER.path + '#theme-object'}>
          <NLink className="inline">theme object</NLink>
        </Link>{' '}
        for more information.
      </Text>

      <p className="font-bold">BUILDING...</p>

      <Title level={2} className="mt-12">
        Paddings:
      </Title>
      <p className="font-bold">BUILDING...</p>

      <Title level={2} className="mt-12">
        Margins:
      </Title>
      <p className="font-bold">BUILDING...</p>

      <Title level={2} className="mt-12">
        Fonts:
      </Title>
      <p className="font-bold">BUILDING...</p>
    </WrapperStyle>
  );
};
export default DefaultThemeTemplate;
