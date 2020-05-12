import React from 'react';
import ReactDOM from 'react-dom'

/*
解决this指针的三种方法
1.this.add.bind(this)  把add方法里面的this指针绑定为组件实例
2.()=>this.add() 使用箭头(匿名)函数
3.给类的实例增加一个add的属性，而这个属性里的this绑死为组件实例

*/
class Counter extends React.Component{
  constructor(props){
    super(props);
    this.state = {number:0,name:'yuqian'};
  }
  //给类的实例上增加一个add的属性，而这个属性里的this绑死为组件实例
  //这个方法是直接赋给组件实例，而不是放在原型上的
  add = ()=>{
    //修改状态的方法有 this.setState   replaceState[这个15.5版本已经废除]
    // this.setState({number:this.state.number+1}) 
    this.setState({number:this.state.number+1})

    /*
    //异步方法，多次调用只会计算一次，可以通过以下方式实现，两次效果
      this.setState((state)=>({
        number:state.number+1
      }),()=>{
        console.log('state=' + this.state.number)
      })
      this.setState((state)=>({
        number:state.number+2
      }),()=>{
        console.log('state=' + this.state.number)
      })
      
    */
    

    //当调用setState的时候，其实状态并没有直接改变，而是放入一个队列中


    //强制更新，不管状态和属性修改没有，都会强制刷新界面
    //不推荐使用
    // this.state.number = this.state.number + 1;
    // this.forceUpdate()
  }
  render(){
    console.log(this);
    return (
      <>
        <p>{this.state.name} - {this.state.number}</p>
        <button onClick={this.add}>+</button>
      </>
    )
  }
}
ReactDOM.render(
  <Counter />,
  document.getElementById('root')
)

