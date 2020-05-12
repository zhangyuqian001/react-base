import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'

let sty = {
  color:'green'
}
let name = "zyq";
let getAge = function() {
  return 27
}


// React.createElement('h1',null,"hello") = <h1>hello</h1>
let element =  React.createElement('h1',{className:'colorFont'},"hello",
React.createElement('span',{},'world'));
console.log(element);

/*
  React元素，就是一个普通的JS对象  => 虚拟dom
  {
    type: "h1",
    key: null,
    ref: null,
    props: {
      children:[
        0:'hello',
        1:{
          type: "span",
          key: null,
          ref: null,
          props: {
            children:'world'
          }
        }
      ]
    }
   }
*/

ReactDOM.render(
  <h1 className="colorFont" style={sty}>hello {name} {getAge()}</h1>,
  document.getElementById('root')
);
