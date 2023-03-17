import React from 'react';
import './OurTeam.css';

import {BsFacebook, BsTwitter, BsInstagram } from 'react-icons/bs';
import {FiArrowLeft, FiArrowRight } from 'react-icons/fi';


import member1 from '../../../assets/images/team/1.jpg'
import member2 from '../../../assets/images/team/2.jpg'
import member3 from '../../../assets/images/team/3.jpg'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";


// import required modules
import {  Autoplay, Navigation, Pagination } from "swiper";


const OurTeam = () => {

    const ourTeam = [
        {
            teamMember: 'Car Engine Plug',
            designation: 'Engine Expert',
            socialLink: ['facebook', 'twitter', 'instagram']

        },
        {
            teamMember: 'Car Engine Plug',
            designation: 'Engine Expert',
            socialLink: ['facebook', 'twitter', 'instagram']

        },
        {
            teamMember: 'Car Engine Plug',
            designation: 'Engine Expert',
            socialLink: ['facebook', 'twitter', 'instagram']

        },
    ]

    return (
        <section className="container">
            <div className="section-header">
                <h4 className='section-title'>Team</h4>
                <h2 className='section-sub-title'>Meet Our Team</h2>
                <p className='section-text'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className="product-grid">
                
            </div>

            <div className='team-member-container'>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 5000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".team-button-next",
                        prevEl: ".team-button-prev",
                    }}
                    modules={[Autoplay,Navigation]}
                    className="teamSliderr"

                >



                    <SwiperSlide>
                        <div className='team-member'>
                            <img src={member1} alt="" />
                            <h3>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <ul className='team-social-icon'>
                                <li><a href="#"> <BsFacebook /> </a></li>
                                <li><a href="#"> <BsTwitter /> </a></li>
                                <li><a href="#"> <BsInstagram /> </a></li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='team-member'>
                            <img src={member2} alt="" />
                            <h3>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <ul className='team-social-icon'>
                                <li><a href="#"> <BsFacebook /> </a></li>
                                <li><a href="#"> <BsTwitter /> </a></li>
                                <li><a href="#"> <BsInstagram /> </a></li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='team-member'>
                            <img src={member3} alt="" />
                            <h3>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <ul className='team-social-icon'>
                                <li><a href="#"> <BsFacebook /> </a></li>
                                <li><a href="#"> <BsTwitter /> </a></li>
                                <li><a href="#"> <BsInstagram /> </a></li>
                            </ul>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='team-member'>
                            <img src={member3} alt="" />
                            <h3>Car Engine Plug</h3>
                            <p>Engine Expert</p>
                            <ul className='team-social-icon'>
                                <li><a href="#"> <BsFacebook /> </a></li>
                                <li><a href="#"> <BsTwitter /> </a></li>
                                <li><a href="#"> <BsInstagram /> </a></li>
                            </ul>
                        </div>
                    </SwiperSlide>

                    <div className='team-nav-bar'>
                        <span className='team-button-next'><FiArrowLeft /> </span>
                        <span className='team-button-prev'>  <FiArrowRight/></span>
                        
                    </div>
                
                    
                </Swiper>


            </div>



        </section>
    );
};

export default OurTeam;