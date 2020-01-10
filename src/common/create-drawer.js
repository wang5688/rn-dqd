import { createDrawerNavigator } from 'react-navigation-drawer';

const createDrawer = ({ routes, options = {}, drawerComponent }) => {
  const defaultOptions = {
    // hideStatusBar: true, // 隐藏状态栏
    drawerType: 'front',
    drawerWidth: 200,
    edgeWidth: 40,
    drawerLockMode: 'unlocked',
    useNativeAnimations: false,
    contentComponent: drawerComponent
  };

  const navigationConfig = Object.assign({}, defaultOptions, options);

  return createDrawerNavigator(routes, navigationConfig);
};

export default createDrawer;
