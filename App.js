import React from 'react';
import { StyleSheet } from 'react-native';
import CounterApp from './src/CounterApp';
import { createStore } from 'redux';
import {Provider} from 'react-redux';

const initialState = {
  counter: 3
}
const reducer = (state = initialState, action)=>{
  switch(action.type){
    case 'INCREASE_COUNTER' : return { counter : state.counter + 1}
    case 'DECREASE_COUNTER' : return { counter : state.counter - 1}
  }
  return state;
}
const store = createStore(reducer);

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
