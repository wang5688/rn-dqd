import React, { Component } from 'react';
import { View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ListItem from '../../../components/ListItem';

class CustomList extends Component {

  handlePress = (e, meta) => {
    const { navigation } = this.props;

    if (meta.name === '设置') {
      navigation.navigate('Setting');
    }
  }

  render () {
    const listData = [
      {
        key: 99990000,
        name: '反馈',
        icon: require('../../../assets/icon/lib_icon_feedback.png')
      },
      {
        key: 99990001,
        name: '设置',
        icon: require('../../../assets/icon/icon_setting.png')
      }
    ];

    return (
      <View style={{ backgroundColor: '#fff', marginTop: 8, }}>
        {
          listData.map((item) => (
            <ListItem key={item.key} name={item.name} icon={item.icon} onPress={this.handlePress} />
          ))
        }
      </View>
    );
  }
}

export default withNavigation(CustomList);
