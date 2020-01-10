/**
 * 自定义按钮
 */
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback } from 'react-native';
import { MAIN_COLOR } from '../../../styles/public/main';
const BG_COLOR = {
  primary: MAIN_COLOR,
  danger: 'red',
};

export default class Button extends Component {

  _handlePress = (e) => {
    const { onPress } = this.props;
    onPress && onPress(e);
  }

  render () {
    const {
      title,
      style,
      type = 'primary'
    } = this.props;

    return (
      <TouchableNativeFeedback
        onPress={this._handlePress}
      >
        <View
          style={[styles.button, { backgroundColor: BG_COLOR[type] || MAIN_COLOR }]}
        >
          <Text style={styles.buttonText}>{title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    height: 36,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    borderRadius: 4,
  },
  buttonText: {
    color: '#fff',
    fontSize: 14
  }
});
