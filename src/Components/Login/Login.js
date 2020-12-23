import React, { useContext } from 'react';


import { googleSignIn, initializeFirebaseLogin } from './LoginManager';
import { Link, useHistory, useLocation } from 'react-router-dom';
import google from '../../images/googleLogo.png';
import logo from '../../images/logos/logo.png';
import './Login.css';

import { UserContext } from './../../App';

const Login = () => {

    initializeFirebaseLogin();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } }

    if(loggedInUser.email !== ''){
        history.replace(from)
    }


    const whoAreYou=(res)=>{
      fetch(`http://localhost:4000/checkAdminOrNot` , {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({email: res.email})
      })
          .then(res => res.json())
          .then(data => {
              console.log(data)
              if (data.person === 'admin') {
                  res.access = 'admin';
                  window.alert("Welcome Mr. Admin")
              }else{
                  res.access = 'user'
              }
              setLoggedInUser(res)
          })
  }

  const handleResponse = (res, redirect) => { //---------------- Handle response from firebase
          whoAreYou(res);
          redirect && history.replace(from);
  }

  const handleGoogleSignIn = () => {
      googleSignIn()
          .then(res => {
              res && handleResponse(res, true);
          })
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

        <div className="d-flex justify-content-center align-items-center my-5" style={{height:'200px'}}>
            <div className="card mt-5 p-5 d-flex justify-content-center align-items-center" >
                <div className="card-body ">
                    <h3>Login With</h3>
                </div>
                <div className="social-login px-4 py-3 ">
                    <button className="button "  onClick={handleGoogleSignIn}>
                        <img src={google} height="25" alt=""  /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            Continue with  google
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