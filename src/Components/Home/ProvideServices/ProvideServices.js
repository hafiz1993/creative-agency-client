
import React, { useEffect, useState } from "react";
// import ser1 from '../../../images/icons/service1.png';
// import ser2 from '../../../images/icons/service2.png';
// import ser3 from '../../../images/icons/service3.png';
// import ser4 from '../../../images/icons/service4.png';
// import ser5 from '../../../images/icons/service5.png';
import ServiceList from "./ServiceList";
import './ProvideServices.css';



const ProvideServices = () => {
  const [service, setService] = useState([])

  useEffect(() => {
    fetch(`http://localhost:4000/getServices`)
      .then(res => res.json())
      .then(data => {
        setService(data)
      })
  }, [])

  

  return (
    <div className="gap">
      <div className="my-5">
        <h3 className="text-center"><strong>Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></strong></h3>
      </div>
      <div className="provided-service-scroll-area pr-4">
        <div className="card-columns">
          {
            service.length > 0
              ?
              service.map(service => (<ServiceList key={service._id} service={service}></ServiceList>))
              :
              <h4 className="text-center">Loading....</h4>
          }
        </div>


      </div>
    </div>
  );
};

export default ProvideServices;