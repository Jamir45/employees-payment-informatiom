import React , {useState} from 'react';
import './Alluser.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBillAlt, faCheckCircle } from '@fortawesome/free-solid-svg-icons'

const Alluser = (props) => {
    const {name, post, salary, img} = props.users;

    // To Get Paid Button's Operation
    const [isPaid, setIsPaid] = useState(false);
    
    return (
        <div className='col-md-6 col-lg-4 col-sm-12 col-12'>
            <div className="card bg-light shadow-sm usersProfile">
                <div>
                    <img className="rounded-circle" src={img} alt=""/>
                </div>
                <div className="details">
                    <h5>{name}</h5>
                    <p>{post}</p>
                    <p>Salary : {salary}</p>
                    {
                    isPaid ? <button disabled className="paid"><FontAwesomeIcon icon={faCheckCircle} /> Paid</button>: <button className="payBtn"
                     onClick={ () => {props.clickHandler(props.users); setIsPaid(true)} }>
                        <FontAwesomeIcon icon={faMoneyBillAlt} /> Pay now</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Alluser;