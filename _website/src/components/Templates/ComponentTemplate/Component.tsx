import React from 'react';
import { Col, Row } from 'antd';

// utils
import { capitalize } from 'utils/utils';
import { getIdComponent } from 'utils/getIdComponent';

// hooks
import { useComponent } from 'context/components';

// components
import Text from 'components/Atoms/Text';
import Seo from 'components/Atoms/Seo/Seo';
import Title from 'components/Atoms/Title';
import { BlockCode } from 'components/Atoms/Code';
import Table from 'components/Molecules/Table/Table';
import Layout from 'components/Molecules/Layout/Layout';
import Example from 'components/Molecules/Example/Example';
import ImageOrVideoFrame from 'components/Atoms/ImageOrVideoFrame';
import NextAndPrevStep from 'components/Molecules/NextAndPrevStep';

// styles
import { StyleFooterComponent } from './style';

const ComponentTemplate = ({ data }: PageProps) => {
  const { previousComponent, nextComponent } = useComponent(data?.title);
  return (
    <>
      <Seo title={capitalize(data.component)} description={data.description} />
      <Layout data={data}>
        {/* provider */}
        <Title level={1} variant="ROBOT_48_72_700">
          {data?.title}
        </Title>
        <Text variant="ROBOT_14_28_400" html={data?.description} />

        {/* How to use */}
        {data?.howToUse && (
          <>
            <Title id="How-to-use?" variant="ROBOT_24_36_600" isLink>
              How to use?
            </Title>
            <Text variant="ROBOT_14_28_400" html={data.howToUse} />
          </>
        )}

        {/* Default code */}
        {data?.defaultCode && <BlockCode copy>{data?.defaultCode}</BlockCode>}

        {/* default content */}
        {data?.image?.url && (
          <>
            <Title id="What-i-can-do" variant="ROBOT_24_28_500" isLink>
              What i can do
            </Title>
            <Text variant="ROBOT_14_28_400">Basic tour of properties</Text>
            <ImageOrVideoFrame
              src={data?.image?.url}
              style={{ margin: 0, marginBottom: 30 }}
            />
          </>
        )}

        {/* Examples */}
        <Row gutter={[20, 20]}>
          {data?.ejemplos &&
            data?.ejemplos?.map((example) => (
              <Col xs={24} key={example.id}>
                <Example
                  code={example.code}
                  title={example.title}
                  snack={example.snack}
                  preview={example?.imagen?.url}
                  summary={example.description}
                  id={getIdComponent(example.title)}
                />
              </Col>
            ))}
        </Row>

        {/* Api */}
        {data?.apis &&
          data?.apis?.map((api) => (
            <div key={api.id}>
              {!api.title && (
                <>
                  <p />
                  <Title id="API" variant="ROBOT_24_28_500" isLink>
                    API
                  </Title>
                </>
              )}
              <Table
                title={api.title}
                items={api?.items || []}
                description={api.description}
              />
            </div>
          ))}

        {/* footer nav components */}
        <StyleFooterComponent>
          {previousComponent && (
            <NextAndPrevStep
              isPrev
              title={previousComponent.name}
              summary={previousComponent.name}
              href={
                previousComponent.key !== 'getting-started'
                  ? `/v1/components/${previousComponent.key}`
                  : `/v1/${previousComponent.key}`
              }
            />
          )}
          {nextComponent && (
            <NextAndPrevStep
              title={nextComponent.name}
              summary={nextComponent.name}
              href={`/v1/components/${nextComponent.key}`}
            />
          )}
        </StyleFooterComponent>
      </Layout>
    </>
  );
};

export default ComponentTemplate;
