import React from 'react'
import {  Nav, Container, Navbar, Form, Button} from 'react-bootstrap';


function Layout() {
    return (
        <>
            
                    <div className='p-3'>
                        <h2 class="ui header">
                            <i class="tag icon"></i>
                            <div class="content">
                                DCX-App <span className='m'>Store</span>
                                <div class="sub header">Bootstrap Ecommerce Template</div>
                            </div>
                        </h2>

                    </div>

            <Navbar bg="light" variant="light">
                <Container>

                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Products</Nav.Link>
                        <Nav.Link href="/account">My Account</Nav.Link>
                    </Nav>
                    </Container>
                    <Form className="d-flex p-2">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
               
            </Navbar>
        </>
    )
}

export default Layout