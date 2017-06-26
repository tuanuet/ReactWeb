import React from 'react'
import { connect } from 'react-redux'
const {addItem, delItem} = require('../action/list-action');

class Line extends React.Component{
  render(){
    return(
      <div>{this.props.name}</div>
    )
  }
}

class ListLine extends React.Component {
  addName(e){
    var { dispatch } = this.props;
    dispatch(addItem('Hello World!'))
    e.preventDefault();
  }
  delName(e){
    var { dispatch } = this.props;
    dispatch(delItem(0))
    e.preventDefault();
  }
  render(){
    let listLine = this.props.lines.map((ele,i)=>{return <li key={i}><Line name={ele}/></li>})
    return(
      <div>
        <ul>{listLine}</ul>
        <button onClick={this.addName.bind(this)}>addName</button>
        <button onClick={this.delName.bind(this)}>delName</button>
      </div>
    )
  }
}

module.exports = connect((state)=>{
  return {lines : state.list}
})(ListLine);
