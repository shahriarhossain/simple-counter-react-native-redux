import React from 'react';
import { connect } from 'react-redux';
import * as Actions from '../actions/actionTypes';
import CounterComponent from '../components/counterComponent';

class CounterContainer extends React.Component {
    render() {
        return (
            <CounterComponent 
                counterVal = {this.props.counter}
                onIncrease={this.props.increaseCounter}
                onDecrease={this.props.decreaseCounter}
            />
        );
    }
}

function mapStateToProps(state){
    return {
        counter : state.counterReducer.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter: ()=> {dispatch({type: Actions.INCREASE_COUNTER})},
        decreaseCounter: ()=> {dispatch({type: Actions.DECREASE_COUNTER})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);