import * as types from "./action-types";


export default {
    increment() {
        return { type: types.INCREMENT }
    },
    decrement() {
        return { type: types.DECREMENT }
    },
    //延时一秒加一
    asyncIncrement() {
        return function (dispatch, getState, amount) {
            setTimeout(() => {
                dispatch({ type: types.INCREMENT, payload: amount })
            }, 1000)
        }
    },
    promiseIncrement() {
        return {
            type: types.INCREMENT,
            payload: new Promise((resolve, reject) => {
                setTimeout(() => {
                    let result = Math.random();
                    if (result > .5) {
                        resolve({number:result})
                    } else {
                        reject({number:result})
                    }
                }, 1000);
            })
        }
    }
}