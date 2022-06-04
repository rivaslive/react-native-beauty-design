import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Title,
  InputScrollView,
  Badge,
  Space,
  Icon,
  Avatar,
} from 'react-native-beauty-design';

const BadgeScreen = () => {
  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Avatar</Title>
          <Space>
            <Badge count={5} />
            <Badge count="999+" />
            <Badge count={<Icon type="antdesign" name="clockcircleo" />} />
          </Space>
        </View>

        <View>
          <Title level={3}>Avatar Colors</Title>
          <Space>
            <Badge count={0} showZero />
            <Badge count={5} />
            <Badge count="999+" color="success" />
            <Badge
              count={<Icon type="antdesign" name="clockcircleo" />}
              color="warning"
            />
          </Space>
        </View>

        <View>
          <Title level={3}>With Dot And More</Title>
          <Space>
            <Badge dot>
              <Avatar src="https://i.imgur.com/bnip2HZ.png" />
            </Badge>
            <Badge count={5}>
              <Avatar src="https://i.imgur.com/bnip2HZ.png" />
            </Badge>
            <Badge count="9" color="success">
              <Avatar fullName="Kevin Rivas" />
            </Badge>
            <Badge
              count={<Icon type="antdesign" name="clockcircleo" />}
              color="warning"
            >
              <Avatar fullName="Kevin Rivas" />
            </Badge>
          </Space>
        </View>

        <View>
          <Title level={3}>Square Avatars</Title>
          <Space>
            <Badge dot>
              <Avatar type="square" src="https://i.imgur.com/bnip2HZ.png" />
            </Badge>
            <Badge count={5}>
              <Avatar type="square" src="https://i.imgur.com/bnip2HZ.png" />
            </Badge>
            <Badge count="9" color="success">
              <Avatar type="square" fullName="Kevin Rivas" />
            </Badge>
            <Badge
              count={<Icon type="antdesign" name="clockcircleo" />}
              color="warning"
            >
              <Avatar type="square" fullName="Kevin Rivas" />
            </Badge>
          </Space>
        </View>

        <View>
          <Title level={3}>Avatar Offets</Title>
          <Space>
            <Badge count={5} offset={[30, -5]}>
              <Avatar fullName="Kevin Rivas" />
            </Badge>
            <Badge count={5} offset={[-5, 30]}>
              <Avatar fullName="Kevin Rivas" />
            </Badge>
          </Space>
        </View>
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

export default BadgeScreen;
