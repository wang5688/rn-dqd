import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableHighlight,
  TouchableNativeFeedback
} from 'react-native';
import styles from '../styles/nav';

export default class Nav extends Component {

  render () {
    const navList = [
      { name: 'notify', label: '消息', icon: require('../../../assets/icon/news_notify_icon.png') },
      { name: 'favorate', label: '收藏', icon: require('../../../assets/icon/collection_icon.png') },
      { name: 'track', label: '足迹', icon: require('../../../assets/icon/foot_print_icon.png') },
      { name: 'vip', label: '会员', icon: require('../../../assets/icon/member_icon.png') },
    ];

    return (
      <View style={styles.nav}>
        {
          navList.map((item) => (
            <TouchableNativeFeedback key={item.name} onPress={() => {}}>
              <View style={styles.navItem}>
                <Image style={styles.itemIcon} source={item.icon} />
                <Text style={styles.itemTitle}>{item.label}</Text>
              </View>
            </TouchableNativeFeedback>
          ))
        }
      </View>
    );
  }
}