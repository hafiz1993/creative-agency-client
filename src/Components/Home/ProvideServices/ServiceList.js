import React from 'react';

const ServiceList = ({service}) => {
    console.log(service);
    
    return (
        <div className="card m-5 px-3">
        <div className="text-center service-info  p-4">
            <img height='80' src={`data:image/jpeg;base64,${service.image.img}`}  alt="" /> <br /> <br />
            <h5 className="font-weight-bold">{service.name}</h5>
            <p>{service.description}</p>
        </div>
    </div>
    );
};

export default ServiceList;