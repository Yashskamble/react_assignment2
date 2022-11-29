import { React, useState } from "react";
import 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Row, Col } from 'react-bootstrap'
import { NavLink } from "react-router-dom";

import { FaOpencart } from "react-icons/fa";


const Registration = () => {

    
    

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        phone: "",
        
        password: "",
        add1: "",
        add2: "",
        city: "",
        state: "",
        zip: ""
    })




    const [data, setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value);


        const { value, name } = e.target;
        // console.log(value,name);


        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })


    }

    const addData = (e) => {
        e.preventDefault()

        const { name, email, phone, date, password, add1, add2, city, state, zip } = inpval

        if (name === "") {
            alert("Name is required")
        } else if (email === "") {
            alert("EmailField is required")
        } else if (!email.includes("@")) {
            alert("Please enter valid email ID")
        } else if (phone.length !== 10) {
            alert("Phone must contain 10 numbers")
        } else if (date === "") {
            alert("Date field is required.")
        } else if (password === "") {
            alert("Password Field is required")
        } else if (password.length < 5) {
            alert("Password must have 5 characters.")
        } else if (add1 === ""){
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

            localStorage.setItem("userList", JSON.stringify([...data, inpval]))
        }

    }

    const myStyle = {
        backgroundImage: "url('https://m.economictimes.com/thumb/msid-90344936,width-1200,height-900,resizemode-4,imgsize-67450/ecommerce.jpg')",
        height: '120vh',
        width: '400hw',

        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    };


    return (
        <>

            <div style={myStyle} className="container mt-3 " >
                <h1 className="text-center km"><FaOpencart/>{"    "}DCX APP STORE</h1>
                <section className='d-flex justify-content-between'>
                    <div className=" mt-3 p-3" style={{ width: "40%" }}>
                        <h3 className='text-center  km'>REGISTER HERE!</h3>
                        <Form>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 " controlId="formBasicEmail">

                                <Form.Control type="text" name='phone' onChange={getdata} placeholder="Phone Number" />
                            </Form.Group>

                            

                            <Form.Group className="mb-3 " controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                
                                <Form.Control type = "text" name= "add1" onChange={getdata} placeholder="Address 1" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridAddress2">
                                
                                <Form.Control type = "text" name= "add2" onChange={getdata} placeholder="Address 2" />
                            </Form.Group>

                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridCity">
                                    
                                    <Form.Control type = "text" name= "city" onChange={getdata} placeholder="City"/>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    
                                    <Form.Select type = "text" name= "state" onChange={getdata} >
                                        <option>State</option>
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
                                    
                                    <Form.Control type = "text" name= "zip" onChange={getdata} placeholder="Zip" />
                                </Form.Group>
                            </Row>


                            <Button variant="primary" class="btn btn-info" className='mb-10 col-lg-9' onClick={addData} style={{ background: "rgb(106, 215, 209)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink className="km" to="/login">Login Here!</NavLink></span></p>
                    </div>

                </section>

            </div>
        </>

    )
}

export default Registration