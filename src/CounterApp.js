import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class CounterApp extends React.Component {
    state = {
        counter: 0
    }
    increaseCounter = ()=>{
        this.setState({counter: this.state.counter + 1})
    }  
    decreaseCounter = ()=>{
        this.setState({counter: this.state.counter - 1})
    }

    render() {
        return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-around', width:300}} >
            <TouchableOpacity onPress={()=>this.increaseCounter() } >
                <Text style={{fontSize:20}}>Increase</Text>
            </TouchableOpacity>
            <Text style={{fontSize:20}}>{this.state.counter}</Text>
            <TouchableOpacity onPress={()=>this.decreaseCounter()} >
                <Text style={{fontSize:20}}>Decrease!</Text>
            </TouchableOpacity>          
            </View>
        </View>
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
