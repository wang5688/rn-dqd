import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';

export default class TabIcon extends Component {

  render() {
    const { icon } = this.props;
    return (
      <Image
        style={styles.icon}
        source={icon}
      />
    );
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 22,
    height: 22
  }
});
