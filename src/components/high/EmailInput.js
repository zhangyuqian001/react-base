import React, { Component }  from 'react'
import WithLocal from './WithLocal'

class EmailInput extends Component{
    render(){
        return (
            <input defaultValue={this.props.value}/>
        )
    }
}

export default WithLocal(EmailInput,'email')