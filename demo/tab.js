import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  Button
} from "react-native";
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

class HomeScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
          title="Go Tab"
          onPress={() => {
            this.props.navigation.navigate('Setting');
          }}
        />
      </View>
    );
  }
}

class SettingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchVal: false
    };
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Setting: SettingScreen
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        return (
          <Image source={require('./src/assets/icon/lib_icon_tab1_selected.png')} style={{ width: 20, height: 20 }} />
        );
      },
      tabBarOptions: {
        showIcon: true,
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray'
      }
    })
  }
);

export default createAppContainer(TabNavigator);
