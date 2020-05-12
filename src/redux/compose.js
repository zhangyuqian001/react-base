function add1(str){
    return '1' + str
}
function add2(str){
    return '2' + str
}
function add3(str){
    return '3' + str
}
function compose(...funcs){
    if (funcs.length === 0) {
        return args=> args
    }
    if (funcs.length === 1) {
        return funcs[0];
    }
    return funcs.reduce((func,next)=>(...args)=>func(next(...args)))
}


function compose1(...funcs){
    return function(...args){
      let result;
      /* for(let i=funcs.length-1;i>=0;i--){
        let func = funcs[i];
        result = func(i==funcs.length-1?args:result);
      } */
      let i=funcs.length-1;
      while(i>=0){
        let func = funcs[i];
        result = func(i==funcs.length-1?args:result);
        i--;
      }
      return result;
    }
  }

let result = compose(add1,add2,add3)('yuiqan')
console.log(result);

export default compose