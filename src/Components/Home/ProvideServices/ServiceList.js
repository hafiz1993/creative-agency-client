import React from 'react';

const ServiceList = ({service}) => {
    return (
        <div className="card m-3 px-3">
        <div className="text-center service-info  p-4">
            <img src={service.img} height="80" alt="" /> <br /> <br />
            <h5 className="font-weight-bold">{service.title}</h5>
            <p>{service.description}</p>
        </div>
    </div>
    );
};

export default ServiceList;