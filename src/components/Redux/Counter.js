import React, { Component } from 'react';
// import actions from '../../store/action'
import { connect } from '../react-redux';
import action from '../../store/action';
// import { connect } from 'react-redux'

class Counter extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <p>{this.props.number}</p>
                <button onClick={this.props.increment}>+</button>
                <button onClick={this.props.decrement}>-</button>
                <button onClick={this.props.asyncIncrement}>延时＋1</button>
                <button onClick={this.props.promiseIncrement}>promise＋1</button>
            </div>
        )
    }
}

const mapStateToProps = state=>state;
const mapDispatchToProps = (dispatch)=>{
    return {
        increment:(...args) => dispatch(action.increment(...args)),
        decrement:(...args) => dispatch(action.decrement(...args))
    }
}

//1.状态可能很大，但此组件用的很少，
//2.可能需要增加或者减少修改一些属性
//3.即使映射的会不会也会触发渲染，也是为了性能优化

//connect负责连接仓库和组件
export default connect(
    mapStateToProps,
    action
    // mapDispatchToProps
)(Counter);