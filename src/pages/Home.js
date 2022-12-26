import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/esm/Container';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './home.css'

function Home({getId}) {
  const navigate = useNavigate();
  const [users,setUsers] = useState([]);
  useEffect(() => {
    Axios.get(`https://itchy-dog-pinafore.cyclic.app/users`).then(res => setUsers(res.data))
  })

  const deleteUser = (id) => {
    Axios.delete(`https://itchy-dog-pinafore.cyclic.app/users/${id}`)
    .then(() => alert("User Deleted"))
    .catch((e) => console.log(e))
  }

  const updateUser = (id) => {
    getId(id)
    navigate('/updateForm')
  }

  return (
    <Container>
      <h1 className='home display-3 text-center pt-5'>Users List</h1>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>S.No</th>
          <th>User Name</th>
          <th>Gmail</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user,index) => {
          return(
        <tr key={index}>
          <td>{index+1}</td>
          <td>{user.username} </td>
          <td>{user.gmail}</td>
          <td>{user.city}</td>
          <td><button className='btn btn-primary' onClick={() => updateUser(user._id)}>Edit</button></td>
          <td><button className='btn btn-danger' onClick={() => deleteUser(user._id)} >Delete</button></td>
        </tr>
        )
      })}
      </tbody>
    </Table>
    </Container>
  )
}

export default Home