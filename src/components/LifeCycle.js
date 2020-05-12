import React, { Component } from 'react'
export default class LifeCycle extends Component {
    //静态属性  如果传入了name属性 就用props里面的 ，如果没传，就用下面的默认值
    static defaultProps = {
        name:'计数器(默认)'
    }
    
    /*------------------- 初始化阶段---------------------*/
    //1.初始化props和state
    constructor(props) {
        super(props);
        this.state = {number:0};//初始化默认的状态对象
        console.log('父组件 1. 调用constructor初始化props和state');
    }
    add = ()=>{
        this.setState({number:this.state.number + 1})
    }
     /*------------------- 挂载阶段---------------------*/
    //  componentWillMount在渲染过程中 永远只有执行一次
    componentWillMount(){
        //将要把虚拟dom转真是dom
        console.log('父组件 2.组件将要挂载');
    }
    render() {
        console.log('父组件 3.render渲染，也就是挂载');
        return (
            <div style={{border:'5px solid red'}}>
                <p>{this.state.number}</p>
                <button onClick={this.add}>+</button>
                <SubCounter number={this.state.number}/>
            </div>
        )
    }
    //一般是在componentDidMount执行副作用，进行异步操作
    // 只触发一次
    componentDidMount(){
        console.log('父组件 4.组件挂载完成');
    }
     /*------------------- 更新阶段---------------------*/
     shouldComponentUpdate(){
         console.log('父组件 5.询问组件是否需要更新');
         return true;
     }
     componentWillUpdate(){
         console.log('父组件 6.组件将要更新，重新render');
     }
     componentDidUpdate(){
         console.log('父组件 7.组件已经更新完成');
     }

      /*------------------- 卸载阶段---------------------*/
     componentWillUnmount(){
        console.log('父组件  将要卸载componentWillUnmount');
     }
}

class SubCounter extends Component{
    constructor(props){
        super(props);
        this.state = {number:0};
    }
    //该方法 只有当props属性发生变化才会触发，state发生变化不触发
    componentWillReceiveProps(){
        console.log('子组件 componentWillReceiveProps');
    }
    //调用此方法的时候，会把新的属性对象和新的状态对象传过来
    shouldComponentUpdate(nextProps,nextState){
        console.log('子组件 shouldComponentUpdate');
        return true;
    }
    
    componentWillUnmount(){
        console.log('子组件  将要卸载componentWillUnmount');
    }

    render(){
        console.log('2.子组件 render');
        return (
            <div style={{border:'5px solid green'}}>
                <p>{this.props.number}</p>
            </div>
        )
    }
}