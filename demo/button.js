import React, { Component } from 'react';
import { View, Button, StyleSheet, Alert } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  _onPressButton () {
    Alert.alert('you tapped the button!');
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            title="Press Me"
            onPress={this._onPressButton}
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button
            title="Press Me"
            color="#841584"
            onPress={this._onPressButton}
          />
        </View>

        <View style={styles.alertnativeLayoutButtonContainer}>
          <Button
            title="This looks great!"
            onPress={this._onPressButton}
          />
          <Button
            onPress={this._onPressButton}
            title="OK!"
            color="#841584"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  buttonContainer: {
    margin: 20
  },
  alertnativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});