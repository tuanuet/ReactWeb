import React from 'react'
import {  NavLink } from 'react-router-dom'
import request from 'superagent'
import { connect } from 'react-redux'
import { isAuthencation ,isNotAuthencation} from '../action/authenticate'


@connect((state)=> { return {}})
class Nav extends React.Component {
  componentWillMount(){
    request
      .get('/authentication')
      .end((err, res) =>{
        let { dispatch } = this.props;
        let action = res.body.isSuccess ? isAuthencation : isNotAuthencation
        dispatch(action())
      });
  }

  render(){
    return(
      <div className="container darktheme">
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/listline">listline</NavLink></li>
          <li><NavLink to="/detailstory">detailstory</NavLink></li>
        </ul>
      </div>
    )
  }
}

export default Nav
