import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { UserContext } from './../../App';
import { useEffect } from 'react';
import AdminPanel from './AdminPanel';


const AdminSecurePage = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext); 
    const history = useHistory();

    useEffect(()=>{
        if(loggedInUser.access !== 'admin'){
            alert('Authorization failed! Admin dashboard is highly secured. Please click "Admin Panel" button from navigation bar. ')
            history.replace('/')
        }
    },[])

    return (
        <div>
        {
            loggedInUser.access === 'admin' 
            &&
            <AdminPanel/> 
        }
    </div>
    );
};

export default AdminSecurePage;