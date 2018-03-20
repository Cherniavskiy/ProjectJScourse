import React from 'react';
import { reducer } from './reducers/reducer';
import { createStore } from 'redux';

const store = createStore(reducer);
export { store };