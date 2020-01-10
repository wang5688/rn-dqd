import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import publicStyle from '../../styles/public';
import { MAIN_COLOR } from '../../styles/public/main';
import Header from '../../components/Header';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  componentDidMount () {
    this._navListener = this.props.navigation.addListener('didFocus', () => {
      StatusBar.setBackgroundColor(MAIN_COLOR);
      StatusBar.setBarStyle('light-content');
      StatusBar.setTranslucent(false);
    });
  }

  componentWillUnmount() {
    this._navListener.remove();
  }
  

  render() {
    const { navigation } = this.props;

    return (
      <View style={[publicStyle.main]}>
        <StatusBar barStyle="light-content" backgroundColor={MAIN_COLOR} translucent={false} />
        <Header
          title="App"
          style={{ backgroundColor: MAIN_COLOR }}
          titleStyle={{ color: '#fff' }}
        />
      </View>
    );
  }
}
