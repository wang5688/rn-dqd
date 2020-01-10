import React, { Component } from 'react';
import {
  StyleSheet,
  Alert,
  Text,
  View,
  TextInput,
  ScrollView
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

  onScroll (e) {
    const { x, y } = e.nativeEvent.contentOffset;
    console.log(x, y)
  }

  render () {
    return (
      <ScrollView
        style={styles.scrollStyle}
        keyboardDismissMode="on-drag" // 拖拽开始时是否隐藏软键盘
        // keyboardShouldPersistTaps="always" // 点击scrollView组件是否
        stickyHeaderIndices={[0]} // 决定哪些子节点在滚动后固定在屏幕顶端
        // overScrollMode="always"
        onScroll={this.onScroll}
      >
        <TextInput
          style={{ backgroundColor: '#fff' }}
          placeholder="请输入内容"
          autoFocus={true}
        />
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
        <Text style={styles.textStyle}>This is Paragram 0000</Text>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  scrollStyle: {
    flex: 1
  },
  textStyle: {
    fontSize: 20,
    marginVertical: 4,
  }
});