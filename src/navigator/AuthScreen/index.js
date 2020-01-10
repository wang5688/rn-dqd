import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class AuthStack extends Component {

  componentDidMount () {
    this._navListener = this.props.navigation.addListener('doFocus', () => {
      this._setStatus();
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  _setStatus = () => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fafafa');
    StatusBar.setTranslucent(false);
  }
  

  render () {
    return (
      <View>
        <Text>this is auth page</Text>
      </View>
    );
  }
}