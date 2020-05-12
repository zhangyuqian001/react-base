export default function(reducers){
    const reducerKeys = Object.keys(reducers);
    return function(state={},action){
        const nextState = {};
        for (let i = 0; i < reducerKeys.length; i++) {
            const key = reducerKeys[i];
            const reducer = reducers[key];
            const previousStateForKey = state[key];
            const nextStateForkey = reducer(previousStateForKey,action);
            nextState[key] = nextStateForkey;
        }
        return nextState;
    }
}