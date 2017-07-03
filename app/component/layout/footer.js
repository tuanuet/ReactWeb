/**
 * Created by ndthu on 6/30/2017.
 */
import React from 'react';
class Footer extends React.Component{
    render(){
        return(
            <div className="container">
                <h3>About Us</h3>
                <hr className="hr-footer"/>
                <div className="text-center center-block">
                    <p className="txt-railway">- Bootsnipp.com -</p>
                    <br />
                    <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
                    <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
                    <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
                    <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
                </div>
                <hr className="hr-footer"/>
            </div>
        )
    }
}

export default Footer;
