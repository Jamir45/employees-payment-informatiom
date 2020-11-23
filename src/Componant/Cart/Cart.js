import React from 'react';

const Cart = (props) => {
    const payment = props.paymentEmployee;
    let total = payment.reduce( (defaultValue, employee) => defaultValue - employee.salary, 500000);
    let paidBalance = payment.reduce( (defaultValue, employee) => defaultValue + employee.salary, 0 )

    return (
        <div>
            <h4>Account balance</h4>
            <p><b>Company Revenue :</b> 500000 BDT</p>
            <p><b>Total balance :</b> {total} BDT</p>
            <p><b>Paid Employee :</b> {payment.length}</p>
            <p><b>Paid balance :</b> {paidBalance} BDT</p>
        </div>
    );
};

export default Cart;