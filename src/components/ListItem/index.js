import React, { Component } from 'react';
import {
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';

export default class ListItem extends Component {

  onPress = (e) => {
    this.props.onPress(e, this.props);
  }

  render () {
    const {
      icon,
      name,
      subTitle,
      rightCont,
    } = this.props;
    const iconSource = typeof icon === 'number' ? icon : { uri: icon };

    return (
      <TouchableNativeFeedback
        onPress={this.onPress}
      >
        <View style={style.inner}>
          <View style={style.item}>
            {
              icon ? (
                <Image
                  style={style.itemIcon}
                  source={iconSource}
                  resizeMode="contain"
                />
              ) : null
            }
            <Text style={style.itemText}>{name}</Text>
            <View style={style.itemRight}>
              {
                subTitle ? <Text style={style.subText}>{subTitle}</Text> : null
              }
              <Image source={require('../../assets/icon/arrow_right_gray.png')} style={style.rightArrow} />
            </View>
          </View>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const style = StyleSheet.create({
  inner: {
    paddingHorizontal: 12,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 44,
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  itemIcon: {
    width: 18,
    height: 18,
    marginRight: 10
  },
  itemText: {
    fontSize: 14,
    color: '#333'
  },
  subText: {
    fontSize: 12,
    color: '#b5b5b5'
  },
  itemRight: {
    marginLeft: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightArrow: {
    width: 6,
    height: 12,
    marginLeft: 4,
  }
});