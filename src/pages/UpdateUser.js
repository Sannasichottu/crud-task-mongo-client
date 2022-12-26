import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';
import Form from 'react-bootstrap/Form';
import Axios from "axios";
import { useNavigate } from 'react-router-dom';
import './UpdateUser.css';

function UpdateUser({id}) {
  const navigate = useNavigate();


  const[username,setUsername] = useState("");
  const[dob,setDob] = useState("");
  const[mobile,setMobile] = useState("");
  const[address,setAddress] = useState("");
  const[city,setCity] = useState("");
  const[district,setDistrict] = useState("");
  const[pincode,setPincode] = useState("");

  const updateHandler = (id) => {
    Axios.post(`https://itchy-dog-pinafore.cyclic.app/users/update/${id}`,{username:username,dob:dob,mobile:mobile,address:address,city:city,district:district,pincode:pincode})
    .then(() => alert("User Updated"))
    .catch(err => console.log(err))


    setUsername("");
    setDob("");
    setMobile("");
    setAddress("");
    setCity("");
    setDistrict("");
    setPincode("");
    navigate("/")
  }
  return (
    <Container>
      <h3>Form - Update </h3>
    <Form className='form-create1' onSubmit={(e) => {e.preventDefault(); updateHandler(id); }}>


      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>User Name</Form.Label>
        <Form.Control type="text" placeholder="User Name" onChange={(e) =>setUsername(e.target.value)} value={username}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>DOB</Form.Label>
        <Form.Control type="date" placeholder="dob" onChange={(e) =>setDob(e.target.value)} value={dob}/>
      </Form.Group>



      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>Mobile No</Form.Label>
        <Form.Control type="Number" placeholder="Mobile No" onChange={(e) =>setMobile(e.target.value)} value={mobile}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>Address </Form.Label>
        <Form.Control type="text" placeholder="Address" onChange={(e) =>setAddress(e.target.value)} value={address}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>City</Form.Label>
        <Form.Control type="text" placeholder="City" onChange={(e) =>setCity(e.target.value)} value={city}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>District</Form.Label>
        <Form.Control type="text" placeholder="District" onChange={(e) =>setDistrict(e.target.value)} value={district}/>
      </Form.Group>

      <Form.Group className="mb-1" controlId="formBasicEmail">
        <Form.Label className='label-1'>Pincode</Form.Label>
        <Form.Control type="number" placeholder="Pincode" onChange={(e) =>setPincode(e.target.value)} value={pincode}/>
      </Form.Group>



      <Button className='submit' variant="primary" type="submit">
        Submit
      </Button>
 </Form>
 </Container>
  )
}

export default UpdateUser;