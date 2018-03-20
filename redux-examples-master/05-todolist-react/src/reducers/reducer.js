const reducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, text } = action;
            const newTodo = { id, text, done: false };
            return [...state, newTodo];
        case "TOOGLE_TODO":
            return state.map(todo => {
                if (todo.id !== action.id) {
                    return todo;
                }
                return {...todo, done: !todo.done};
            });
        case "REMOVE_TODO":
            const index = state.findIndex(t => t.id === action.id);
            if (index > -1) {
                return [...state.slice(0, index), ...state.slice(index, +1)];
            }
            return;
        default:
            return state;
    }
};
  export { reducer };