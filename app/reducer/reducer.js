const redux = require('redux');
import list from './list'
import auth from './authenticate'
import listChap from './list-chap'
let reducer = redux.combineReducers({list,auth,listChap})

export default reducer
