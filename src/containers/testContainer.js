import React, { Component } from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import { connect } from 'react-redux'

class TestContainer extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>TestContainer</Text>
                <Text style={{fontSize:20}}>{this.props.counter}</Text>
                <Text>z</Text>
            </View>
        );
    }
}

function mapStateToProps(state){
    return {
        counter : state.counterReducer.counter
    }
}
export default connect(mapStateToProps, null)(TestContainer);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});