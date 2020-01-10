import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createStackNavigator } from 'react-navigation-stack';
import createStack from '../../common/create-stack';
import TabIcon from './components/tab-icon';
import HomeScreen from '../HomeScreen';
import DataScreen from '../DataScreen';
import GameScreen from '../GameScreen';
import TicketScreen from '../TicketScreen';
import MineScreen from '../MineScreen';
import pageConfig from '../../page.config';

const ViewScreen = {
  Home: createStack({ Home: HomeScreen }),
  Game: createStack({ Game: GameScreen }),
  Ticket: createStack({ Ticket: TicketScreen }),
  Data: createStack({ Data: DataScreen }),
  Mine: createStack({ Data: MineScreen }),
};

const routerConfig = {};
pageConfig.tabConfig.forEach((item) => {
  const { label, iconDefault, iconSelect } = item;


  routerConfig[item.name] = {
    screen: ViewScreen[item.name],
    navigationOptions: () => ({
      title: label,
      tabBarIcon: ({ focused }) => {
        const iconUri = focused ? iconSelect : iconDefault;
        return <TabIcon icon={iconUri} />;
      }
    })
  };
});

export default createBottomTabNavigator(
  routerConfig,
  {
    initialRouteName: 'Home',
    // tabBarComponent: () => (
    //   <View style={{ flex: 1, backgroundColor: 'red' }}></View>
    // ),
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarOptions: {
        activeTintColor: '#00b331', // 选项卡选中文字颜色
        inactiveTintColor: '#777777', // 未选中颜色
        showIcon: true,
        style: styles.tabBar,
        labelStyle: styles.label
      },
    }),
  }
);

const styles = StyleSheet.create({
  tabBar: {
    height: 50,
    // borderTopWidth: 0,
  },
  label: {
    fontSize: 12
  }
});
