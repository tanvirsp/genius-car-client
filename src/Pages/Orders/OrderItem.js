import React, { useEffect, useState } from 'react';

const OrderItem = ({order}) => {
    const {serviceName, price, service} = order;
    const [orderService, setOrderService] = useState({});

    useEffect( ()=>{
        fetch(`http://localhost:5000/service/${service}`)
        .then(res => res.json())
        .then(data =>setOrderService(data) )

    },[service])

    return (
        <tr>
            <td><button>X</button></td>
            <td>
                <img className='table-img' src={orderService.img} alt="" />
            </td>
            <td>{serviceName}</td>
            <td>{orderService.price}</td>
            <td>Pending</td>
        </tr>
    );
};

export default OrderItem;