import React,{ Component } from 'react'
import ReactDom from 'react-dom'

import './modal.css'


class Modal extends Component{
    constructor(){
        super();
    }
    render(){
        return ReactDom.createPortal(this.props.children,document.getElementById('modal-root'))
    }
    componentWillMount(){
        //将要把虚拟dom转真是dom
        console.log('子组件 2.组件将要挂载');
    }
    // 只触发一次
    componentDidMount(){
        console.log('子组件 4.组件挂载完成');
    }
     /*------------------- 更新阶段---------------------*/
     shouldComponentUpdate(){
         console.log('子组件 5.询问组件是否需要更新');
         return true;
     }
     componentWillUpdate(){
         console.log('子组件 6.组件将要更新，重新render');
     }
     componentDidUpdate(){
         console.log('子组件 7.组件已经更新完成');
     }

      /*------------------- 卸载阶段---------------------*/
     componentWillUnmount(){
        console.log('子组件  将要卸载componentWillUnmount');
     }
}
export default class Page extends Component{
    constructor(){
        super();
        this.state = {showModal:false}
        console.log('父组件 1. 调用constructor初始化props和state');

    }
    componentWillMount(){
        //将要把虚拟dom转真是dom
        console.log('父组件 2.组件将要挂载');
    }
    // 只触发一次
    componentDidMount(){
        console.log('父组件 4.组件挂载完成');
    }
     /*------------------- 更新阶段---------------------*/
     shouldComponentUpdate(){
         console.log('父组件 5.询问组件是否需要更新');
         return true;
     }
     componentWillUpdate(){
         console.log('父组件 6.组件将要更新，重新render');
     }
     componentDidUpdate(){
         console.log('父组件 7.组件已经更新完成');
     }

      /*------------------- 卸载阶段---------------------*/
     componentWillUnmount(){
        console.log('父组件  将要卸载componentWillUnmount');
     }
    
    toggleModal = ()=>{
        this.setState({
            showModal:!this.state.showModal
        })
    }
    render(){
        console.log('父组件 3.render渲染，也就是挂载');
        return (
            <div>
                <button onClick={this.toggleModal}>显示/关闭模态窗口</button>
                {
                    this.state.showModal&&(
                        <Modal>
                            <div id="modal" className="modal">
                                <div id="content" className="content">
                                    主体内容
                                    <button onClick={this.toggleModal}>关闭</button>
                                </div>
                            </div>
                        </Modal>
                    )
                }
            </div>
        )
    }
}