import {createStore} from 'redux'
import rootReducer from '../reducers/rootReducer'

const initialState = {}

const store = createStore(rootReducer, initialState)

module.exports = store
