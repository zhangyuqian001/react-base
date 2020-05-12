export default function logger(store) {
    return function (dispatch) {
        return function (action) {
            console.log('老状态', store.getState());
            dispatch(action)
            console.log('老状态', store.getState());
        }
    }
}