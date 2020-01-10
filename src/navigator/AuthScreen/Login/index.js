import React, { Component } from 'react';
import { View, Text, SafeAreaView, StatusBar } from 'react-native';
import styles from './styles';

import Header from '../../../components/Header';

export default class Login extends Component {

  componentDidMount () {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
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
      <SafeAreaView style={styles.container}>
        <Header title="手机短信登录" showBack />
      </SafeAreaView>
    );
  }
}
