import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {BsSearch, BsHandbag } from 'react-icons/bs';
import logo from "../../../assets/logo.svg"
import "./Header.css";
import { AuthContext } from '../../../firebase/AuthProvider/AuthProvider';


const Header = () => {
    const {user, logOut} = useContext(AuthContext);


    



    const handleSignOut = ()=>{
        logOut()
        .then( ()=>{


        })
    }


    return (
        <header>
            <div className="container">
                <div className="nav-bar">
                    <div className='logo'>
                        <img src={logo} alt="Logo" />
                    </div>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/services">Services</Link></li>
                            <li><Link to="/orders">Orders</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                            <li><Link to="/manage_inventory">Mange Inventory</Link></li>
                            {
                                user ?<button onClick={handleSignOut} className='sign-out'>Sign Out</button>
                                : <li><Link to="/login">Login</Link></li> 
                            }
                            
                            
                         
                            
                            
                        </ul>
                    </nav>
                    <div className='top-right'>
                        <p>{user?.displayName}</p>
                        <span className='icon'><BsHandbag /></span>
                        <span className='icon'><BsSearch/></span>
                        <button className='btn btn-outline'>Appointment</button>
                    </div>
                </div>
            </div>
      
        </header>
    );
};

export default Header;