const redux = require('redux');
//state = default state
const _default =[]
let list = (state =_default,action) => {
  switch (action.type) {
    case 'ADD_ITEM_CHAP':
      return [...state,action.item]
    case 'ADD_All_CHAP':
        console.log(action.list);
        return [...state,...action.list]
    case 'DEL_ITEM_CHAP':
        return state.filter((e,i) => i != action.index)
    case 'DEL_ALL_CHAP':
        return []
    case 'DEL_AND_ADD_ALL':
        return action.list
    default:
      return state;
  }
}

export default list
