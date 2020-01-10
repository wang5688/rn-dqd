import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet
} from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';

class MyHomeScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./src/assets/images/icon-word.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        title="Go to notifications"
        onPress={() => {
          // this.props.navigation.navigate('Notifications');
          this.props.navigation.openDrawer();
        }}
      />
    );
  }
}

class NotificationsScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./src/assets/images/icon-pdf.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    )
  };

  render() {
    return (
      <Button
        title="Go back home"
        onPress={() => {
          this.props.navigation.goBack();
        }}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24
  }
});

const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: MyHomeScreen
    },
    Notifications: {
      screen: NotificationsScreen
    }
  },
  {
    // drawerBackgroundColor: 'red', // 抽屉背景色
    // drawerPosition: 'right', // 抽屉方位
    // drawerType: 'slide',
    // edgeWidth: 30, // 允许定义滑动手势应激活的距离内容视图边缘的距离
    hideStatusBar: true,
  }
);

const App = createAppContainer(MyDrawerNavigator);

export default App;
