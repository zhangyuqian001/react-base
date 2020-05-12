import React from 'react';
import ReactDOM from 'react-dom'
import LifeCycle from '../components/LifeCycle'
import NewLifeCycle from '../components/NewLifeCycle'
import GetDerivedStateFromProps from '../components/getDerivedStateFromProps'
import GetSnapshotBeforeUpdate from '../components/GetSnapshotBeforeUpdate'
import OldContext from '../components/context/OldContext'
import PropTypes from '../components/PropTypes'
import NewContext1 from '../components/context/NewContext1'
import Pure from '../components/pure/Pure'
import Logger from '../components/high/Logger'
import UserNameInput from '../components/high/UserNameInput'
import EmailInput from '../components/high/EmailInput'
import MouseTracker from '../components/render/MouseTracer'
import Picture from '../components/render/Picture'
import Fragment from '../components/Fragment'
import Modal from '../components/Modal'

/*
 生命周期
  旧版本：
  
  新版本：
     少了3个：componentWillMount、componentWillUpdate、componentWillReceiveProps
     多了2个：getDerivedStateFromProps、getSnapshotBeforeUpdate
 
*/

let props = {
  name: 'yuqian',//字符串  必填
  age: 28,//数字，必填 而且不能小于等于18岁
  gender: '男',//只能是 男或者 女
  isMarried: true,//是否已婚  这是一个布尔值
  hobby: ['smoking,drinking'], //字符串数组
  position: { x: 100, y: 100 } //拥有x,y属性的对象
}

// ReactDOM.render(
//   <>
//     <MouseTracker>
//       {
//         (props)=><Picture {...props}/>
//       }
//     </MouseTracker>
//   </>
//   ,
//   document.getElementById('root')
// )

//使用render props
// ReactDOM.render(
//   <>
//     <MouseTracker render={(props)=><Picture {...props}/>} />
//   </>
//   ,
//   document.getElementById('root')
// )
//使用高阶函数
// ReactDOM.render(
//    <Picture />
//   ,
//   document.getElementById('root')
// )

ReactDOM.render(
  <Modal />
 ,
 document.getElementById('root')
)