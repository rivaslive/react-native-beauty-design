import React from 'react';
import { Platform, ScrollView, StyleSheet, View } from 'react-native';
import {
  useTheme,
  Header,
  Title,
  Button,
  Input,
} from 'react-native-beauty-design';
import { useTheme as useNavigationTheme } from '@react-navigation/native';
import DrawerToggleButton from '@react-navigation/drawer/src/views/DrawerToggleButton';

const HeaderWithCustomBackgroundScreen = ({ navigation }) => {
  const { onScroll, colors } = useTheme();
  const navigationTheme = useNavigationTheme();
  const heightDynamic = Platform.select({
    ios: 50,
    android: 70,
  });
  return (
    <View style={styles.header}>
      <Header
        titlePosition="center"
        heightDynamic={heightDynamic}
        titleOnScroll="Header custom"
        backgroundSticky={colors.primary}
        background={navigationTheme.colors.card}
        leftIcon={<DrawerToggleButton tintColor={colors.text} />}
      />
      <ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={styles.wrapperScroll}
      >
        <View style={styles.container}>
          <Title level={2}>Header</Title>
          <Input
            size="small"
            placeholder="Search..."
            borderInputColor="transparent"
          />
        </View>

        <Button color="error" onPress={() => navigation.navigate('Header')}>
          Go to header screen
        </Button>

        <View style={{ height: 1500 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {},
  wrapperScroll: {
    paddingHorizontal: 10,
  },
  container: Platform.select({
    ios: {
      paddingTop: 40,
      paddingBottom: 10,
      marginBottom: 30,
    },
    android: {
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 30,
    },
    default: {
      paddingTop: 10,
      paddingBottom: 10,
      marginBottom: 30,
    },
  }),
  marginTop: {
    marginTop: 0,
  },
  headContent: {
    position: 'relative',
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 20,
    borderRadius: 20,
    backgroundColor: 'rgba(100, 100, 100, .8)',
  },
  space: {
    marginTop: 50,
  },
});

export default HeaderWithCustomBackgroundScreen;
