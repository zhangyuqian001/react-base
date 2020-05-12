import React, { Component } from 'react'
import MouseTracer from './MouseTracer'

function withMouseTracker(Comp) {
    return props=><MouseTracer render={data=><Comp {...props} {...data}/>} />
}

class Picture extends Component {
    render() {
        return (
            <>
                <img src="http://localhost:3000/cat.jpg" />
                <p>当前鼠标的位置是x={this.props.x} y={this.props.y}</p>
            </>
        )
    }
}


export default withMouseTracker(Picture)