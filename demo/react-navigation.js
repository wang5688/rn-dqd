import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  Image
} from 'react-native';
import { WebView } from 'react-native-webview';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

class LogoTitle extends Component {
  render() {
    return (
      <Image source={require('./src/assets/images/pic.jpeg')} style={{ width: 30, height: 30 }} />
    );
  }
}

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Home: ' + navigation.getParam('count', 0),
      // headerTitle: () => <Text>Home</Text>,
      headerRight: () => (
        <Button
          title="Info"
          color="#fff"
          onPress={() => {
            console.log(navigation.state.params)
            const increaseCount = navigation.getParam('increaseCount', null);
            increaseCount && increaseCount();
          }}
        />
      )
    };
  };

  constructor (props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount () {
    console.log('home page did mount');
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  componentWillUnmount() {
    console.log('home page will unmount 111');
  }

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      this.props.navigation.setParams({ increaseCount: this._increaseCount, count: this.state.count });
    });
  }
  
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => {
            const { navigation } = this.props;

            navigation.navigate('Details', {
              id: parseInt(Math.random() * 100),
              count: this.state.count
            });
          }}
        />
      </View>
    );
  }
}

class DetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: `Details: ${navigation.getParam('id', 'NO-ID')}`,
      headerTitle: () => <LogoTitle />
      // headerStyle: {
      //   backgroundColor: 'blue'
      // },
    };
  };
  
  componentDidMount () {
    console.log('detail page did mount');
  }

  componentWillUnmount() {
    console.log('detail page will unmount');
  }

  render() {
    const { state: { params }, getParam } = this.props.navigation;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screnn: {getParam('id', 'NO-ID')}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => {
            const { navigation } = this.props;

            navigation.push('Details');
          }}
        />
        <Button
          title="返回首页"
          onPress={() => {
            const { navigation } = this.props;

            // navigation.navigate('Home');
            navigation.popToTop();
          }}
        />
        <Button
          title="open new web page"
          onPress={() => {
            const { navigation } = this.props;
            navigation.navigate('Webview');
          }}
        />
      </View>
    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title : 'ChatId: 000'
    };
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>This is a chat page</Text>
      </View>
    );
  }
}

class WebviewScreen extends Component {
  static navigationOptions = {
    title: 'Webview'
  };

  render() {
    return (
      <WebView
        originWhitelist={['*']}
        source={{ html: '<h1>hello world!</h1><br/><a href="myapp://chat/1123123">打开聊天</a>' }}
      />
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Chat: {
      screen: ChatScreen,
      path: 'chat/:chatId'
    },
    Webview: {
      screen: WebviewScreen,
      path: 'web/:url'
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerStyle: {
          backgroundColor: '#f4511e'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerLeft: () => (
          <Button
            title="Back"
            style={{ width: 40, height: 40, backgroundColor: '#fff' }}
            onPress={() => navigation.goBack()}
          />
        )
      };
    }
  }
);

const AppContaner = createAppContainer(AppNavigator);

class App extends Component {

  handleNavigationChange (prevState, newState, action) {
    console.log('prevState: ' + JSON.stringify(prevState));
    console.log('newState: ' + JSON.stringify(newState));
    console.log('action: ' + JSON.stringify(action));
  }

  render () {
    return (
      <AppContaner
        uriPrefix="myapp://"
        onNavigationStateChange={this.handleNavigationChange}
      />
    );
  }
}

export default App;