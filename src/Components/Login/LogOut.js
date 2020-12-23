import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { googleSignOut } from './LoginManager';
import { UserContext } from './../../App';

const LogOut = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); //------- global logged in user
    const history = useHistory()

    useEffect(()=>{
        googleSignOut()
        .then(res=>{
            setLoggedInUser(res);
            history.push('/')
        })
    },[])
    
    return (
        <div>
            
        </div>
    );
};

export default LogOut;