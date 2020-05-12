let state = {
    number:0
}
let callbacks = [];
callbacks.push((state)=>({number:state.number + 1}))
callbacks.push((state)=>({number:state.number + 2}))
callbacks.push((state)=>({number:state.number + 3}))
let v ;
let fns = [];
while ((v = callbacks.shift())) {
    let [cb,fn] = v;
    Object.assign(state,cb(state));
    fns.push(fn);
}
fns.forEach(fn=>fn());