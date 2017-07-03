/**
 * Created by ndthu on 6/30/2017.
 */
import React from 'react'
import {  NavLink } from 'react-router-dom'
import request from 'superagent'
import { connect } from 'react-redux'
import { isAuthencation ,isNotAuthencation} from '../../action/authenticate'

@connect((state)=> { return {}})
class Header extends React.Component{

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
            <header>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <NavLink className="navbar-brand" to="/">Truyện Nhạt</NavLink>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li><NavLink activeClassName="active" to="/">Trang chủ</NavLink></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Thể loại <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><NavLink to="/trinhtham">Trinh thám</NavLink></li>
                                        <li><NavLink to="/tinhcam">Tình cảm</NavLink></li>
                                        <li><NavLink to="/haihuoc">Hài hước</NavLink></li>
                                    </ul>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><NavLink to="/signup"><span className="glyphicon glyphicon-user"></span> Đăng ký</NavLink></li>
                                <li><NavLink to="/login"><span className="glyphicon glyphicon-log-in"></span> Đăng nhập</NavLink></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header;
