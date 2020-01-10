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
      <View style={styles.box}>
        <View style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}></View>
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }}></View>
        <View style={{ width: 50, height: 50, alignSelf: 'center', backgroundColor: 'steelblue' }}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
    // backgroundColor: 'skyblue'
  }
});