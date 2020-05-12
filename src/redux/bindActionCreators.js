function bindActionCreator(actionsCreator,dispatch) {
    return function() {
        return dispatch(actionsCreator.apply(this,arguments))
    }
}
export default function bindActionCreators(actionsCreators,dispatch) {
    if (typeof actionsCreators == 'function') {
        bindActionCreator(actionsCreators,dispatch)
    }
    const boundActionsCreators = {};
    for (const key in actionsCreators) {
        boundActionsCreators[key] = bindActionCreator(actionsCreators[key],dispatch);
    }
    return boundActionsCreators
}