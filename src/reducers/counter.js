import * as Actions from '../actions/actionTypes';

const initialState = {
    counter: 0
}

const counterReducer = (state = initialState, action)=>{
    switch(action.type){
        case Actions.INCREASE_COUNTER : return { counter : state.counter + 1}
        case Actions.DECREASE_COUNTER : return { counter : state.counter - 1}
        default : return state;
    }
}

export default counterReducer;


