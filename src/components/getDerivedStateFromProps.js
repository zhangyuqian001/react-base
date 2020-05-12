import React, { Component } from 'react'
export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = { number: 0 }
    }
    add = () => {
        this.setState({ number: this.state.number + 1 })
    }
    render() {
        return (
            <div>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
                <SubCounter {...this.state}/>
            </div>
        )
    }
}
 class SubCounter extends Component {
    constructor() {
        super()
        this.state = { number:0 }
    }
    //根据新的属性对象派生状态对象  心的属性对象 和 旧的状态对象
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.number % 2 == 0) {
            return { number: nextProps.number + nextProps.number * 2 }
        } else {
            return { number: nextProps.number + nextProps.number * 3 }
        }
        return null
    }
    render() {
        console.log('child-render',this.state)
        return (
            <div>{ this.state.number }</div>
        )
    }
}