import { createStore, combineReducers } from 'redux';
import { movieReducer } from './moviePage-reducer';

let reducers = combineReducers({
    moviePage: movieReducer,
})

let store = createStore(reducers);




export default store;