export function increment() {
    return {type: 'INCREMENT'};
}

export function asyncIncrement() {
    return function(dispatch) {
        setTimeout(() => dispatch(increment()), 1000)
    }
}