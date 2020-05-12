import React , { Component } from 'react'
import WithLogger from './WithLogger'

class Counter extends Component{
    render(){
        return (
            <div>
              Counter
            </div>
        )
    }
}
// export default class Logger extends Component{
//     componentWillMount(){
//         console.time('cost');
//     }
//     componentDidMount(){
//         console.timeEnd('cost');
//     }
//     render(){
//         return (
//             <div>
//               Logger
//             </div>
//         )
//     }
// }

export default WithLogger(Counter)
