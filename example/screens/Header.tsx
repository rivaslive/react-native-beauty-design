import React from 'react';
import { Animated, ScrollView, StyleSheet, View } from 'react-native';
import { useTheme, Input, Header, Title, Text } from "react-native-beauty-design";

const HeaderScreen = () => {
  const { scrollOffsetY } = useTheme();

  return (
    <View style={styles.header}>
      <Header
        titleOnScroll="Welcome"
        dynamicComponent={
          <View style={{ backgroundColor: 'red' }}>
            <Text>Welcome</Text>
            <Input
              size="small"
              placeholder="Search..."
              borderInputColor="transparent"
              wrapperStyle={{ marginBottom: 0 }}
            />
          </View>
        }
      />
      <ScrollView
        scrollEventThrottle={16}
        contentContainerStyle={styles.wrapperScroll}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollOffsetY } } }],
          { useNativeDriver: false }
        )}
      >
        <View style={styles.container}>
          <Title style={{ lineHeight: 0 }}>Content here</Title>
        </View>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  wrapperScroll: {},
  container: {
    flex: 1,
    paddingHorizontal: 10,
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

export default HeaderScreen;
