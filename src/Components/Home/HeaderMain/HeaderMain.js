import React from 'react';
import img from '../../../images/logos/Frame.png';

const HeaderMain = () => {
    return (
        <main  style={{height:'500px'}} className="row d-flex align-items-center">
            <div className="col-md-5 offset-md-1">
               <h1 class="font-weight-bold">
                   Let's Grow Your <br/> Brand to The <br/> next level
               </h1>
               <p class="text-justify">Lorem ipsum dolor, sit amet <br/> consectetur adipisicing elit. <br/> Consectetur assumenda facere <br/> illum libero eaque aut excepturi <br/> mollitia possimus</p>

               <button type="button" class="btn btn-dark" style={{width:'150px'}}>Hire Us</button>

            </div>
            <div className="col-md-6">
            <img src={img}alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;