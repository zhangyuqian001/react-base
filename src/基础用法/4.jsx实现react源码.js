import React from './react';
import ReactDOM from './react-dom'

/*
  我们把页面分成若干个独立的部分，单独编写，单独维护
  函数组件
  //1.一个返回普通react元素的函数就是一个合法的react组件
  //2.组件需要返回一个并且仅能返回一个React根元素
  //3.组件的名称必须大写字母开头
  

  函数组件执行过程：
  //1.收集属性对象{name:"yuqian.zhang",age:10}
  //2.会把props对象传入Welcome函数，并得到一个返回值 React元素

  类组件执行过程：
  //1.收集属性对象{name:"yuqian.zhang",age:10}
  //2.把属性对象传递给Welcome类的构造函数，并得到Welcome类的实例
  //3.调用render方法获取返回值，也是一个react元素

*/


// function Welcome(props) {
//   return <div><h1>hello {props.name}</h1><h1>hello {props.age}</h1></div> 
// }
// ReactDOM.render(
//   <Welcome name="yuqian.zhang" age={10}/>,
//   document.getElementById('root')
// )




// class Welcome2 extends React.Component {
//   constructor(props){
//      super(props);    //this.props = props;
//   }
//   render(){
//     let sty = {
//       color:'red',
//       fontSize:'62px'
//     }
//     return <div><h1>hello {this.props.name}</h1><h1 style={sty}>hello {this.props.age}</h1></div> 
//   }
// }


let data = {
  name:'yuqian.zhang',
  age:10
}
// let element = (
//   <h1 className="title" style={{color:'red',fontSize:'50px'}}>
//     hello <span style={{color:'green',fontSize:'38px'}}>world</span>
//   </h1>
// )

/*
//普通组件
let element = ('h1',{
  className:'title',
  style:{
    color:'red',
    fontSize:'50px'
  }
},"hello",React.createElement("span".null,"world"));

*/
/*
//函数组件
function Welcome1({name,age}) {
  return React.createElement('h1',{id:'welcome'},name,age) 
}
let element = React.createElement(Welcome1,{...data});

*/
//类组件
class Welcome1 extends React.Component{
  render(){
    return React.createElement('h1',{id:'class-welcome'},this.props.name,this.props.age)
  }
}
let element = React.createElement(Welcome1,{...data})

ReactDOM.render(
  element,
  document.getElementById('root')
)

