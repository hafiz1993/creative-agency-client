import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import UserReviewCard from './UserReviewCard';

const UserReview = () => {
    const [reviews , setReviews] = useState([])
    useEffect(()=>{
        fetch(`http://localhost:4000/allReview`)
            .then(res => res.json())
            .then(data => {
                setReviews(data) 
            })
    },[])
    return (
        <div className="gap">
            <div className="my-5">
                <h3 className="text-center"><strong>Clients <span style={{ color: '#7AB259' }}>Feedbacks</span></strong></h3>
            </div>
            <div className="card-columns">
                {
                    reviews.length > 0
                        ?
                        reviews.map((each, index) => <UserReviewCard key={index} data={each} />)
                        :
                        <h4 className="text-center"> Loading... </h4>
                }
            </div>
        </div>
    );
};

export default UserReview;