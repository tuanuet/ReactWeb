function addItem(item) {
  return {type :'ADD',item}
}

function delItem(index) {
  return {type: 'DEL',index}
}

module.exports = {addItem , delItem}
