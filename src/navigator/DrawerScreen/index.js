import React, { Component } from 'react';
import { View, Text, StatusBar } from 'react-native';

export default class DrawerScreen extends Component {
  static navigationOptions = {
    headerShown: false
  };

  render () {
    return (
      <View>
        <Text>Drawer Screen</Text>
      </View>
    );
  }
}
