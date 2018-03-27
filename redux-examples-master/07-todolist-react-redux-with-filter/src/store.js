import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  todos: [
    { id: 1, text: 'Read article', done: true },
    { id: 2, text: 'Write letter', done: false },
    { id: 3, text: 'Change passport', done: false },
    { id: 4, text: 'Order pizza', done: true },
  ], 
  filter: ''
};
const store = createStore(reducer, initialState, composeEnhancers(applyMiddleware(thunk)));

export default store;
