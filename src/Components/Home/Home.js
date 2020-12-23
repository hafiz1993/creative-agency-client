import React from 'react';

import './Home.css';
import Header from './Header/Header';
import BrandLogos from './BrandLogos/BrandLogos';
import ProvideServices from './ProvideServices/ProvideServices';
import OurWorks from './OurWorks/OurWorks';
import Footer from './Footer/Footer';
import UserReview from './UserReview/UserReview';





const Home = () => {
    return (
        <div className="font-weight-normal" >
            <div  className="banner-bg">
           <div className="container">
            <Header></Header>
           </div>
            </div>
            <div className="container">
                <BrandLogos></BrandLogos>
            </div>
            <div className="container">
               <ProvideServices></ProvideServices>
            </div>
            <div className="container work-bg">
                <OurWorks></OurWorks>
            </div>
            <div className="container ">
              <UserReview></UserReview>
            </div>
            <div className="container footer-bg">
                <Footer></Footer>
            </div>
           
        </div>
    );
};

export default Home;