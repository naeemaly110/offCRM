import React, { Component } from 'react';
import Header from './components/header';
import Body from './components/body';
import Signin from './components/signin';


class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      islogin: true
    }
  }


  render() {
    let show = null;
    if(this.state.islogin){
      show = <Signin/>;
    } else {
      show = <div><Header/><Body/></div>;
    }
    return (
        <div>
          {show}          
        </div>
    );
  }
}

export default App;
