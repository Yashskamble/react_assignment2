import { React, useEffect, useState } from 'react'


import { useNavigate } from 'react-router-dom'

import { Form, Button, Row, Col, Modal } from 'react-bootstrap'
import Layout from './Layout';

function Accounts() {
  const getuser = localStorage.getItem("user_login");

  const user = JSON.parse(getuser);
  console.log(user)



  const [newinpval, setInpval] = useState({
    name: user[0].name,
    email: user[0].email,
    phone: user[0].phone,
    
    password: user[0].password,
    add1: "",
    add2: "",
    city: "",
    state: "",
    zip: ""
})




const [data, setData] = useState([]);
console.log(newinpval);

const getdata = (e) => {
    // console.log(e.target.value);


    const { value, name } = e.target;
    // console.log(value,name);


    setInpval(() => {
        return {
            ...newinpval,
            [name]: value
        }
    })


}

const addData = (e) => {
    e.preventDefault()

    const { add1, add2, city, state, zip } = newinpval

    if (add1 === ""){
        alert("Address street field is required")
    }else if (add2 === ""){
        alert("Address2 field is required")
    }else if (city === ""){
        alert("City field is required")
    }else if (state === ""){
        alert("State field is required")
    }else if (zip === ""){
        alert("Zip code field is required")
    } else {
        console.log("Data added successfully")
        history("/login")
        localStorage.setItem("userList", JSON.stringify([...data, newinpval]))
    }

}



  const [show, setShow] = useState(false);

  
  const history = useNavigate()

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Pop = () => {
    if (true) {
      setTimeout(() => {
        console.log("ok");
        handleShow();
      }, 1000)
    }
  }

  useEffect(() => {
    Pop();
  }, [])

  return (
    <>
      {
        user.length === null ? alert("error") :
          <>
          <Layout/>

            <div className='p-3'>
              <h1 className='j'>Personal Information</h1>

              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>{user[0].name}😄</Modal.Title>
                </Modal.Header>
                <Modal.Body>You have successfully Logged In😄</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    OK
                  </Button>

                </Modal.Footer>
              </Modal>

              <Form className='j p-3' >

                <Form.Group className="mb-3">
                  <Form.Label><h5>Name</h5></Form.Label>
                  <Form.Control type="text" name='name' onClick={getdata} placeholder={user[0].name} disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label><h5>Email address</h5></Form.Label>
                  <Form.Control type="email" name='email' onClick={getdata} placeholder= {user[0].email}  disabled />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label><h5>Mobile Number</h5></Form.Label>
                  <Form.Control type="text" name='phone' onChange={getdata} placeholder={user[0].phone} disabled />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control type= "text" name='add1' onChange={getdata} placeholder={user[0].add1} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control type= "text"  name='add2' onChange={getdata} placeholder={user[0].add2} />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control type= "text" name='city' onChange={getdata} placeholder= {user[0].city} />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select type= "text" name='state' onChange={getdata} defaultValue = {user[0].state}>
                      <option>{user[0].state}</option>
                      <option>Andhra Pradesh</option>
                      <option>Arunachal Pradesh</option>
                      <option>Assam</option>
                      <option>Bihar</option>
                      <option>Chhattisgarh</option>
                      <option>Goa</option>
                      <option>Gujarat</option>
                      <option>Haryana</option>
                      <option>Himachal Pradesh</option>
                      <option>Jharkhand</option>
                      <option>Karnataka</option>
                      <option>Kerala</option>
                      <option>Madhya Pradesh</option>
                      <option>Maharashtra</option>
                      <option>Manipur</option>
                      <option>Meghalaya</option>
                      <option>Mizoram</option>
                      <option>Nagaland</option>
                      <option>Odisha</option>
                      <option>Punjab</option>
                      <option>Rajasthan</option>
                      <option>Sikkim</option>
                      <option>Tamil Nadu</option>
                      <option>Telangana</option>
                      <option>Tripura</option>
                      <option>Uttar Pradesh</option>
                      <option>Uttarakhand</option>
                      <option>West Bengal</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type= "text" name='zip' onChange={getdata} placeholder= {user[0].zip}  />
                  </Form.Group>
                </Row>

                <button class="ui primary button right floated"  onClick={addData}>
                  Save
                </button>

              </Form>

              <div className='j p-1'>
                <h1>FAQ'S</h1>
                <h5>What happens when I update my email address(or mobile number?)</h5>
                <text>Your login email id (or mobile number) changes, likewise. You'll receive all your account related communication on your updated email address (or mobile number).
                </text>

                <h5>When will my Flipkart account be updated with the new email address (or mobile nuber)?</h5>
                <text>
                  It happens as soon as you confirm the verification code sent to your email (or mobile) and save the changes.
                </text>

                <h5>What happens to my existing Flipkart Account when I update my email address(or mobile number)?</h5>
                <text>
                  Updating your email address (or mobile number ) doesn't invalidate your account. Your account remains fully functional. You'll continue seeing your Order history, saved information and personal details.
                </text>

                <h5>Does my Seller account gets affected when I update my email address?</h5>
                <text>Flipkart has a 'single sign-on' policy. Any changes will reflect in your Seller account also.

                </text>
              </div>
            </div>

          </>
      }
    </>
  )
}

export default Accounts