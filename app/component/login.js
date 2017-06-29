import React from 'react'
const request = require('superagent');

function PageHeader() {
  return(
    <div className="page-header col-sm-offset-3">
      <h3>Sign in</h3>
    </div>
  )
}

class SignInDefault extends React.Component {
  signIn(e){
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;

    request
      .post('/login')
      .send({email,password}) // sends a JSON post body
      .set('Accept', 'application/json')
      .end((err, res) =>{
        console.log(res.body);
      });
  }
  render(){
    return(
      <div>
        <div className="form-group">
          <label htmlFor="email" className="col-sm-3 control-label">Email</label>
          <div className="col-sm-5">
            <input type="email" name="email" id="email" placeholder="Email" ref= "email" autoFocus="autofocus" required="required" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="password" className="col-sm-3 control-label">Password</label>
          <div className="col-sm-5">
            <input type="password" name="password" id="password" ref="password"placeholder="Password" required="required" className="form-control"/>
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-5">
            <button type="button" className="col-sm-3 btn btn-primary" onClick={this.signIn.bind(this)}><i className="fa fa-user"></i>Login</button><a href="/forgot" className="btn btn-link">Forgot your password?</a>
          </div>
        </div>
      </div>
    )
  }
}

function Hr() {
   return (
     <div className="form-group">
       <div className="col-sm-offset-3 col-sm-5">
         <hr/>
       </div>
     </div>
   )
}
class  SignInWith extends React.Component {
  signIn(type){
    let url = `/auth/${type}`
      request
        .get(url)
        .set('Accept', 'application/json')
        .end((err, res) =>{
          console.log(res);
        });
    }
  render(){
    return(
      <div className="form-group">
        <div className="col-sm-offset-3 col-sm-5">
          <a href="/auth/facebook" className="btn btn-block btn-facebook btn-social">
            <i className="fa fa-facebook"></i>Sign in with Facebook
          </a>
          <a href="/auth/google" className="btn btn-block btn-google btn-social" >
            <i className="fa fa-google-plus"></i>Sign in with Google
          </a>
        </div>
      </div>
    )
  }
}


class Login extends React.Component{
  render(){
    return(
      <div>
        <PageHeader />
        <form className="form-horizontal" action="#">
          <SignInDefault />
          <hr />
          <SignInWith />
        </form>
      </div>
    )
  }
}
export default Login
