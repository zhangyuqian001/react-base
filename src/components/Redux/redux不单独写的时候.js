import React, { Component } from 'react';
import createStore from '../../redux/createStore';
import bindActionCreators from '../../redux/bindActionCreators';



const INCREMENT = Symbol.for('INCREMENT');
const DECREMENT = Symbol.for('DECREMENT');

function reducer(state,action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;//返回一个+1的新状态
        case DECREMENT:
            return state - 1;
        default:
            return state;
    }
}
let store = createStore(reducer,0);
let actions = {
    increment(){
        return {type:INCREMENT}
    },
    decrement(){
        return {type:DECREMENT}
    }
}

let boundActions = bindActionCreators(actions,store.dispatch); 

export default class Counter extends Component {
    state = {
        number:store.getState()
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState()
            })
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={boundActions.increment}>+</button>
                <button onClick={boundActions.decrement}>-</button>
            </div>
        )
    }
}



import React, { Component } from 'react';
import bindActionCreators from '../../redux/bindActionCreators';
import store from '../../store'
import actions from '../../store/action'

let boundActions = bindActionCreators(actions,store.dispatch); 

export default class Counter extends Component {
    state = {
        number:store.getState()
    }

    componentDidMount(){
        this.unsubscribe = store.subscribe(()=>{
            this.setState({
                number:store.getState()
            })
        })
    }

    componentWillUnmount(){
        this.unsubscribe();
    }

    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={boundActions.increment}>+</button>
                <button onClick={boundActions.decrement}>-</button>
            </div>
        )
    }
}