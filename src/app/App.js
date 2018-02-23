import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import Signin from './components/signin';
import {firebase} from "./firebase";
import "firebase/auth";

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      islogin: false
    }
    this.checkForIsLogin = this.checkForIsLogin.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        this.setState({
          islogin: true
        })
      }else{
        this.setState({
          islogin: false
        })
      }
    });
  }

  checkForIsLogin = (email,pass) => {
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode +'--'+ errorMessage);
    });
    
  }
  


  render() {
    let show = null;
    if(this.state.islogin){
      show = <div><Header/><Body/></div>;      
    } else {
      show = <Signin userSignin={this.checkForIsLogin} />;
    }
    return (
        <div>
          {show}          
        </div>
    );
  }
}

export default App;
