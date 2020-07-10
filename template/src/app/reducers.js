import { combineReducers } from 'redux';

import { exampleReducer } from '../modules/Example/reducers';


let reducersToCombine = {
    exampleReducer,
};

const appReducer = combineReducers(reducersToCombine);

export default appReducer;