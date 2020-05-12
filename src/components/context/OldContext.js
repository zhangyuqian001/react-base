import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Header extends Component {
     //定义子上下文对象的属性和类型
     static childContextTypes = {
        name:PropTypes.string,
        age:PropTypes.number
    }
    //返回或者说定义真正的子上下文
    getChildContext(){
        return {
            name:'header',
            age:10
        }
    }
    render() {
        return (
            <div style={{ border: '5px solid green', padding: '5px' }}>
               Header
                <Title></Title>
            </div>
        )
    }
}
class Title extends Component {
    //表示或者说指定我要获取哪些上下文对象
    static contextTypes = {
        color:PropTypes.string,
        setColor:PropTypes.func,
        name:PropTypes.string,
        age:PropTypes.number
    }
    render() {
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
    static contextTypes = {
        color:PropTypes.string,
        name:PropTypes.string,
        age:PropTypes.number,
        setColor:PropTypes.func
    }
    render() {
        return (
            <div style={{ border: '5px solid orange', padding: '5px',color:this.context.color }}>
                Content
                <button onClick={()=>this.context.setColor('red')}>变红</button>
                <button onClick={()=>this.context.setColor('yellow')}>变黄</button>
            </div>
        )
    }
}

export default class Page extends Component {
    //定义子上下文对象的属性和类型
    static childContextTypes = {
        color:PropTypes.string,
        setColor:PropTypes.func,
        name:PropTypes.string
    }
    //返回或者说定义真正的子上下文
    getChildContext(){
        return {
            color:this.state.color,
            setColor:this.setColor,
            name:'page'
        }
    }
    setColor = (color)=>{
        this.setState({color})
    }
    constructor(){
        super();
        this.state = {color:'gray'}
    }
    render() {
        return (
            <div style={{ border: '5px solid red', padding: '5px' }}>
                Page
                <Header>
                    <Title></Title>
                </Header>
                <Main>
                    <Content></Content>
                </Main>
            </div>
        )
    }
}