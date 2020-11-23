import React, { useState } from 'react';
import './Home.css';
import UsersData from '../../UsersData/data';
import Alluser from '../Alluser/Alluser';
import Cart from '../Cart/Cart'; 


const Home = () => {
    // To Get All Data From Local File
    const [allData, setAllData] = useState(UsersData);

    // To Get Single User Data onButton Click
    const [paymentCart, setPaymentCart] = useState([])
    const clickHandler = (props) => {
        const paymentNo = [...paymentCart, props]
        setPaymentCart(paymentNo);
        console.log(props);
    };
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9 col-6">
                    <div className="row">
                        {
                            allData.map( data => <Alluser users={data} clickHandler={clickHandler}></Alluser>)
                        }
                    </div>
                </div>
                <div className="col-md-3 col-sm-6 col-6 mt-5">
                    <div className="position-fixed card p-3 bg-light shadow">
                        <Cart paymentEmployee={paymentCart}></Cart>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;