import React from 'react';
import { StyleSheet } from 'react-native';
import CounterApp from './src/CounterApp';
import store from './src/store';
import {Provider} from 'react-redux';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store} >
          <CounterApp/>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
