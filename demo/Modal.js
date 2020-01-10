import React, { Component } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  Modal,
  TouchableHighlight
} from 'react-native';

export default class App extends Component {
  constructor (props) {
    super(props);
    this.state = {
      modalVisible: false
    };
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            alert('Modal has been closed.')
          }}
        >
          <View style={{ marginTop: 22 }}>
            <View>
              <Text>Hello World!</Text>
            </View>

            <TouchableHighlight
            >
              <Button
                title="Hide Modal"
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}
              />
            </TouchableHighlight>
          </View>
        </Modal>

        <Button
          title="点我"
          onPress={() => {
            this.setModalVisible(true);
          }}
        />
      </View>
    );
  }
}