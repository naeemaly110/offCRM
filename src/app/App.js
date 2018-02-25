import React from 'react';
import Header from './components/header';
import Body from './components/body';
import Signin from './components/signin';
import {firebase} from "./firebase";
import "firebase/auth";
import Loader from './components/loader';
import {connect} from "react-redux";

class App extends React.Component {

  constructor(props){
    super(props);

  
    this.checkForIsLogin = this.checkForIsLogin.bind(this);
    this.userLogout = this.userLogout.bind(this);
    this.startLoading = this.startLoading.bind(this);
    this.stopLoading = this.stopLoading.bind(this);
  }

  componentWillMount(){
    firebase.auth().onAuthStateChanged((user) => {
      this.startLoading();
      if (user) {
        this.setState({
          islogin: true
        })
      }else{
        this.setState({
          islogin: false
        })
      }
      this.stopLoading();
    });
  }
  
  startLoading = () => {
    this.setState({
      isloading: true
    })
  }
  stopLoading = () => {
    this.setState({
      isloading: false
    })
  }

  checkForIsLogin = (email,pass) => {
    this.startLoading();
    firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error) {
      
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode +'--'+ errorMessage);
    });
    this.stopLoading();
    
  }
  
  userLogout = () => {
    this.startLoading();
    firebase.auth().signOut().then(function() {
      this.setState({
        islogin: false
      })
    }).catch(function(error) {
      // An error happened.
    });
    this.stopLoading();
  }


  render() {
    let show = null;
    if(this.props.islogin){
      show = <div><Header /*userLogoutFunc={this.userLogout}*/ /><Body/></div>;      
    } else {
      show = <Signin /*userSignin={this.checkForIsLogin}*/ />;
    }
    return (
        <div>
          <Loader isVisible = {false}/>
          {show}          
        </div>
    );
  }
}

const mapStateToProps = (state)=>{
  
  return {
    islogin: state.userReducer.islogin
  };
};

export default connect(mapStateToProps)(App);
