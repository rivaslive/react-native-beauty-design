import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Title, InputScrollView, Space, Button, message } from 'react-native-beauty-design';

type Type = 'success' | 'error' | 'warning' | 'info';

const types: Type[] = ['success', 'error', 'warning', 'info'];

const MessageScreen = () => {
  const onPress = (type: Type) => {
    message[type]({
      message: type,
    });
  };

  const onPressDesc = (type: Type) => {
    message[type]({
      message: type,
      description: type,
    });
  };

  return (
    <InputScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View>
          <Title level={3}>Message</Title>
          <Space orientation="vertical">
            {types.map((f) => (
              <Button
                key={f}
                color={f === 'info' ? 'primary' : f}
                onPress={() => onPress(f)}
              >
                {f}
              </Button>
            ))}
          </Space>
        </View>

        <View>
          <Title level={3}>Message with title</Title>
          <Space orientation="vertical">
            {types.map((f) => (
              <Button
                key={f}
                type="outline"
                color={f === 'info' ? 'primary' : f}
                onPress={() => onPressDesc(f)}
              >
                {f}
              </Button>
            ))}
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

export default MessageScreen;
