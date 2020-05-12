import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

let username = 'yuqian';
function greeting(username) {
  if (username) {
    return <h1>欢迎{username}</h1>
  }else {
    return <h1>陌生人</h1>
  }
}

let element = greeting(username)
ReactDOM.render(
  element,
  document.getElementById('root')
);
