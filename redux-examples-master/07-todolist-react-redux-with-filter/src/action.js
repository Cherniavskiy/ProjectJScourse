export const onTextChange = (e) => {
    return { type: 'FILTER_CHANGED', filter: e.target.value };
};

export const toggle = () => {
    return { type: 'TOGGLE_TODO', id: this.props.todo.id };
};

export const remove = () => {
    return { type: 'REMOVE_TODO', id: this.props.todo.id };
}

export const onAdd = () => {
    return { type: 'ADD_TODO', text: this.state.text, id: Date.now() };
  }
