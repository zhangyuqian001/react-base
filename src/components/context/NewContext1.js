import React, { Component } from 'react'
import PropTypes from 'prop-types'
var REACT_PROVIDER_TYPE = Symbol.for('react.provider');
var REACT_CONTEXT_TYPE = Symbol.for('react.context');
const ThemeContext = createContext();
// ThemeContext = {Provider,Consumer}

//实现React.createContext()，原理
function createContext() {
    class Provider extends Component{
        static value;
        $$typeof=REACT_PROVIDER_TYPE;
        constructor(props){
            super(props);
            Provider.value = props.value;
            this.state = {value:props.value}
        }
        render(){
            return this.props.children;
        }
        static getDerivedStateFromProps(props,state){
            Provider.value = props.value;
            return {value:props.props}
        }
    }

    class Consumer extends Component{
        render(){
            return this.props.children(Provider.value)
        }
    }


    return {$$typeof:REACT_CONTEXT_TYPE,Provider,Consumer}
}

class Header extends Component {
  
    render() {
        return (
            <div style={{ border: '5px solid green', padding: '5px' }}>
               Header
                <Title></Title>
            </div>
        )
    }
}
class Title1 extends Component {
    static contextType = ThemeContext;
    render() {
        this.context = Title.contextType.Provider.value//自己写的原理 才需要写这个
        console.log(this.context);
        return (
            <div style={{ border: '5px solid pink', padding: '5px',color:this.context.color }}>
                Title name = {this.context.name}
                age = {this.context.age}
                color = {this.context.color}
            </div>
        )
    }
}

function Title(props) {
    return (
        <ThemeContext.Consumer>
            {
                value => (
                    <div style={{ border: '5px solid pink', padding: '5px', color: value.color }}>
                        Title function
                    </div>
                )
            }
        </ThemeContext.Consumer>
    )
}

class Main extends Component {
    render() {
        return (
            <div style={{ border: '5px solid blue', padding: '5px' }}>
                Main
                <Content></Content>
            </div>
        )
    }
}

class Content extends Component {
    static contextType = ThemeContext;
    render() {
        this.context = Content.contextType.Provider.value//自己写的原理 才需要写这个
        return (
            <div style={{ border: '5px solid orange', padding: '5px',color:this.context.color }}>
                Content
                <button onClick={()=>this.context.setColor('red')}>变红</button>
                <button onClick={()=>this.context.setColor('yellow')}>变黄</button>
            </div>
        )
    }
}

function Content1(props) {
    return (
        <ThemeContext.Consumer>
            {
                value => (
                    <div style={{ border: '5px solid orange', padding: '5px', color: value.color }}>
                        Content function
                        <button onClick={() => value.setColor('red')}>变红</button>
                        <button onClick={() => value.setColor('yellow')}>变黄</button>
                    </div>
                )
            }
        </ThemeContext.Consumer>
    )
}


export default class Page extends Component {
 
    constructor(){
        super();
        this.state = {color:'gray'}
    }
    setColor = (color)=>{
        this.setState({color})
    }
    render() {
        let ctx = {color:this.state.color,setColor:this.setColor}
        return (
            <ThemeContext.Provider value={ctx}>
                <div style={{ border: '5px solid red', padding: '5px' }}>
                    Page
                    <Header>
                        <Title></Title>
                    </Header>
                    <Main>
                        <Content></Content>
                    </Main>
                </div>
            </ThemeContext.Provider>
        )
    }
}