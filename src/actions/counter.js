import {connect} from 'react-redux';
import CounterApp from '../CounterApp';
import * as Actions from './actionTypes';

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

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);