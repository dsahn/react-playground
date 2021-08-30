import {createStore} from 'redux';
import subscribersReducer from './subscribers/reducer';

const store = createStore(subscribersReducer);

export default store;