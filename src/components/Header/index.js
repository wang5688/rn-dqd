/**
 * 通用头部组件
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableHighlight
} from 'react-native';
import { MAIN_COLOR } from '../../styles/public/main';

class Header extends Component {

  render () {
    const {
      navigation,
      title = '',
      style = {},
      centerComponent = null,
      leftComponent = null,
      rightComponent = null,
    } = this.props;

    const leftButton = leftComponent || (
      <TouchableHighlight
        underlayColor="rgba(0, 0, 0, .2)"
        onPress={() => {
          console.log('press')
        }}
      >
        <View style={styles.left}>
          <Image style={styles.leftIcon} source={require('../../assets/images/new_icon_back_white.png')} />
        </View>
      </TouchableHighlight>
    );
    const rightButton = rightComponent || (
      <View style={styles.right}>
        <Image style={styles.rightIcon} source={require('../../assets/images/more_icon.png')} />
      </View>
    );
    const center = (
      <View style={styles.center}>
        {
          title
            ?
          <Text style={styles.title}>{title}</Text>
            :
          centerComponent
        }
      </View>
    );

    return (
      <View style={[styles.header, style]}>
        <View style={styles.left}>
          {leftButton}
        </View>
        <View style={styles.center}>
          {center}
        </View>
        <View style={styles.right}>
          {rightButton}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    height: 40,
    backgroundColor: MAIN_COLOR,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    minWidth: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  right: {
    minWidth: 40,
    minHeight: 40,
    alignItems: 'center',
    justifyContent: 'center'
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  leftIcon: {
    width: 20,
    height: 20
  },
  rightIcon: {
    width: 30,
    height: 30
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  }
});

export default Header;
