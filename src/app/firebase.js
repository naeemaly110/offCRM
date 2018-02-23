import firebase from "firebase/app";


const config = {
    apiKey: "AIzaSyDFD4JGhnFOK31cj3UcpfQD_uSwdCA8hj4",
    authDomain: "offcrm-9db56.firebaseapp.com",
    databaseURL: "https://offcrm-9db56.firebaseio.com",
    projectId: "offcrm-9db56",
    storageBucket: "offcrm-9db56.appspot.com",
    messagingSenderId: "393866922749"
  };

 firebase.initializeApp(config);
 

 export { firebase };
