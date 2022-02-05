import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import {Table} from 'react-bootstrap'

const Users = () => {
    
    const [users, setUsers] = useState([]);
    
    axios.get('http://localhost:3003/')
        .then(({data})=> {
            console.log({data})
            const details = data.map((user) =>{
                const {email, firstName, lastName} = user
                return {email: email, firstName:firstName , lastName:lastName}
            })
            setUsers(details)
        })
        .catch(error =>console.log(error))
     

    //console.log (users)
    /*
    const displayUsersDetails = (users)=>{
        if(!users.length) return null;
    
        return users.map((user, index)=>{
            <div key = {index}>
                <p>{user.firstName}</p>
                <p>{user.email}</p>
            </div>
        })
    }*/

  return (
    <div>
        <h3>Users</h3>
        <Table striped bordered hover size="sm" striped='True'>

        {
            users.map((user)=> <div>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email </th>
                    </tr>
                </thead>

                <tbody>
                    <tr >
                        <td>{user.firstName}</td>
                        <td>{user.lastName}</td>
                        <td>{user.email}</td>
                    </tr>
                        

                </tbody>
                

            </div>)
        }
        </Table>
       
    </div>
  )
};

export default Users;
