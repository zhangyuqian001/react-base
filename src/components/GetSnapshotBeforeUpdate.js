import React, { Component } from 'react'
export default class GetSnapshotBeforeUpdate extends Component {
    constructor(props) {
        super(props);
        this.state = { message: ['6','4','7','5','22','12','56','980','67','540','344'] };
        this.wrapper = React.createRef();
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({message:[this.state.message.length,...this.state.message]})
        },1000)
    }
    getSnapshotBeforeUpdate(){
        //返回更新内容的高度
        return this.wrapper.current.scrollHeight;
    }
    //组件更新完毕
    componentDidUpdate(prevProps,prevState,prevScrollHeight){
        this.wrapper.current.scrollTop = this.wrapper.current.scrollTop + (this.wrapper.current.scrollHeight - prevScrollHeight)
    }
    render() {
        let style = {
            height:'100px',
            width:'200px',
            border:'1px solid red',
            overflow:'auto'
        }
        return (
            <ul style={style} ref={this.wrapper}>
                {
                    this.state.message.map((message,index)=><li key={index}>{message}</li>)
                }
            </ul>
        )
    }
}