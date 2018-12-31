import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
//import customLogger from '../middleware/customMiddleware';
import customLogger from 'redux-logger';

export default store = createStore(rootReducer, applyMiddleware(customLogger));

