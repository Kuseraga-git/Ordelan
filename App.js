import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Provider } from 'react-redux';

import { RootStack } from './src/navigations/router';
import { store } from "./src/store/index";
import Personnages from './src/containers/Personnages';


console.log("ok")

// import ProductContainer from "./src/containers/ProductContainer";
// import CartContainer from "./src/containers/CartContainer";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Personnages/>
        </View>
      </Provider>
    );
  }
}
