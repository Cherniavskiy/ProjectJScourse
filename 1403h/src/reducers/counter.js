export default (state = [0, 0, 0, 0], action) => {
  switch (action.type) {
    case "INCREMENT":
      const i = action.i;
      const newState = [...state];
      newState[i] = state[i] + 1;
      console.log(newState, action);
      return newState;
    default:
      return state;
  }
};