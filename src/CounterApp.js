import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import TestContainer from './containers/testContainer';
import CounterContainer from './containers/counterContainer';

class CounterApp extends React.Component {
    render() {
        return (       
            <View  style={styles.container}>
                 <CounterContainer/>
                 <TestContainer />
            </View>
        );
    }
}

export default CounterApp;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });
  