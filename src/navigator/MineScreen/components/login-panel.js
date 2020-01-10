import React, { Component } from 'react';
import {
  View,
  Image,
} from 'react-native';
import Button from '../../../components/base/Button';
import styles from '../styles/login-panel';
import { withNavigation } from 'react-navigation';

class LoginPanel extends Component {

  callLogin = () => {
    this.props.navigation.navigate('Login');
  }


  render () {
    const loginTypes = [
      { name: 'phone', icon: require('../../../assets/icon/login_phone.png') },
      { name: 'qq', icon: require('../../../assets/icon/icon_qq_login.png') },
      { name: 'wechat', icon: require('../../../assets/icon/icon_weixin_login.png') },
      { name: 'weibo', icon: require('../../../assets/icon/icon_sina_login.png') },
    ];

    return (
      <View style={styles.container}>
        <View style={styles.loginList}>
          {
            loginTypes.map((item, index) => (
              <Image
                key={index}
                style={styles.loginIcon}
                source={item.icon}
              />
            ))
          }
        </View>
        <Button
          title="登录/注册"
          onPress={this.callLogin}
        />
      </View>
    );
  }
}

export default withNavigation(LoginPanel);
