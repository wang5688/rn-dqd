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

  render () {
    return (
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle} numberOfLines={1} ellipsizeMode="head">head: {this.state.bodyText}</Text>
        <Text style={styles.textStyle} numberOfLines={1} ellipsizeMode="middle">middle: {this.state.bodyText}</Text>
        <Text style={styles.textStyle} numberOfLines={2} ellipsizeMode="tail">tail: {this.state.bodyText}</Text>
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