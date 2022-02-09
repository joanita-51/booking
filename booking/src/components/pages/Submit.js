import React, {useEffect, useState} from 'react';
import {useParams } from 'react-router-dom';
import { Alert, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Submit=()=>{
    const {id} = useParams();
    const [items, setItems] = useState({});
 
    axios.get(`http://localhost:3003/submitPreference/${id}`)
        .then(({data})=> {
            console.log({data})
            const list = Object.keys(data).map((key,item) =>{
                const {user, bookingDate, bookingTime, schoolName, schoolLocation, schoolFee} = item
                return {user:user, bookingDate:bookingDate , bookingTime:bookingTime, schoolName:schoolName, schoolLocation:schoolLocation, schoolFee:schoolFee }
            })
            setItems(list)
        })
        .catch(error =>console.log(error))
    return (
        <div>

            <Alert variant="success">
                <Alert.Heading>Form Submitted !!</Alert.Heading>
                <p>Thank you for booking , Here is what we got from you</p>
  
            </Alert>
            {
                Object.keys(items).map((item, index)=>
                <ul className="list-group" key={index}>
                    <li className="list-group-item">
                        {item.name}
                    </li>
                    {/* <li className="list-group-item">
                        Last Name: {record.lastName}
                    </li>
                    <li className="list-group-item">
                        Email: {record.email}
                    </li> */}
                    <li className="list-group-item">
                        {item.bookingDate}
                    </li>
                    <li className="list-group-item">
                        {item.bookingTime}
                    </li>
                    <li className="list-group-item">
                        {item.schoolName}
                    </li>
                    <li className="list-group-item">
                        {item.schoolLocation}
                    </li>
                    <li className="list-group-item">
                        {item.schoolFee}
                    </li>
                </ul>
                )
            }
            

            <Link to="/log-in"> <Button variant="success">Confirm Booking</Button> </Link>{' '}
            <Link to="/log-in"> <Button variant="warning">Edit Booking</Button> </Link>{' '}
            <Link to="/log-in"> <Button variant="warning">Set Reminder</Button> </Link>{' '} 
        </div>
    )
}

export default Submit
