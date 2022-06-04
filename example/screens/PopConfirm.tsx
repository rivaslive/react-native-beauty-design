import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import {
  Title,
  Button,
  InputScrollView,
  Popconfirm,
  Text,
} from 'react-native-beauty-design';

const { Header, Footer } = Popconfirm;

const PopConfirmScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Pop confirm</Title>
          <Popconfirm body={'Estas segudo de eliminar este registro?'}>
            <Button color="primary">show</Button>
          </Popconfirm>
        </View>

        <View>
          <Title level={3}>Pop confirm with title and subtitle</Title>
          <Popconfirm
            title="Beauty Design"
            description="Best framework UI for React Native"
            body="Are you sure to continue? your information may be lost"
          >
            <Button color="primary">Show</Button>
          </Popconfirm>
        </View>

        <View>
          <Title level={3}>Pop confirm with icon</Title>
          <Popconfirm
            icon={
              <Image
                style={{
                  width: 45,
                  height: 45,
                  marginRight: 20,
                }}
                source={{ uri: 'https://www.beauty-design.app/favicon.png' }}
              />
            }
            title="Beauty Design"
            description="Best framework UI for React Native"
            body="Are you sure to continue? your information may be lost"
          >
            <Button color="primary">Show</Button>
          </Popconfirm>
        </View>

        <View>
          <Title level={3}>Pop confirm personalization</Title>
          <Popconfirm
            header={
              <Header
                content={
                  <View style={{ paddingTop: 16, paddingLeft: 16, paddingRight: 16 }}>
                    <Title>This is custom Header</Title>
                  </View>
                }
                style={{ marginTop: 20, marginBottom: 20 }}
              />
            }
            footer={({ close }: { close: () => void }) => (
              <Footer
                content={
                  <View style={{ paddingLeft: 16, paddingRight: 16 }}>
                    <Text>This is custom footer</Text>
                    <Button onPress={close}>Close</Button>
                  </View>
                }
                style={{ marginTop: 20, marginBottom: 20 }}
              />
            )}
            title="Beauty Design"
            description="Best framework UI for React Native"
            body="Are you sure to continue? your information may be lost"
          >
            <Button color="primary">Show</Button>
          </Popconfirm>
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

export default PopConfirmScreen;
