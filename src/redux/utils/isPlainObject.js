
export default function isPlainObject(obj){
    if (typeof obj != 'object' || obj === null) {
        return false;
    }
    // let proto = obj;
    // while (Object.getPrototypeOf(proto)) { //proto.__proto__
    //     proto = Object.getPrototypeOf(proto)
    // }
    return Object.getPrototypeOf(obj) === Object.prototype
}
