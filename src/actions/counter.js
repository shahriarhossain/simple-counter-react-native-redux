import {connect} from 'react-redux';
import CounterApp from '../CounterApp';

function mapStateToProps(state){
    return {
        counter : state.counterReducer.counter
    }
}

function mapDispatchToProps(dispatch){
    return {
        increaseCounter: ()=> {dispatch({type: 'INCREASE_COUNTER'})},
        decreaseCounter: ()=> {dispatch({type: 'DECREASE_COUNTER'})}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterApp);