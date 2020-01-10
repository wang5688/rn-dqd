import React, { Component } from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import listData from './src/data/list';
import fetch from './src/server/fetchData';

const Empty = ({ height }) => (
  <View style={[styles.emptyPage, { height } ]}>
    <Image style={styles.emptyImage} source={require('./src/assets/images/null.png')} />
    <Text style={{ color: '#aaa' }}>暂无内容</Text>
  </View>
);

const Footer = () => (
  <View>
    <Text>this is a footer</Text>
  </View>
);

const Header = () => (
  <View>
    <Text>this is a header</Text>
  </View>
);

const Tag = ({ name, color }) => (
  <View style={[styles.itemTag, { borderColor: color }]}>
    <Text style={[styles.tagText, { color }]}>{name}</Text>
  </View>
);

const ListItem = ({ meta }) => {
  const {
    title,
    thumb,
    comments_total: comments,
    top, top_color: topColor,
    label, label_color: labelColor
  } = meta;

  return (
    <TouchableNativeFeedback
      style={{ backgroundColor: 'rgba(0, 0, 0, .5)' }}
    >
      <View style={styles.item}>
        <Image style={styles.itemImage} source={{ uri: thumb }} />
        <View style={styles.itemInfo}>
          <Text
            style={styles.itemText}
            numberOfLines={2}
          >{title}</Text>
        </View>
        <View style={styles.itemBottom}>
          <Text style={styles.comments}>{comments}评论</Text>
          {label && <Tag name={label} color={labelColor} />}
          {top && <Tag name="置顶" color={topColor} />}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      // listData: listData,
      listData: [],
      page: 1,
      initUrl: 'https://api.dongqiudi.com/app/tabs/iphone/104.json?before=1577326636&mark=gif&version=576&from=tab_104',
      next: '', // 下一次请求url

      flatlistHeight: 0,
      isRefreshing: false
    };
  }

  UNSAFE_componentWillMount() {
    this._init();
  }

  _init = () => {
    this.getData();
  }

  getData = () => {
    const { page, initUrl, next } = this.state;
    const url = page > 1 ? next : initUrl;
    this.setRefreshing(true);
    fetch.get(url)
      .then((res) => {
        const { contents } = res;
        let newData = [];
        contents.forEach((item) => {
          newData = newData.concat(item.articles);
        });
        console.log(newData.length)

        this.setState({
          listData: page > 1 ? this.state.listData.concat(newData) : newData,
          isRefreshing: false,
          next: res.next,
          page: page + 1
        });
      });
  }

  setRefreshing = (value) => {
    this.setState({
      isRefreshing: value
    });
  }

  onRefresh = () => {
    this.setRefreshing(true);
    this.setState({
      page: 1
    }, () => {
      this.getData();
    });
  }

  onLoadMore = () => {
    console.log(222);
    this.getData();
  }

  render () {
    return (
      <View style={styles.contianer}>
        <FlatList
          data={this.state.listData}
          onLayout={(e) => {
            // 设置flatList高度给empty组件使用
            let height = e.nativeEvent.layout.height;
            if (this.state.flatlistHeight < height) {
              this.setState({ flatlistHeight: height });
            }
          }}
          // refreshing={true}
          // inverted={true} // 翻转滚动方向
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <ListItem meta={item} />}
          // 行与行之间的分割线组件，不会出现在第一行和最后一行
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: '#e9e9e9', width: '100%', height: 1 }}></View>
          )}
          ListEmptyComponent={() => <Empty height={this.state.flatlistHeight} />}
          ListHeaderComponent={() => <Header />}
          ListFooterComponent={() => <Footer />}
          refreshing={this.state.isRefreshing}
          onRefresh={this.onRefresh}
          onEndReachedThreshold={0.1}
          onEndReached={this.onLoadMore}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  contianer: {
    flex: 1,
  },
  emptyPage: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  emptyImage: {},
  item: {
    backgroundColor: '#f7f7f7',
    padding: 12,
    flexDirection: 'row',
    // borderBottomWidth: 1,
    // borderColor: '#e9e9e9',
  },
  itemImage: {
    width: 90,
    height: 68,
    marginRight: 16,
  },
  itemInfo: {
    flex: 1,
    marginBottom: 4,
  },
  itemBottom: {
    position: 'absolute',
    right: 6,
    bottom: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 16,
  },
  itemTag: {
    borderWidth: 1,
    paddingHorizontal: 2,
    marginLeft: 4,
  },
  tagText: {
    fontSize: 10,
  },
  comments: {
    fontSize: 10,
    color: '#8c9399',
  }
});