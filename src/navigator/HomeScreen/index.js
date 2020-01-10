import React, { Component } from 'react';
import { View, Text, Button, SafeAreaView, StatusBar } from 'react-native';
import publicStyle from '../../styles/public';
import { MAIN_COLOR } from '../../styles/public/main';
import Header from '../../components/Header';

export default class HomeScreen extends Component {
  static navigationOptions = {
    headerShown: false,
  };

  render() {
    const { navigation } = this.props;
    console.log(this.props)

    return (
      <View style={[publicStyle.main]}>
        <StatusBar barStyle="light-content" backgroundColor={MAIN_COLOR} translucent={false} />
        <Header
          title="App"
          navigation={navigation}
        />
      </View>
    );
  }
}
