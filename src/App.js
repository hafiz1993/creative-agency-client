
import './App.css';

import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';


export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
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
     
     
     </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
