import React from 'react';
import './Location.css';
import date from "../../../assets/icons/date.svg";


const Location = () => {
    return (
        <section className='container'>
            <div className='location-container'>
                <div className='icon-box'>
                    <div>
                        <img src={date} alt="date" />
                    </div>
                    <div className='location-info'>
                        <small>We are open monday-friday</small>
                        <h4>7:00 am - 9:00 pm</h4>
                    </div>
                </div>
                <div className='icon-box'>
                    <div>
                        <img src={date} alt="date" />
                    </div>
                    <div className='location-info'>
                        <small>We are open monday-friday</small>
                        <h4>7:00 am - 9:00 pm</h4>
                    </div>
                </div>
                <div className='icon-box'>
                    <div>
                        <img src={date} alt="date" />
                    </div>
                    <div className='location-info'>
                        <small>We are open monday-friday</small>
                        <h4>7:00 am - 9:00 pm</h4>
                    </div>
                </div>
            </div>
            
            
        </section>

    );
};

export default Location;

