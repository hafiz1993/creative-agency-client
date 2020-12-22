
import React from "react";
import ser1 from '../../../images/icons/service1.png';
import ser2 from '../../../images/icons/service2.png';
import ser3 from '../../../images/icons/service3.png';
import ser4 from '../../../images/icons/service4.png';
import ser5 from '../../../images/icons/service5.png';
import ServiceList from "./ServiceList";
import './ProvideServices.css';



const ProvideServices = () => {

    const serviceData = [
        {
          title: "Web & mobile Design",
          img: ser1,
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
        },
        {
            title: "Web & mobile Design",
            img: ser2,
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
          },
          {
            title: "Web & mobile Design",
            img: ser3,
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
          },
          {
            title: "Web & mobile Design",
            img: ser4,
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
          },
          {
            title: "Web & mobile Design",
            img: ser4,
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
          },
          {
            title: "Web & mobile Design",
            img: ser4,
            description:
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum, facere.",
          },
          
          
      ];

    return (
        <div className="gap">
            <div className="my-5">
            <h3 className="text-center"><strong>Provide Awesome <span style={{ color: '#7AB259' }}>Services</span></strong></h3>
            </div>
            <div className="provided-service-scroll-area pr-4">
            <div className="card-columns">
          {
              serviceData.map((service) =>(<ServiceList service={service}></ServiceList>))
          }
         </div>
            
          
            </div>
        </div>
    );
};

export default ProvideServices;