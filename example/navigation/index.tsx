/**
 * If you are not familiar with React Navigation, check out the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import * as React from 'react';
import { ColorSchemeName, Image, StyleSheet, View } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import { Title, useTheme } from 'react-native-beauty-design';

import AvatarScreen from '../screens/Avatars';
import TitleScreen from '../screens/Titles';
import TextsScreen from '../screens/Texts';
import ButtonsScreen from '../screens/Buttons';
import ThemeScreen from '../screens/Theme';
import DatePickerScreen from '../screens/DatePicker';
import ControllerScreen from '../screens/Controller';
import CarouselScreen from '../screens/Carousel';
import InputScreen from '../screens/Inputs';
// import CardScreen from '../screens/Cards';
// import FormScreen from '../screens/Form';
// import BadgeScreen from '../screens/Badges';
// import CollapseScreen from '../screens/Collapse';
import AlertScreen from '../screens/Alert';
import SelectScreen from '../screens/Select';
import RadioScreen from '../screens/Radio';
// import MessageScreen from '../screens/Message';
// import ModalScreen from '../screens/Modal';
// import PopConfirmScreen from '../screens/PopConfirm';
// import NotificationScreen from '../screens/Notification';
// import TabScreen from '../screens/Tabs';

export default React.memo(function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
});

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={Styles.header}>
        <Image
          style={Styles.image}
          source={{
            uri: 'https://www.beauty-design.app/favicon.png',
          }}
        />
        <Title style={Styles.title} level={4}>
          Beauty Design
        </Title>
      </View>
      <DrawerItemList {...props} />
      <View style={Styles.footer} />
    </DrawerContentScrollView>
  );
}

function RootNavigator() {
  const { colors } = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={CustomDrawerContent}
      screenOptions={{
        drawerItemStyle: {
          borderRadius: 10,
        },
        drawerStyle: {
          paddingRight: 12,
          paddingLeft: 12,
        },
        headerTintColor: colors.text,
        drawerActiveTintColor: 'white',
        drawerActiveBackgroundColor: '#4a8cff',
      }}
    >
      <Drawer.Screen name="Theme" component={ThemeScreen} />
      <Drawer.Screen name="Alert" component={AlertScreen} />
      <Drawer.Screen name="Avatar" component={AvatarScreen} />
      <Drawer.Screen name="Button" component={ButtonsScreen} />
      <Drawer.Screen name="Controller" component={ControllerScreen} />
      <Drawer.Screen name="Carousel" component={CarouselScreen} />
      <Drawer.Screen name="DatePicker" component={DatePickerScreen} />
      <Drawer.Screen name="Input" component={InputScreen} />
      <Drawer.Screen name="Title" component={TitleScreen} />
      <Drawer.Screen name="Text" component={TextsScreen} />
      <Drawer.Screen name="Select" component={SelectScreen} />
      <Drawer.Screen name="Radio" component={RadioScreen} />
      {/*<Drawer.Screen name="Tabs" component={TabScreen} />*/}
      {/*<Drawer.Screen name="Form" component={FormScreen} />*/}
      {/*<Drawer.Screen name="Badges" component={BadgeScreen} />*/}
      {/*<Drawer.Screen name="Cards" component={CardScreen} />*/}
      {/*<Drawer.Screen name="Collapse" component={CollapseScreen} />*/}
      {/*<Drawer.Screen name="Message" component={MessageScreen} />*/}
      {/*<Drawer.Screen name="Notifications" component={NotificationScreen} />*/}
      {/*<Drawer.Screen name="Modal" component={ModalScreen} />*/}
      {/*<Drawer.Screen name="Pop confirm" component={PopConfirmScreen} />*/}
    </Drawer.Navigator>
  );
}

const Styles = StyleSheet.create({
  header: {
    padding: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(100, 100, 100, .3)',
  },
  image: {
    width: 45,
    height: 45,
  },
  title: {
    marginLeft: 12,
  },
  footer: {
    marginBottom: 100,
  },
});
