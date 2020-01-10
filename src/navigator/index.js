/**
 * 主页面
*/
import React from 'react';
import { createStackNavigator, StackViewStyleInterpolator } from 'react-navigation-stack';
import AuthScreen from './AuthScreen';
import MainScreen from './MainScreen';
import DetailScreen from './DetailScreen';
import SettingScreen from './SettingScreen';
// import DrawerScreen from './DrawerScreen';

const routes = {
  Main: MainScreen, // 主界面
  Auth: AuthScreen, // 用户中心
  Detail: DetailScreen, // 详情页
  Setting: SettingScreen
  // Pop
  // Auth
  // Modal
};

const AppStack = createStackNavigator(
  routes,
  {
    initialRouteName: 'Main',
    defaultNavigationOptions: {
      // header: (navigationProps) => {
      //   return (
      //     <Header
      //       {...navigationProps}
      //       title="APP"
      //       // left={}
      //       // right={}
      //     />
      //   );
      // }
      headerShown: false // 隐藏header
    },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
  }
);

// export default createDrawer({ routes, drawerComponent: DrawerScreen });
export default AppStack;
