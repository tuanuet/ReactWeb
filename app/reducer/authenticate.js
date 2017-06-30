const redux = require('redux');
//state = default state
let authenticate = (state = false,action) => {
  switch (action.type) {
    case 'AUTHENTICATE':
      return true
    case 'UNAUTHENTICATE':
        return false
    default:
      return state;
  }
}

export default authenticate
