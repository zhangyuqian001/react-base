import createStore  from '../redux/createStore';
// import { createStore } from 'redux';

let initState = 0;
const INCREMENT = Symbol.for('INCREMENT');
const DECREMENT = Symbol.for('DECREMENT');

/*
  在redux中动作是有规定的，规定必须有一个不为undefined  type 属性，用来表示动作类型
  state
  action
*/
function reducer(state=initState,action) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;//返回一个+1的新状态
      case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
let store = createStore(reducer);
let state = store.getState();
console.log(state);
let counterValue = document.getElementById('counter-value');
let incrementBtn = document.getElementById('increment-btn');
let decrementBtn = document.getElementById('decrement-btn');
function render() {
  counterValue.innerHTML = store.getState();
}
render();
let unsubscribe =  store.subscribe(render);//订阅
setTimeout(()=>{
  unsubscribe();//5秒后取消订阅
},5000)
incrementBtn.addEventListener('click',function() {
  store.dispatch({type:INCREMENT});
})
decrementBtn.addEventListener('click',function() {
  store.dispatch({type:DECREMENT});
})