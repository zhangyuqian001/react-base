import React, { Component } from 'react'

export default class PureComponent extends Component{
    isPureComponent = true;
    //传入新的属性对象和状态对象，然后返回一个是否需要更新的布尔值
    shouldComponentUpdate(nextProps,nextState){
        return !shllowEqual(this.props,nextProps) || !shllowEqual(this.state,nextState);
    }
}

//浅比较   比较obj1和obj2是否相等 如果相等的话则返回true，不相等则返回false，只比较第一层
function shllowEqual(obj1,obj2){
    if (obj1 === obj2) {
        return true
    }
    if (typeof obj1 != 'object' || typeof obj2 != 'object' || typeof obj1 === null || typeof obj2 === null) {
        return false
    }
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);
    if (keys1.length != keys2.length) {
        return false
    }
    for (const key of keys1) {
        if (!obj2.hasOwnProperty(key) || obj1[key] !== obj2[key]) {
            return false
        }
    }
    return true
}