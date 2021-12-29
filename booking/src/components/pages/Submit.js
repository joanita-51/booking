import React, {useEffect, useState} from 'react';
import { Alert } from 'react-bootstrap'
import BookNow from './BookNow';


function Submit() {
    useEffect ( () => {
        fetchItems();
    }, [] );

    const [items, setItems] = useState([]);

    const fetchItems = async () =>{
        const data = await fetch('/preferences');
        const items = await data.json();
        setItems(items)
    }
    return (
        <div>
            {/* <BookNow/> */}
            
                
                    {items.user.firstName}
                    {items.user.lastName}
                    {items.user.email}
                    {items.preference.bookingDate}
                    {items.preference.bookingTime}
                    {items.preference.schoolName}
                    {items.preference.schoolLocation}
                    {items.preference.schoolFee}

                              
            

            
            {/* <Alert variant="success">
                <Alert.Heading>Form Submitted !!</Alert.Heading>
                <p>Thank you for booking , Here is what we got from you</p>
  
            </Alert>
            <ul className="list-group">
                <li className="list-group-item">
                    First Name: {values.firstName}
                </li>
                <li className="list-group-item">
                    Last Name: {values.lastName}
                </li>
                <li className="list-group-item">
                    Email: {values.email}
                </li>
                <li className="list-group-item">
                    Preferred Date: {values.date}
                </li>
                <li className="list-group-item">
                    Preferred Time: {values.time}
                </li>
                <li className="list-group-item">
                    School: {values.time}
                </li>
            </ul>

            <Button variant="success">Confirm Booking</Button>{' '}
            <Button variant="warning">Edit Booking</Button>{' '} */}
        </div>
    )
}

export default Submit
