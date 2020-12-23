
import './App.css';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
  
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useEffect, useState } from 'react';

import firebase from "firebase/app";
import "firebase/auth";
import { initializeFirebaseLogin } from './Components/Login/LoginManager';
import LogOut from './Components/Login/LogOut';
import AdminSecurePage from './Components/AdminPanel/AdminSecurePage';



export const UserContext = createContext();


function App() {
  initializeFirebaseLogin()

  const [loggedInUser, setLoggedInUser] = useState({
      isLogIn: false,
      displayName: '',
      photo: '',
      email: ''
  }); //------- global logged in user


  const whoAreYou = (res) => {
      fetch(`http://localhost:4000/checkAdminOrNot`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email: res.email })
      })
          .then(res => res.json())
          .then(data => {
              if (data.person === 'admin') {
                  res.access = 'admin';
                  window.alert("Welcome Mr. Admin")
              } else {
                  res.access = 'user'
              }
              setLoggedInUser(res)
          })
  }

  useEffect(() => {
      firebase.auth().onAuthStateChanged(function (user) {
          if (user) {
              const userInfo = {
                  displayName: user.displayName,
                  email: user.email,
                  profilePhoto: user.photoURL
              }
              if (userInfo.email) {
                  whoAreYou(userInfo)
              }
          } else {
              // No user is signed in.
          }
      });
  }, [])
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
      <Route exact path="/">
     <Home></Home>
     </Route>
     <Route exact path="/login">
     <Login></Login>
     </Route>
     <Route path="/logout">
      <LogOut></LogOut>
     </Route>
    
     <Route path="/admin"> 
     <AdminSecurePage/>
     </Route>
     
     </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
