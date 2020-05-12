import React from 'react';
import ReactDOM from 'react-dom'
class Clock extends React.Component{
  constructor(props){
    super(props);
    //在构造函数里，是唯一可以给this.state赋初始值的地方
    this.state = {date:new Date().toLocaleTimeString()};
  }
  //组件挂载完成之后调用
  componentDidMount(){
    this.$timer = setInterval(()=>{
      //setState  1.修改状态 2.重新render
      this.setState({date:new Date().toLocaleTimeString()})
    },1000)
  }
  render(){
    return <div>时间：{this.state.date}</div>
  }
}
ReactDOM.render(
  <Clock />,
  document.getElementById('root')
)

