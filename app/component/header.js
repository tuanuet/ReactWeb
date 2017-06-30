/**
 * Created by ndthu on 6/30/2017.
 */
import React from 'react';

class Header extends React.Component{
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
                            <a className="navbar-brand" href="#">Truyện Nhạt</a>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                            <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Trang chủ</a></li>
                                <li className="dropdown">
                                    <a className="dropdown-toggle" data-toggle="dropdown" href="#">Thể loại <span className="caret"></span></a>
                                    <ul className="dropdown-menu">
                                        <li><a href="#">Trinh thám</a></li>
                                        <li><a href="#">Tình cảm</a></li>
                                        <li><a href="#">Hài hước</a></li>
                                    </ul>
                                </li>

                            </ul>
                            <ul className="nav navbar-nav navbar-right">
                                <li><a href="#"><span className="glyphicon glyphicon-user"></span> Đăng ký</a></li>
                                <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> Đăng nhập</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </header>
        )
    }
}

export default Header;