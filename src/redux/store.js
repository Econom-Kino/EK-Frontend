import { createStore, combineReducers } from 'redux';
import { movieReducer } from './moviePage-reducer';

let rootReducer = combineReducers({
    moviePage: movieReducer,
})

let store = createStore(rootReducer);


export default store;