function isAuthencation() {
  return {type :'AUTHENTICATE'}
}

function isNotAuthencation() {
  return {type: 'UNAUTHENTICATE'}
}

module.exports = {isAuthencation , isNotAuthencation}
