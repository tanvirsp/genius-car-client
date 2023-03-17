import React, { useContext } from 'react';
import './Login.css';
import pic from '../../assets/images/login/login.svg'
import SocialLogin from '../Shared/SocialLogin/SocialLogin';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../firebase/AuthProvider/AuthProvider';




const Login = () => {

    const {logIn}  = useContext(AuthContext);

    let navigate = useNavigate();
    let location = useLocation();
    let from = location.state?.from?.pathname || "/"; 

    const handleLogin = (event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        
        logIn(email, password)
        .then( result =>{
            const user = result.user;

            const currentUser = {
                email: user.email
            };
            console.log(currentUser);
            
            //get JWT token
            fetch("http://localhost:5000/jwt", {
                method:"POST",
                headers: {
                    "content-type":"application/json"
                },
                body:JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                localStorage.setItem("geniusToken", data.token);
                navigate(from, { replace: true });
            })
            

           
            
        })
        .catch( err => console.error(err));
    }


    return (
        <section>
            <div className="container">
                <div className="login-container">
                    <div className="login-img">
                        <img src={pic} alt="LoginImage" />
                    </div>

                    <div className='login-form'>
                        <h2 className="login-title">Login</h2>
                        <form onSubmit={handleLogin}>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />

                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" />
                            <input type="submit" value="Login" />
                        </form>
                        <SocialLogin />
                        <div>
                            <p style={{textAlign:"center"}}>New in Genius Car? <span className='short-link'> <Link to="/signUp">Sign Up</Link></span></p>
                        </div>
                    </div>
                </div>
                

            </div>
    
        </section>
    );
};

export default Login;