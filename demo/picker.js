import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableHighlight,
  Picker
} from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false,
      language: ''
    };
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    return (
      <Picker
        selectedValue={this.state.language}
        style={{ height: 50, width: 100 }}
        onValueChange={(itemValue, itemIndex) => {
          this.setState({ language: itemValue });
        }}
      >
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}