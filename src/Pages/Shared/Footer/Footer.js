import React from 'react';
import "./Footer.css";
import logo from "../../../assets/logo_white.svg";
import { FaFacebookF, FaGoogle, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <div className="fast-column">
                        <img src={logo} alt="logo" />
                        <p>Edwin Diaz is a software and web  <br/> technologies engineer,
                            a life coach  <br/>trainer who is also a serial .</p>
                        <span className='social_icons'>
                            <FaFacebookF /> 
                            <FaGoogle /> 
                            <FaInstagram /> 
                            <FaLinkedinIn /> 
                        </span>
                    </div>
                    <div className='list-item'>
                        <h5>About</h5>
                        <ul>
                            <li>Home</li>
                            <li>Service</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div className='list-item'>
                        <h5>Company</h5>
                        <ul>
                            <li>Why Car Doctor? </li>
                            <li>About</li>
                    
                        </ul>
                    </div>
                    <div className='list-item'>
                        <h5>Support</h5>
                        <ul>
                            <li>Support Center</li>
                            <li>Feedback</li>
                            <li>Accesbility</li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;