import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class Person extends Component{
    static defaultProps = {
        isMarried:false
    }
    //校验传入的props属性类型
    static propTypes = {
        name:PropTypes.string.isRequired,
        age:PropTypes.number.isRequired,
        gender:PropTypes.oneOf(['男','女']),
        isMarried:PropTypes.bool,
        hobby:PropTypes.arrayOf(PropTypes.string),
        position:PropTypes.shape({
            x:PropTypes.number,
            y:PropTypes.number
        }),
        //自定义校验
        age(props,propName,componentName){
            if (props[propName] < 18) {
                return new Error(`Invalid Prop ${propName} supplied to ${componentName}`)
            }
        }
    }
    render(){
        return (
            <div>
             {this.props.name}
            </div>
        )
    }
}