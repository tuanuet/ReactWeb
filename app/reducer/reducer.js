const redux = require('redux');
import list from './list'
import auth from './authenticate'

let reducer = redux.combineReducers({list,auth})

export default reducer
