function addAllChap(list) {
  return {type : 'ADD_All_CHAP',list}
}
function delAllChap() {
  return {type : 'DEL_ALL_CHAP'}
}
function delAndAddAll(list) {
  return {type:'DEL_AND_ADD_ALL',list}
}
function addItem(item) {
  return {type :'ADD',item}
}

function delItem(index) {
  return {type: 'DEL',index}
}

module.exports = {addItem , delItem ,addAllChap , delAndAddAll ,delAllChap}
