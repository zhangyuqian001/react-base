import isPlainObject from "./utils/isPlainObject";
import ActionsTypes from "./utils/actionTypes";

export default function createStore(reducer,preloadedState) {
    
    if (typeof reducer != 'function') {  //reducer 必须是一个函数
        throw new Error('reducer必须是一个函数')
    }
    let currentReducer = reducer;//当前处理器
    let currentState = preloadedState;//当前状态
    let currentListeners = [];//保存监听的函数
    function getState(){//返回当前状态
        return currentState
    }
    function dispatch(action){
        if (!isPlainObject(action) ) {
            throw new Error('action必须是一个对象')
        }
        if (typeof action.type == 'undefined') {
            throw new Error('action的type属性不能是undefined')
        }
        currentState = currentReducer(currentState,action);
        for (let i = 0; i < currentListeners.length; i++) {
            const listener = currentListeners[i];
            listener();
        }
        return action
    }
    function subscribe(listener){
        let subscribe = true;
        currentListeners.push(listener);
        return function unsubscribe() {//订阅之后，会返回一个取消订阅的方法
            if (!subscribe) return;
            const index = currentListeners.indexOf(listener);
            currentListeners.splice(index,1);
            subscribe = false;
        }
    }
    dispatch({type:ActionsTypes.INIT})
    return {
        getState,
        dispatch,
        subscribe
    }
}