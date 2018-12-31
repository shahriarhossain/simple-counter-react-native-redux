import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import customLogger from '../middleware/customMiddleware';

export default store = createStore(rootReducer, applyMiddleware(customLogger));

