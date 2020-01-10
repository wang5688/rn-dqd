import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { WebView } from 'react-native-webview';

export default class DetailScreen extends Component {
  static navigationOptions = {
    // headerShown: true
  };

  render () {
    return (
      <WebView
        style={{ flex: 1 }}
        originWhitelist={['*']}
        source={{ html: '<h1><a href="myapp://auth">点我看看</a></h1>' }}
      />
    );
  }
}