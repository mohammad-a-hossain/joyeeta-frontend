// import React from 'react';
// import './headerStyle.css'

import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux';
import { login, signout} from './../../actions';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';




export const Header = (props) => {
  const [email, setEamil] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch()
  const auth = useSelector(state =>state.auth)
 //console.log(auth)


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  
  const handleLogin =()=>{//console.log('logged')
   // e.preventDefault()
    dispatch(login({
      email,
      password
  }))
  }
const handleLogout=()=>{
  dispatch(signout()) 

}
  useEffect(()=>{
       setShow(false)
  },[auth.authenticate])
  

  /* const renderLoggedInUserMenue =()=>{
    return(
      <NavDropdown title="{auth.user.firstName}" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3">{auth.user.firstName}</NavDropdown.Item>
      <NavDropdown.Item href="#action4">
        my profile
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">
       wish list
      </NavDropdown.Item>
      <NavDropdown.Item href="#action4">
     order
    </NavDropdown.Item>
    <NavDropdown.Item href="#action4">
     logout
    </NavDropdown.Item>
    </NavDropdown>
    )
  } */

  /* const renderNotLoggedInUserMenue =()=>{
   return(
      <NavDropdown title="login" id="navbarScrollingDropdown">
      <NavDropdown.Item href="#action3" onClick={handleLogin}>login</NavDropdown.Item>
      <NavDropdown.Item href="#action4">
        my profile
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item href="#action5">
       wish list
      </NavDropdown.Item>
      <NavDropdown.Item href="#action4">
     order
    </NavDropdown.Item>
    <NavDropdown.Item href="#action4">
     logout
    </NavDropdown.Item>
    </NavDropdown>   
   )
  }
 */
  



  return (  
    <>
 
    
    <Navbar bg="lightgrey" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Joyeeta</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
          <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Button variant="outline-success">Search</Button>
          

        </Form>
          
        {
         auth.authenticate ? (
          <NavDropdown  id="navbarScrollingDropdown" title={`auth.user.firstname`}>
          <NavDropdown.Item href="#action3" >{auth.user.firstname}</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            my profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           wish list
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">
         order
        </NavDropdown.Item>
   
        <NavDropdown.Item href="#action4">
         logout1
        </NavDropdown.Item>
        </NavDropdown> 
         ):(
          <NavDropdown title="login" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3"
           onClick={handleShow}>login/signup</NavDropdown.Item>
          <NavDropdown.Item href="#action4">
            my profile
          </NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
           wish list
          </NavDropdown.Item>
          <NavDropdown.Item href="#action4">
         order
        </NavDropdown.Item>
       
        </NavDropdown>  
         )
         
  }
            <NavDropdown title="More" id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">More</NavDropdown.Item>
            <NavDropdown.Item href="#action4">
              my profile
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action5">
             wish list
            </NavDropdown.Item>
            <NavDropdown.Item href="#action4">
           order
          </NavDropdown.Item>
        
          </NavDropdown>
           
          </Nav>
          <Nav.Link href="#action2">cart</Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   

  {/* -------------modal for login----------------- */}

  <Modal show={show} onHide={handleClose}>
  <Modal.Header closeButton>
    <Modal.Title>Login to Joyeeta</Modal.Title>
  </Modal.Header>
  <Modal.Body>
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          value={email}
          onChange={(e)=>{setEamil(e.target.value)}}
          placeholder="name@example.com"
          autoFocus
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>password</Form.Label>
      <Form.Control
        type="password"
        placeholder="*******"
        value={password}
       onChange={(e)=>{setPassword(e.target.value)}}
        autoFocus
      />
    </Form.Group>
    </Form>
  </Modal.Body>
  <Modal.Footer>
    <Button variant="secondary" onClick={handleLogin}>
      Login
    </Button>
    <Button variant="danger" onClick={handleClose}>
     Forget Password
    </Button>
  <p><a>new to Joyeeta ? create an account</a></p> 
  </Modal.Footer>
</Modal>
</>
)

}

