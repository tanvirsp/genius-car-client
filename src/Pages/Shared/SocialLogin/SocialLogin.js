import React from 'react';
import './SocialLogin.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';



const SocialLogin = () => {

   
    
  
   
    
    const handleSignIn = ()=>{
       
    }
    


    return (
        <div className='social-login-btn'>
            <p>or Sign In with</p>
            <span><FaFacebookF/></span>
            <span onClick={handleSignIn}><FcGoogle /></span>

        </div>
    );
};

export default SocialLogin;