import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableNativeFeedback
} from 'react-native';
import style from '../styles/list-item';

export default class ListItem extends Component {

  render () {
    const { meta } = this.props;
    console.log(meta);

    return (
      <TouchableNativeFeedback
        style={style.feedBack}
        onPress={() => {}}
      >
        <View style={style.inner}>
          <View style={style.item}>
            {
              meta.icon ? <Image source={{ uri: meta.icon }} style={style.itemIcon} /> : null
            }
            <Text style={style.itemText}>{meta.name}</Text>
            <View style={style.itemRight}>
              {
                meta.text ? <Text style={style.subText}>{meta.text}</Text> : null
              }
              <Image source={require('../../../assets/icon/arrow_right_gray.png')} style={style.rightArrow} />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}