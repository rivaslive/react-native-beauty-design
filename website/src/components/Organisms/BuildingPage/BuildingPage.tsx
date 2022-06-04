import React from 'react';

// components
import Layout from 'components/Molecules/Layout';
import Title from 'components/Atoms/Title';
import Text from 'components/Atoms/Text';

const BuildingPage = () => {
  return (
    <Layout>
      {/* provider */}
      <Title variant="ROBOT_36_50_500">Building page</Title>
      <Text variant="ROBOT_14_28_400">
        We are building this page, soon you will be able to see in its entirety.
      </Text>
    </Layout>
  );
};

export default BuildingPage;
