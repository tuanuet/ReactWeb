const redux = require('redux');
//state = default state
let list = (state = ['tuan','lan','phong','ka'],action) => {
  switch (action.type) {
    case 'ADD':
      return [...state,action.item]
    case 'DEL':
        return state.filter((e,i) => i != action.index)
    default:
      return state;
  }
}

export default list
