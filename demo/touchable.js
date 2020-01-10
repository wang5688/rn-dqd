import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity
} from 'react-native';

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

  onHideUnderlay () {
    console.log('onHideUnderlay');
  }

  render () {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          underlayColor="pink"
          activeOpacity={.5}
          onPress={this._onPressButton}
          onHideUnderlay={this.onHideUnderlay}
        >
          <Text>Press Me</Text>
        </TouchableHighlight>

        <TouchableNativeFeedback
          // background="red"
        >
          <View style={{ width: 150, height: 100, backgroundColor: 'pink' }}>
            <Text style={{ margin: 40 }}>Button</Text>
          </View>
        </TouchableNativeFeedback>

        <TouchableOpacity>
          <View style={{ width: 100, height: 20, margin: 10, backgroundColor: 'red' }}>
            <Text>Press</Text>
          </View>
        </TouchableOpacity>
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