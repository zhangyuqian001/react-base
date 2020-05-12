import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
//元素的更新
//元素是不可变的


setInterval(()=>{
  let clock = <div><span>当前时间：</span>{new Date().toLocaleTimeString()}</div>

  ReactDOM.render(
    clock,
    document.getElementById('root')
  );
},1000)