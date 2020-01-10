import { createStackNavigator, StackViewStyleInterpolator } from 'react-navigation-stack';

const createStack = (routes, options) => {
  const defaultOptions = {
    defaultNavigationOptions: {
      headerShown: false,
    },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
  };

  return createStackNavigator(routes, Object.assign({}, defaultOptions, options));
};

export default createStack;