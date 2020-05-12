import React, { Component,PureComponent } from 'react'
// import PureComponent from './PureComponent'
class Title1 extends PureComponent{
    render(){
        console.log('Title render');
        return <div>{this.props.title}</div>
    }
}

function Title(props){
    console.log('Title function render');
    return <div>{props.title}</div>
}

// React.memo 原理实现
function memo(FuncComponent) {
    return class extends PureComponent{
        render(){
            return <FuncComponent {...this.props} />
        }
    }
}
Title = React.memo(Title)


class Counter extends PureComponent{
    render(){
        console.log('Counter render');
        return <div>{this.props.number}</div>
    }
}
export default class App extends PureComponent{
    constructor(props){
        super(props);
        this.state = {title:'计数器',number:0};
        this.inputRef = React.createRef();
    }
    add = ()=>{
        console.log(this.inputRef);
        this.setState({
            number:this.state.number + parseInt(this.inputRef.current.value)
        })
    }
    render(){
        return(
            <div>
                <Title title={this.state.title}></Title>
                <Counter number={this.state.number}></Counter>
                <input ref={this.inputRef}/>
                <button onClick={this.add}>+</button>
            </div>
        )
    }
}