import React, { Component } from 'react'

export default class MouseTracer extends Component {
    constructor() {
        super()
        this.state = {
            x: 0,
            y: 0
        }
    }
    handleMouseMove = (event) => {
        this.setState({
            x: event.clientX,
            y: event.clientY
        })
    }
    render() {
        return (
            // <div onMouseMove={this.handleMouseMove}>
            //     {this.props.children(this.state)}
            // </div>
            <div onMouseMove={this.handleMouseMove}>
                {this.props.render(this.state)}
            </div>
        )
    }
}


