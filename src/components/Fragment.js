import React, { Component } from 'react'


class TodoItems extends Component {
    render(){
        return (
            this.props.items.map((item,index)=><p key={index}>{item}</p>)
        )
    }
}


export default class Todos extends Component {
    constructor() {
        super();
        this.state = { items: ['a', 'b', 'c'] };
    }
    render() {
        return (
            <div>
                <input />
                <button>+</button>
                <TodoItems items={this.state.items}/>
            </div>
        )
    }
}