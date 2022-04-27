import { createStore } from 'redux';
import reducer from './reducer';

const initialState = {
    messages: []
}

export const store = createStore(reducer, initialState);