import counter1 from './counter1'

import counter2 from './counter1'

import {combineReducers} from 'redux'


let reducers = combineReducers({
    counter1,
    counter2
});

// function combineReducers(reducers){
    
// }

export default reducers;