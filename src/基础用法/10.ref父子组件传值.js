import React from 'react';
import ReactDOM from 'react-dom'


//非受控组件：这个DOM元素的值存在DOM元素的内部，不受React控制
//受控组建：DOM元素的值受React状态控制

class Form1 extends React.Component{
  constructor(props){
    super(props);
  }
  add = ()=>{
    console.log(this.num.value);
  }
  render(){
    return (
      <>
        <input ref={inst => this.num = inst}/>
        <button onClick={this.add}>focus</button>
      </>
    )
  }
}
ReactDOM.render(
  <Form1 />,
  document.getElementById('root')
)



class Form extends React.Component{
  constructor(props){
    super(props);
    this.state = {text:'hello'}
  }
  add = ()=>{
    console.log(this.state.text);
  }
  handleChange = (event)=>{
    this.setState({text:event.target.value})
  }
  changeText = (text)=>{
    this.setState({text:text})
  }
  render(){
    return (
      <>
        <input value={this.state.value} onChange={this.handleChange}/>
        <Son text={this.state.text}  name={this.props.name} changeText={this.changeText}/>
        <button onClick={this.add}>add</button>
      </>
    )
  }
}
class Son extends React.Component{
  handleText = ()=>{
    this.props.changeText(this.refs.myInput.value)
  }
  render(){
    return (
      <>
        <div style={{border:'1px solid red'}}>
          <div> text:{this.props.text} name:{this.props.name}</div>
          <input ref="myInput"/>
          <button onClick={this.handleText}>改变父亲的text</button>
        </div>
        
      </>
    )
  }
}
ReactDOM.render(
  <Form />,
  document.getElementById('root')
)
