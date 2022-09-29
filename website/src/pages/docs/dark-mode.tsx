import type { NextPage } from 'next';

import ROUTES from '@/config/routes';
import Layout from '@/Components/Layout';
import DarkThemeTemplate from '@/Components/Templates/DarkTheme';

const DarkPage: NextPage = () => {
  return (
    <Layout
      contentFit
      background="bg2"
      withFooter={false}
      isActive={ROUTES.DOCS.name}
    >
      <DarkThemeTemplate />
    </Layout>
  );
};

export default DarkPage;