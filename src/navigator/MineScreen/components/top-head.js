import React, { Component } from 'react';
import {
  View,
  Text,
  ImageBackground
} from 'react-native';
import styles from '../styles/top-head';
import LoginPanel from './login-panel';

export default class TopHead extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isLogin: false
    };
  }

  render () {
    const { isLogin } = this.state;

    return (
      <View style={[styles.container, {}]}>
        <ImageBackground
          style={{ width: '100%', height: '100%' }}
          source={require('../../../assets/images/skid_default_bg.jpg')}
        >
          {
            !isLogin && <LoginPanel />
          }
        </ImageBackground>
      </View>
    );
  }
}