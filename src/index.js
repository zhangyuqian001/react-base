import React from 'react';
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'

import Modal from './components/Modal'
import store from './store'
import Counter from './components/Redux/Counter'
import Counter1 from './components/Redux/Counter1'
import Counter2 from './components/Redux/Counter2'


// ReactDom.render(
//     <>
//     <Counter1 />
//     <Counter2 />
//     </>
// ,
// document.getElementById('root'))

ReactDom.render((
    <Provider store={store}><Counter /></Provider>
)
    ,
    document.getElementById('root'))