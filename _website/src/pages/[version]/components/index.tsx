import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';

const ComponentsPage = () => {
  return (
    <Layout>
      <Title variant="POPPINS_70_77_800">List components</Title>
    </Layout>
  );
};

export default React.memo(ComponentsPage);
