import React, { Component }  from 'react'
import WithLocal from './WithLocal'
import WithAjax from './WithAjax'

class UserNameInput extends Component{
    //该部分已被WithLocal复用
    // constructor(){
    //     super()
    //     this.state = {value:''}
    // }
    // componentDidMount(){
    //     this.setState({
    //         value:localStorage.getItem('username')
    //     })
    // }
    render(){
        return (
            <input defaultValue={this.props.value}/>
        )
    }
}
//多层高阶组件
// 高阶组件的多层嵌套 也是hooks解决的问题之一
let UserNameInputWithAjax = WithAjax(UserNameInput);
let UserNameInputWithLocal = WithLocal(UserNameInputWithAjax,'username')

export default UserNameInputWithLocal