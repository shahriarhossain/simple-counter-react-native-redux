import React from 'react';
import { StyleSheet } from 'react-native';
import CounterApp from './src/CounterApp';

export default class App extends React.Component {
  render() {
    return (
      <CounterApp/>
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
