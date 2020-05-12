import React from 'react';

export default function(Component,name) {
    return class extends React.Component{
        constructor(){
            super()
            this.state = {
                value:''
            }
        };
        componentDidMount(){
            this.setState({
                value:localStorage.getItem(name)
            })
        }
        render(){
            return <Component {...this.props} value={this.state.value}/>
        }
    }
}