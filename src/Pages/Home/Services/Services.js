import React, { useEffect, useState } from 'react';
import ServiceItem from '../ServiceItem/ServiceItem';
import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect( ()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    } , [])
    


    return (
        <section className='container'>
            <div className="section-header">
                <h4 className='section-title'>Service</h4>
                <h2 className='section-sub-title'>Our Service Area</h2>
                <p className='section-text'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="service-grid">
                {
                    services.map(service => <ServiceItem service={service} />)
                }
            </div>
            <div style={{textAlign: "center", marginTop: "45px"}}><button className='btn btn-outline'>MORE SERVICES</button></div>

        </section>
    );
};

export default Services;