const redux = require('redux');
import reducer from './reducer/reducer'

let store = redux.createStore(reducer)

export default store
