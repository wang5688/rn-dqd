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
        <Text
          selectable={true}
          selectionColor="red"
          onLayout={this.onLayout}
          onLongPress={this.onLongPress}
        >{this.state.titleText}</Text>
        <Text>{this.state.titleText}</Text>
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