/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logos/logo.png';
import { UserContext } from './../../../App';

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
         <container>
        <nav class="navbar navbar-expand-lg navbar-light pt-3" >
       <img src={logo} style={{width:'200px'}} alt=""/>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
      
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link mr-3 font-weight-bold" >Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3 font-weight-bold" >Our Portfolio</a>
            </li>
            <li class="nav-item">
              <a class="nav-link mr-3 font-weight-bold" >Our Team</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link mr-3 font-weight-bold" >Contact Us</a>
            </li>
            {
                            loggedInUser.email
                                ?
                                <>
                                    <li className="nav-item d-flex">
                                        <Link className="nav-link " to="/user"> {loggedInUser.displayName} </Link>
                                    </li>
                                    {
                                        loggedInUser.access === 'admin'
                                        &&
                                        <li className="nav-item d-flex">
                                            <Link className="nav-link " to="/admin"> Admin Panel </Link>
                                        </li>
                                    }
                                    <Link className="nav-link" to="/logout">
                                    <button type="button" class="btn btn-dark" style={{width:'150px'}}>Log Out</button>
                                    </Link>
                                </>
                                :
                                <li className="nav-item">
                                    <Link className="nav-link" to="/login">
                                    <button type="button" class="btn btn-dark" style={{width:'150px'}}>Login</button>
                                    </Link>
                                </li>
                        }

            </ul>
          
        </div>
      </nav>

      </container>
    );
};

export default Navbar;