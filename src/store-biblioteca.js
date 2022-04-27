import {createStore} from 'redux'
import { reducer } from './reducer-biblioteca'

const initialState = {
    books: [],
}

export const store = createStore(reducer, initialState);