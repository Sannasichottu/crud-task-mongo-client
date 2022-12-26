import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './CreateUser.css';

function CreateUser() {
  const navigate = useNavigate();

  const[firstname,setFirstname] = useState("");
  const[lastname,setLastname] = useState("");
  const[username,setUsername] = useState("");
  const[dob,setDob] = useState("");
  const[gmail,setGmail] = useState("");
  const [password,setPassword] = useState("");
  const[mobile,setMobile] = useState("");
  const[address,setAddress] = useState("");
  const[city,setCity] = useState("");
  const[district,setDistrict] = useState("");
  const[pincode,setPincode] = useState("");


  const submitHandler = (e) => {
    e.preventDefault();
    Axios.post(`https://itchy-dog-pinafore.cyclic.app/users/add`,   //https://itchy-dog-pinafore.cyclic.app
    {firstname:firstname,lastname:lastname,username:username,dob:dob,gmail:gmail,password:password,mobile:mobile,address:address,city:city,district:district,pincode:pincode})
    .then(() => alert("User Created"))
    .catch(e => console.log(e))
    setFirstname("");
    setLastname("");
    setUsername("");
    setDob("");
    setGmail("");
    setPassword("");
    setMobile("");
    setAddress("");
    setCity("");
    setDistrict("");
    setPincode("");
    navigate("/")
  }

  return (
    <Container>
          <h2>Form - Crud </h2>
       <Form className='form-create' onSubmit={submitHandler}>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>First Name</Form.Label>
        <Form.Control type="text" placeholder="First Name" onChange={(e) =>setFirstname(e.target.value)} value={firstname}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" onChange={(e) =>setLastname(e.target.value)} value={lastname}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" onChange={(e) =>setUsername(e.target.value)} value={username}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>DOB</Form.Label>
        <Form.Control type="date" placeholder="dob" onChange={(e) =>setDob(e.target.value)} value={dob}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>E-mail</Form.Label>
        <Form.Control type="mail" placeholder="E-mail" onChange={(e) =>setGmail(e.target.value)} value={gmail}/>
      </Form.Group>


      <Form.Group className="mb-1" controlId="formBasicPassword">
        <Form.Label className='label'>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" onChange={(e) =>setPassword(e.target.value)} value={password} />
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>Mobile No</Form.Label>
        <Form.Control type="Number" placeholder="Mobile No" onChange={(e) =>setMobile(e.target.value)} value={mobile}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>Address </Form.Label>
        <Form.Control type="text" placeholder="Address" onChange={(e) =>setAddress(e.target.value)} value={address}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={(e) =>setCity(e.target.value)} value={city}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>District</Form.Label>
        <Form.Control type="text" placeholder="District" onChange={(e) =>setDistrict(e.target.value)} value={district}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label'>Pincode</Form.Label>
        <Form.Control type="number" placeholder="Pincode" onChange={(e) =>setPincode(e.target.value)} value={pincode}/>
      </Form.Group>



      <Button className='submit' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
  )
}

export default CreateUser