import React from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';

import { RootStack } from './src/navigations/router';
import store from "./src/store/index";
import Personnages from './src/containers/Personnages';


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View>
          <Personnages/>
        </View>
      </Provider>
    );
  }
}
