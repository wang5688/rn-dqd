import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';

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
      <Text style={styles.baseText}>
        <Text style={styles.titleText}>
          {this.state.titleText} {'\n'} {'\n'}
        </Text>
        <Text numberOfLines={1} ellipsizeMode="middle">
          {this.state.bodyText}
        </Text>
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});