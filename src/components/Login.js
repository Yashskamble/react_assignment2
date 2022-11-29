import {React, useState} from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

import { useNavigate } from 'react-router'

const Login = () => {

    const history = useNavigate()

    

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

   

    const [data,setData] = useState([]);
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

        const getuserArr = localStorage.getItem("userList")
        console.log(getuserArr)

        const {email,password} = inpval
        if (getuserArr === null){
            alert("Register first")
        }else if (email === "") {
            alert("EmailField is required")
        }else if(!email.includes("@")){
            alert("Please enter valid email ID")
        }else if (password === "") {
            alert("Password Field is required")
        } else if (password.length < 5) {
            alert("Password must have 5 characters.")
        }else {
            if (getuserArr && getuserArr.length){
                const userdata = JSON.parse(getuserArr)
                const userlogin = userdata.filter((element, index) => {
                    return element.email === email && element.password === password
                })

                if(userlogin.length === 0){
                    alert("InValid Details")
                }else{
                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                    history("/account")
                }
            }
        }
        
    }

  return (
    <>
    <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>LOGIN!</h3>
                        <Form >
                           
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            

                            

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        
                    </div>
                    
                </section>
                
            </div>
    </>
  )
}

export default Login