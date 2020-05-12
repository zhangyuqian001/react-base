
// import createStore from "../redux/createStore";
import { createStore, applyMiddleware } from "../redux";

// import reducer from "./reducers";
import reducer from "./reducer";
import logger from '../redux-logger'
import thunk from '../redux-thunk'
// let store = createStore(reducer,{counter1:0,counter2:0});

// applyMiddleware  中间件

// let logger = store => dispatch => action => {
//     console.log('老状态', store.getState());
//     dispatch(action)
//     console.log('老状态', store.getState());
// }


// let store = applyMiddleware(thunk,logger)(createStore)(reducer,0);

let store = createStore(reducer,0);
console.log(store.getState());
export default store