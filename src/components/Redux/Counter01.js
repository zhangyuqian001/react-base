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