import createStore from './createStore';
import combineReducers from './combineReducers';
import bindActionCreators from './bindActionCreators';
import applyMiddleware from './applyMiddleware'
export {
    createStore,//创建仓库
    combineReducers, //合并redudcers
    bindActionCreators,//把actionCreator 和 dispatch 方法绑定在一起
    applyMiddleware //中间件
}
