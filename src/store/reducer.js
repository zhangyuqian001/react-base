import * as types from "./action-types";

let initState = {number:1}

export default function reducer(state=initState,action) {
    switch (action.type) {
        case types.INCREMENT:
            // return state + 1;//返回一个+1的新状态
            if (action.error)action.payload.number = action.payload.number*-1;
            return {number:state.number + (action.payload?action.payload.number:1)}
        case types.DECREMENT:
            // return state - 1;
            return {number:state.number - (action.payload?action.payload.number:1)}
        default:
            return state;
    }
}