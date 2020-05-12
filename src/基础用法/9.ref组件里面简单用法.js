import React from 'react';
import ReactDOM from 'react-dom'


//ref 只能引用 类组件 不能引用函数组件 ,函数组件可以使用React.forwardRef(函数组件)来实现ref功能


//自己实现forwardRef原理

function forwardRef(funComponent){
  return function(props){//props = {ref1:{current:null}}
    return TextInput2(props,props.ref1)
  }
}
let TextInput3 = forwardRef(TextInput2);//React.forwardRef(TextInput2);
function TextInput2(props,ref1) {
  return <input ref={ref1}/>
}






// --------------------------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>



class Form extends React.Component{
  constructor(props){
    super(props);
    this.textInput = React.createRef();
  }
  getFocus = ()=>{
    //类组件ref
    // console.log(this.textInput.current.textInputChild.current);
    // this.textInput.current.textInputChild.current.focus();
    // 函数组件通过React.forwardRef实现 ref
    this.textInput.current.focus();
  }
  render(){
    return (
      <>
        <TextInput ref={this.textInput}/>
        <br />
        <TextInput3 ref1={this.textInput}/>
        <button onClick={this.getFocus}>focus</button>
      </>
    )
  }
}
class TextInput extends React.Component{
  constructor(props){
    super(props);
    this.textInputChild = React.createRef();
  }
  render(){
    return <input ref={this.textInputChild}/>
  }
}

ReactDOM.render(
  <Form />,
  document.getElementById('root')
)

