import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      titleText: 'This is Title Text',
      bodyText: 'this is Body Text this is Body Text this is Body Text this is Body Text this is Body Text this is Body Text'
    };
  }

  onLayout = (event) => {
    console.log(event)
  }

  onLongPress = () => {
    console.log('onLongPress');
  }

  render () {
    return (
      <View>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
        <View style={{ width: 100, height: 100, backgroundColor: 'skyblue' }}></View>
        <View style={{ width: 150, height: 150, backgroundColor: 'steelblue' }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textStyle: {
    fontSize: 20,
    width: '100%',
    padding: 10
  }
});