const redux = require('redux');
import list from './list'

let reducer = redux.combineReducers({list})

export default reducer
