import React, { Component } from 'react';
import {
  ScrollView
} from 'react-native';
import style from '../styles/route-list';
import { routeList } from '../../../data/mine';

import ListItem from '../../../components/ListItem';

export default class List extends Component {
  constructor (props) {
    super(props);
    this.state = {
      listData: routeList
    };
  }

  render () {
    const { listData } = this.state;
    const itemRender = (meta) => {
      const props = {
        icon: meta.icon,
        name: meta.name,
        subTitle: meta.text
      };
      return (
        <ListItem
          key={meta.id}
          {...props}
        />
      );
    };

    return (
      <ScrollView style={style.list}>
        {
          listData.map((item) => item.icon ? itemRender(item) : null)
        }
      </ScrollView>
    );
  }
}