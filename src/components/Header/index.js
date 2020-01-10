/**
 * 通用头部组件
 */
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { withNavigation } from 'react-navigation';

class Header extends Component {

  handleBackPress = () => {
    this.props.navigation.goBack();
  }

  render () {
    const {
      title = '',
      showBack = false, // 是否显示返回按钮
      style = {},
      titleStyle = {},
      centerComponent = null,
      left,
      right,
    } = this.props;

    const leftButton = showBack ? (
      <TouchableNativeFeedback
        underlayColor="rgba(0, 0, 0, .2)"
        onPress={this.handleBackPress}
      >
        <View style={styles.left}>
          <Image style={styles.leftIcon} source={require('../../assets/images/new_icon_back_black.png')} />
        </View>
      </TouchableNativeFeedback>
    ) : (left || null);
    const rightButton = right !== undefined ? (right || (
      <View style={styles.right}>
        <Image style={styles.rightIcon} source={require('../../assets/images/more_icon.png')} />
      </View>
    )) : null;
    const center = (
      <View style={styles.center}>
        {
          title
            ?
          <Text style={[styles.title, titleStyle]}>{title}</Text>
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
    backgroundColor: '#fafafa',
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
    color: '#333',
    fontSize: 18,
  }
});

export default withNavigation(Header);
