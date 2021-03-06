import React from 'react';
import ReactDOM from 'react-dom'
//受控组件  非受控组件  以及ref

//1.ref=字符串(马上废除)  2.ref = 函数   
// 标准写法 3.

class Sum1 extends React.Component{
  add = ()=>{
   let numA = this.refs.numA.value;
   let numB = this.refs.numB.value;
   let result = parseFloat(numA) + parseFloat(numB);
   this.refs.result.value = result;
  }
  render(){
    return (
      // <> == <React.Fragment> 叫react代码片段，不会创建div
      <>
        <input ref="numA"/>+<input ref="numB"/><button onClick={this.add}>=</button> <input ref="result"/> 
      </>
    )
  }
}

class Sum2 extends React.Component{
  add = ()=>{
    let numA = this.numA.value;
    let numB = this.numB.value;
    let result = parseFloat(numA) + parseFloat(numB);
    this.result.value = result;
   }
  render(){
    return (
      <>
        <input ref={inst=>this.numA = inst}/>+<input ref={inst=> this.numB = inst}/><button onClick={this.add}>=</button> <input ref={inst=>this.result = inst}/>
      </>
    )
  }
}


//目前最标准的写法


//自己实现一下createRef的原理
function createRef() {
  return {current:null}
}
class Sum3 extends React.Component{
  constructor(props){
    super(props);
    // this.numA = React.createRef(); 
    // this.numB = React.createRef();
    // this.result = React.createRef();
    this.numA = createRef();//这里会指向{current:numAInput}
    this.numB = createRef();//这里会指向{current:numBInput}
    this.result = createRef();//这里会指向{current:resultInput}
  }
  add = ()=>{
    let numA = this.numA.current.value;
    let numB = this.numB.current.value;
    let result = parseFloat(numA) + parseFloat(numB);
    this.result.current.value = result;
   }
  render(){
    return (
      <>
        <input ref={this.numA}/>+<input ref={this.numB}/><button onClick={this.add}>=</button> <input ref={this.result}/>
      </>
    )
  }
}

ReactDOM.render(
  <Sum3 />,
  document.getElementById('root')
)

