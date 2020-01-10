import React, { Component } from 'react';
import {
  View,
  Text,
  StatusBar,
  SafeAreaView,
  ScrollView,
  StyleSheet
} from 'react-native';
import Header from '../../components/Header';
import ListItem from '../../components/ListItem';
import config from './setting.config';

export default class SettingScreen extends Component {

  componentDidMount () {
    console.log('focus');
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      this._setStatus();
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }

  onPressItem = (data) => {
    console.log(data, 111);
  }

  _setStatus = () => {
    StatusBar.setBarStyle('dark-content');
    StatusBar.setTranslucent(false);
    StatusBar.setBackgroundColor('#fafafa');
  }

  render () {
    const renderModule = (data, index) => (
      <View key={index} style={styles.module}>
        {
          data.map((item) => (
            <ListItem
              key={item.key}
              name={item.label}
              onPress={() => this.onPressItem(item)}
            />
          ))
        }
      </View>
    );

    return (
      <View style={{ flex: 1 }}>
        <Header title="设置" showBack={true} />
        
        <ScrollView style={styles.scroll}>
          {
            config.map((m, index) => renderModule(m, index))
          }
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  scroll: {
    backgroundColor: '#eee',
  },
  module: {
    backgroundColor: '#fafafa',
    marginTop: 6
  }
});
