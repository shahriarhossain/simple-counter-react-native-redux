import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

class CounterComponent extends React.Component {
    render() {
        return (
        <View style={styles.container}>
            <View style={{flexDirection:'row', justifyContent:'space-around', width:300}} >
                <TouchableOpacity onPress={()=> this.props.onIncrease() } >
                    <Text style={{fontSize:20}}>Increase</Text>
                </TouchableOpacity>
                <Text style={{fontSize:20}}>{this.props.counterVal}</Text>
                <TouchableOpacity onPress={()=>this.props.onDecrease()} >
                    <Text style={{fontSize:20}}>Decrease</Text>
                </TouchableOpacity>          
            </View>
        </View>
        );
    }
}

export default CounterComponent;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});