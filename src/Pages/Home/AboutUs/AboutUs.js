import React from 'react';
import './AboutUs.css';
import about_bg from "../../../assets/images/about_us/about_image.jpg";

const AboutUs = () => {
    return (
        <section className='container'>
            <div className='about-container'>
                <div className='about-image'>
                    <img src={about_bg} alt="About Pic" />
                </div>
                <div className='about-us-info'>
                    <h4 className='section-title'>About Us</h4>
                    <h2 className='section-sub-title '>We are qualified & of experience in this field</h2>
                    <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                        or randomised words which don't look even slightly believable. 
                    </p>
                    <p>
                        The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;