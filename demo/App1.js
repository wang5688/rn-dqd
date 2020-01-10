import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


export default class App extends Component {
  constructor (props) {
    super(props);
    console.log(222);
  }

  render () {
    const pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };

    return (
      <View
        style={{
          flexDirection: 'row',
          height: 100,
          padding: 20
        }}
      >
        <View style={{ backgroundColor: 'blue', flex: 0.2 }}></View>
        <View style={{ backgroundColor: 'red', flex: 0.8 }}></View>

        <Text style={styles.red}>red</Text>
        <Text style={styles.bigBlue}>big blue</Text>
        <Text style={[styles.bigBlue, styles.red]}>then red</Text>
        {/* <Text>Hello World!</Text> */}

        {/* <Image source={require('./src/assets/images/pic.jpeg')} style={{ width: 193, height: 110 }} /> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigBlue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red:{
    color: 'red'
  }
});
// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <Text>This is my first RN demo ！！</Text>
//     </>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
