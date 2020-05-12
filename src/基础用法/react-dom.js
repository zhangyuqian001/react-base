function render(element,parentNode) {
    if (typeof element == 'string' || typeof element == 'number') {
      return parentNode.appendChild(document.createTextNode(element));
    }
    console.log(element);
    debugger
    let type,props;
    type = element.type;
    props = element.props;
    if (type.isReactComponent) {
        let returnedElement = new type(props).render();
        type = returnedElement.type;
        props = returnedElement.props;
    } else if (typeof type == 'function') {
        let returnedElement = type(props);
        type = returnedElement.type;
        props = returnedElement.props;
    }
    let domElement = document.createElement(type)
    for (const propName in props) {
        if (propName == 'className') {
            domElement.className = props[propName];
        } else if (propName == 'style') {
            let styleObj = props[propName];
            // for (const attr in styleObj) {
            //     domElement.style[attr] = styleObj[attr];
            // }
            let cssText = Object.keys(styleObj).map(attr=>{
                return `${attr.replace(/([A-Z])/g,function(){return '-'+arguments[1].toLowerCase()})}:${styleObj[attr]}`;
            }).join(';')
            domElement.style.cssText = cssText;
        }else if (propName == 'children') {
            let children = Array.isArray(props.children) ? props.children : [props.children];
            children.forEach(child => render(child.domElement));
        }
        else {
            domElement.setAttribute(propName,props[propName]);
        }
    } 
    // 这里把当前元素挂载到父节点上
    parentNode.appendChild(domElement);
    //挂载之后执行componentDidMount
}

export default {render}