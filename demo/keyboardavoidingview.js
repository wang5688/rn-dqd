import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView
} from 'react-native';

export default class App extends Component {

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <KeyboardAvoidingView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <TextInput placeholder="请输入内容" />
          <Text style={{ marginTop: 100 }}>这是一段文字</Text>
        </KeyboardAvoidingView>
      </View>
    );
  }
}