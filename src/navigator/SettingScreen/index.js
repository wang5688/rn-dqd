import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView
} from 'react-native';
import Header from '../../components/Header';

export default class SettingScreen extends Component {

  componentDidMount () {
    console.log('focus');
    this.props.navigation.addListener('didFocus', () => {
      this._setStatus();
    });
  }

  _setStatus = () => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor('#fff');
  }

  render () {
    return (
      <SafeAreaView>
        <Header title="设置" showBack={true} />
        <Text>setting</Text>
      </SafeAreaView>
    );
  }
}