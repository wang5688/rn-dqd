import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DetailScreen extends Component {
  static navigationOptions = {
    // headerShown: true
  };

  render () {
    return (
      <View>
        <Text>Detail Screen</Text>
      </View>
    );
  }
}