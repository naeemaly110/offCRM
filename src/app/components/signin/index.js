import "./signin.css";
import React from "react";

class Signin extends React.Component {
  constructor(props){
    
    super(props);
    this.setEmail = this.setEmail.bind(this);
    this.setPass =this.setPass.bind(this);
    this.loginUser = this.loginUser.bind(this);
    this.state = {
      email: "",
      pass: ""
    }
  }

  loginUser(e){
      e.preventDefault();
      this.props.userSignin(this.state.email,this.state.pass);
      //console.log(this.state.email + ' - ' + this.state.pass);
  
    }

  setEmail(event){
    this.setState({
      email: event.target.value
    })
  }

  setPass(event){
    this.setState({
      pass: event.target.value
    })
  }



  render(){
    return (
      <div className="container">
        <form onSubmit={this.loginUser} className="form-signin">
          <h2 className="form-signin-heading">Please sign in</h2>
          <label htmlFor="inputEmail" className="sr-only">
            Email address
          </label>
          <input
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email address"
            required=""
            autoFocus=""
            value={this.state.email}
            onChange={this.setEmail}
          />
          <label htmlFor="inputPassword" className="sr-only">
            Password
          </label>
          <input
            type="password"
            id="inputPassword"
            className="form-control"
            placeholder="Password"
            required=""
            value={this.state.pass}
            onChange={this.setPass}
          />
          <div className="checkbox">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
        </form>
      </div>
    );
  }
};

export default Signin;
