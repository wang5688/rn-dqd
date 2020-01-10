import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  onChangeText = (value) => {
    this.setState({
      text: value
    });
  }

  render () {
    return (
      <View style={styles.box}>
        <TextInput
          style={styles.input}
          autoFocus={false}
          autoComplete="username"
          contextMenuHidden={true}
          editable={true}
          // maxLength={5}
          // multiline={true} // 多行文本
          // keyboardType="visible-password" // 键盘类型
          underlineColorAndroid="transparent"
          placeholder="please input your content"
          placeholderTextColor="#999"
          onChangeText={this.onChangeText}
        />
        <Text>{this.state.text}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  box: {
    // width: '100%',
    // height: '100%',
    flex: 1,
    // backgroundColor: 'skyblue'
  },
  input: {
    width: 160,
    height: 30,
    lineHeight: 30,
    fontSize: 14,
    color: 'red',
    backgroundColor: 'rgba(122,124,130,0.10)',
    borderWidth: 2,
    borderColor: '#85BBFF',
    borderRadius: 3,
    textAlignVertical: 'center',
    paddingHorizontal: 8,
    paddingVertical: 0,
    margin: 20,
  }
});