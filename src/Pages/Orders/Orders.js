import React, { useContext, useEffect } from 'react';
import './Orders.css';
import { useState } from 'react';
import OrderItem from './OrderItem';
import { AuthContext } from '../../firebase/AuthProvider/AuthProvider';

const Orders = () => {
    const [orders, setOrders] = useState([]);
    const {user, logOut} = useContext(AuthContext);


    useEffect( ()=>{
        
        fetch( `http://localhost:5000/orders?email=${user?.email}`, {
            headers:{
                authorization: `Bearer ${localStorage.getItem('geniusToken')}`
            }
        })
        .then(res => {
            if(res.status === 401 ||  res.status === 403){
                logOut();
            }
            return res.json()
        })
        .then (data => {
            setOrders(data)
        })
    } , [user?.email, logOut])

    
    return (
        <section>
            <div className="container">
                <h1>Your Order: {orders.length}</h1>
                <table className='order-table'>
                    <tr>
                        <td>Action</td>
                        <td>Image</td>
                        <td>Service</td>
                        <td>Price</td>
                        <td>Status</td>
                    </tr>
                    {
                        orders.map(order => <OrderItem key={order._id} order={order} />)
                    }
                    

                </table>
            </div>

        </section>
    );
};

export default Orders;