import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { View, StatusBar } from 'react-native';
import AppStack from './src/navigator';

import { MAIN_COLOR } from './src/styles/public/main';

const AppContainer = createAppContainer(AppStack);

class App extends Component {
  
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={MAIN_COLOR} />
        <AppContainer
          uriPrefix="myapp://"
        />
      </View>
    );
  }
}
export default App;
