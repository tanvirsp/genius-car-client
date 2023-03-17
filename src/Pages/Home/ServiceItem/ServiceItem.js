import React from 'react';
import './ServiceItem.css';
import {BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const ServiceItem = ({service}) => {
    const {_id, title, price, img} = service;

    const navigate = useNavigate()
    

    const handleCheckout = ()=>{
        navigate(`/checkout/${_id}`)
    };

    return (
        <div className='service-grid-item'>
            <img src={img} alt={title} />
            <h4 className='service-title'>{title}</h4>
            <h5 className='service-price'>Price: ${price}</h5>
            <span onClick={handleCheckout} className='service-icon'><BsArrowRight /> </span>
        </div>
    );
};

export default ServiceItem;