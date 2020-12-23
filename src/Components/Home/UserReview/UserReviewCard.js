import React from 'react';

const UserReviewCard = (props) => {
    const { name, company, description, image } = props.data;
    return (
        <div>
            <div className="card m-3 px-3">
            <div className="p-4">
                <div className="row">
                    <div className="col-6">
                        <img src={image} height="70" style={{borderRadius:'50%'}} alt="" /> <br/> <br/>
                    </div>
                    <div className="col-6">
                        <h5 className="font-weight-bold">{name}</h5>
                        <h6 className="font-weight-bold">{company}</h6>
                    </div>
                </div>
                <p>{description}</p>
            </div>
        </div>
            
        </div>
    );
};

export default UserReviewCard;