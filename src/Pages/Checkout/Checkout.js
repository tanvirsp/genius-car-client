import React, { useContext } from 'react';
import './Checkout.css';
import { useLoaderData } from 'react-router-dom';

import auth from '../../firebase/firebase.config';

import { AuthContext } from '../../firebase/AuthProvider/AuthProvider';


const Checkout = () => {
    const {_id, title, price} = useLoaderData();
    const {user} = useContext(AuthContext);
   
   
    const handlePlaceOrder = (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        // const email = user?.email || "unregister";
        const message = form.message.value;
        const order = {
            service : _id,
            serviceName: title,
            name,
            phone,
            email: user.email,
            message,
        };
        

        fetch( "http://localhost:5000/order", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.acknowledged){
                form.reset()
            }
        })
        .catch( (err)=> console.error(err))


    }



    return (
        <section>
            <div className="container">
                <div>
                    <h2>Service: {title}</h2>
                    <h3>Price: ${price}</h3>
                </div>
                <form onSubmit={handlePlaceOrder} className="order-form">
                    <input type="text" name="name" id="name" placeholder="Your Name" />
                    <input type="tel" name="phone" id="phone" placeholder="Your Phone Number" />
                    <input type="email" name="email" id="email" placeholder="Your Email" value={user?.email} readOnly  />
                    <textarea id="message" name="message" rows="4" cols="50" placeholder="Message"></textarea>
                    <input type="submit" value="Order Confirm" />
                </form>
            </div>
        </section>
    );
};

export default Checkout;