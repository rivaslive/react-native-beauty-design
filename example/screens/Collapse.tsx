import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  Text,
  InputScrollView,
  Collapse,
  Avatar,
  Icon,
  Space,
} from 'react-native-beauty-design';

const CollapseScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Collapse</Title>
          <Collapse>
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Accordion Collapse</Title>
          <Collapse accordion>
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Nested Collapse</Title>
          <Collapse accordion>
            <Collapse.Panel header="Panel 1" id="1">
              <Collapse accordion>
                <Collapse.Panel header="Panel 1" id="1">
                  Este es el contenido
                </Collapse.Panel>
                <Collapse.Panel header="Personal Info" id="2">
                  <View>
                    <Title level={3}>Hi Kevin!</Title>
                    <Avatar fullName="Kevin Rivas" />
                    <Text>This is my avatar.</Text>
                  </View>
                </Collapse.Panel>
              </Collapse>
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Custom icon collapse</Title>
          <Collapse
            icon={<Icon type="antdesign" name="caretright" size={12} />}
          >
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Borderless</Title>
          <Collapse borderColor={false}>
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Show Arrow</Title>
          <Collapse borderColor={false}>
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel showArrow={false} header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Open Keys</Title>
          <Collapse openKeys={['1']} onChange={console.log}>
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Default Open Keys</Title>
          <Collapse defaultOpenKeys={['2']} accordion>
            <Collapse.Panel header="Panel 1" id="1">
              Este es el contenido
            </Collapse.Panel>
            <Collapse.Panel header="Personal Info" id="2">
              <View>
                <Title level={3}>Hi Kevin!</Title>
                <Avatar fullName="Kevin Rivas" />
                <Text>This is my avatar.</Text>
              </View>
            </Collapse.Panel>
          </Collapse>
        </View>

        <View>
          <Title level={3}>Icon Position</Title>
          <Space orientation="vertical" gutter={[0, 50]}>
            <Collapse iconPosition="left">
              <Collapse.Panel header="Panel 1" id="1">
                Este es el contenido
              </Collapse.Panel>
              <Collapse.Panel header="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Avatar fullName="Kevin Rivas" />
                  <Text>This is my avatar.</Text>
                </View>
              </Collapse.Panel>
            </Collapse>
            <Collapse iconPosition="right">
              <Collapse.Panel header="Panel 1" id="1">
                Este es el contenido
              </Collapse.Panel>
              <Collapse.Panel header="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Avatar fullName="Kevin Rivas" />
                  <Text>This is my avatar.</Text>
                </View>
              </Collapse.Panel>
            </Collapse>
          </Space>
        </View>

        <View>
          <Title level={3}>Custom background</Title>
          <Space orientation="vertical" gutter={[0, 50]}>
            <Collapse
              borderColor={false}
              headerProps={{ style: { backgroundColor: 'transparent' } }}
            >
              <Collapse.Panel header="Panel 1" id="1">
                Este es el contenido
              </Collapse.Panel>
              <Collapse.Panel header="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Avatar fullName="Kevin Rivas" />
                  <Text>This is my avatar.</Text>
                </View>
              </Collapse.Panel>
            </Collapse>
            <Collapse
              borderColor="rgba(255, 100, 100, .8)"
              headerProps={{
                style: { backgroundColor: 'rgba(255, 100, 100, .8)' },
              }}
              contentProps={{
                style: { backgroundColor: 'rgba(50, 50, 255, .6)' },
              }}
            >
              <Collapse.Panel header="Panel 1" id="1">
                Este es el contenido
              </Collapse.Panel>
              <Collapse.Panel header="Personal Info" id="2">
                <View>
                  <Title level={3}>Hi Kevin!</Title>
                  <Avatar fullName="Kevin Rivas" />
                  <Text>This is my avatar.</Text>
                </View>
              </Collapse.Panel>
            </Collapse>
          </Space>
        </View>
        {/* END */}
      </View>
      <View style={{ height: 75 }} />
    </InputScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    height: '100%',
  },
  headTitle: {
    paddingLeft: 20,
    paddingRight: 20,
    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: 'rgba(100, 100, 100, .3)',
  },
  space: {
    marginTop: 50,
  },
});

export default CollapseScreen;
