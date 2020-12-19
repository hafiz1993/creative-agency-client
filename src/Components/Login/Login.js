import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../images/googleLogo.png';
import logo from '../../images/logos/logo.png';
import './Login.css';

import { UserContext } from './../../App';

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }


    const handleGoogleSignIn = () => {
      var provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function (result) {
        const { displayName, email } = result.user;
        const signedInUser = { name: displayName, email }
        setLoggedInUser(signedInUser);
        storeAuthToken();
      }).catch(function (error) {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    }
  
    const storeAuthToken = () => {
      firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
        .then(function (idToken) {
          sessionStorage.setItem('token', idToken);
          history.replace(from);
        }).catch(function (error) {
          // Handle error
        });
    }
    return (
        <div>
        <div className="login d-flex justify-content-center">
            <div className="row">
                <div className="my-5">
                    <Link to="/"><img src={logo} height="70" alt="" /></Link>
                </div>
            </div>
        </div>

        <div className="d-flex justify-content-center align-items-center my-5" style={{height:'300px'}}>
            <div className="card mt-5 p-5 d-flex justify-content-center align-items-center" >
                <div className="card-body ">
                    <h3>Login With</h3>
                </div>
                <div className="social-login px-3 py-2 ">
                    <button className="button "  onClick={handleGoogleSignIn}>
                        <img src={google} height="25" alt=""  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Continue with 
                        </button>
                </div>
                <br/>
                <p className="text-center">Don't have an account? <br/> <Link  to="#">Create an account</Link> </p>
            </div>

        </div>
    </div>
    );
};

export default Login;