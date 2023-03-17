import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import pic from '../../assets/images/login/login.svg'
import { AuthContext } from '../../firebase/AuthProvider/AuthProvider';
import SocialLogin from '../Shared/SocialLogin/SocialLogin';



const SignUp = () => {
 

    const {createUser} = useContext(AuthContext);

    const handleSignUp = event =>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const name = form.name.value;
        const password= form.password.value;

        createUser(email, password)
        .then(result =>{
            const user = result.user;
            console.log(user);
           
        })
        .catch(err => console.error(err));
        form.reset()
    }

    return (
        <section>
        <div className="container">
            <div className="login-container">
                <div className="login-img">
                    <img src={pic} alt="LoginImage" />
                </div>

                <div className='login-form'>
                    <h2 className="login-title">Sign Up</h2>
                    <form onSubmit={handleSignUp}>
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" />

                        <label htmlFor="email">Email</label>
                        <input type="email" name="email" id="email" />

                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" id="password" />
                        <input type="submit" value="Sign Up" />
                    </form>
                    <SocialLogin />
                    <div>
                            <p style={{textAlign:"center"}}>Have an account? <span className='short-link'> <Link to="/login">Login </Link></span></p>
                    </div>
                </div>
            </div>
            

        </div>

    </section>
    );
};

export default SignUp;