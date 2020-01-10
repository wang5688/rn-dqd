/**
 * 我 页面
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import publicStyle from '../../styles/public';
import TopHead from './components/top-head';
import Nav from './components/nav';
import RouteList from './components/route-list';
import CustomList from './components/custom-list';

export default class MineScreen extends Component {
  static navigationOptions = {
    
  };

  componentDidMount () {
    this._navigationListener(); // navigation监听
  }

  componentWillUnmount() {
    this._navFocus && this._navFocus.remove();
  }
  

  _navigationListener = () => {
    this._navFocus = this.props.navigation.addListener('didFocus', () => {
      this._setStatusBar(); // 设置通知栏样式
    });
  }

  _setStatusBar = () => {
    StatusBar.setBarStyle('light-content');
    StatusBar.setBackgroundColor('transparent');
    StatusBar.setTranslucent(true);
  }

  render () {

    return (
      <SafeAreaView style={[publicStyle.main, { backgroundColor: '#eee' }]}>
        <ScrollView>
          {/* <View style={{ width: '100%', height: 182, backgroundColor: 'red' }}></View> */}
          <TopHead />

          <Nav />

          <RouteList />

          <CustomList />
        </ScrollView>
      </SafeAreaView>
    );
  }
}