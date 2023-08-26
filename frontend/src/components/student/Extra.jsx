import React from 'react'
import Modal from './ModalII'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function StudentNavbar() {
  return (
    <>
<Navbar bg="dark" variant="dark">
        {/* <Container> */}
          <Navbar.Brand href="#home" className="mx-4">Navbar</Navbar.Brand>
          {/*<Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav> */}
          <Modal/>
        {/* </Container> */}
      </Navbar>
      {/* <span className='navbar-brand mx-3'>Website</span>
  <Modal/> */}
  </>
  )
}
