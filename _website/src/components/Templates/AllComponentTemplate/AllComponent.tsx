import React from 'react';
import Link from 'next/link';
import { Col, Row } from 'antd';
import { useRouter } from 'next/router';

// components
import Text from 'components/Atoms/Text';
import Seo from 'components/Atoms/Seo/Seo';
import Title from 'components/Atoms/Title';
import Layout from 'components/Molecules/Layout';
import CardComponentList from 'components/Molecules/CardComponentList';

import { v1 } from 'assets/menu';
import { defaultName } from 'utils/defaultVersion';

const AllComponentTemplate = () => {
  const { query } = useRouter();

  const sortComponents = (a: { name: string }, b: { name: string }) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  return (
    <>
      <Seo title="components" />
      <Layout noIndice>
        {/* provider */}
        <Title level={1} variant="ROBOT_48_72_700">
          Component List
        </Title>
        <Text
          variant="ROBOT_14_28_400"
          html={`This is a list of all the components provided by <b>${defaultName}</b>`}
        />

        {v1.map(({ children, name }) => {
          return (
            <>
              <Title level={2} color="secondaryText" variant="ROBOT_36_50_500">
                {name}
              </Title>
              <Row
                style={{ marginBottom: 30 }}
                gutter={[
                  { xs: 0, md: 20, lg: 25 },
                  { xs: 20, md: 20, lg: 25 },
                ]}
              >
                {children.sort(sortComponents).map(({ name, key, icon }) => {
                  let path;
                  if (key === 'getting-started') {
                    path = `/${query?.version as string}/`;
                  } else {
                    path = `/${query?.version as string}/components/`;
                  }

                  return (
                    <Col key={key} xs={24} md={12} xxl={8}>
                      <Link href={path + key} passHref>
                        <a>
                          <CardComponentList title={name} icon={icon} />
                        </a>
                      </Link>
                    </Col>
                  );
                })}
              </Row>
            </>
          );
        })}
      </Layout>
    </>
  );
};

export default AllComponentTemplate;
