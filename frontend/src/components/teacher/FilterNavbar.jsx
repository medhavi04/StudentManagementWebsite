import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import ModalII from '../student/StudentModal'
import '../login/Login.css';
import { useRef } from 'react';
import TeacherModal from './TeacherModal';

function TeacherNavbar(props) {
    const details={name:'Ayush dhiman',father:'Ayush Dhiman', gender:'Male', dob:'21-07-1990', roll:'BT20CSE004',branch:'CSE',email:"ayushdhiman@xnxx.com",phone:'8978278797',city:'Dehradun', state:'Uttarakhand', dick_size:'Very Large'}
  return (
    <>
<Navbar bg="light" expand="lg" fixed='top'>
      {/* <Container> */}
        <Navbar.Brand href="#home" className="mx-3">Student Website</Navbar.Brand>
        <Nav >
            <a href='#' style={{textDecoration:'none', color: 'black', marginLeft:'0.75rem'}}><p className='my-1' style={{fontSize:'1.15rem'}}>Home</p></a>
            </Nav>
            <div style={{marginLeft:'52rem'}}>
            Dr. Abhimanyu Kumar
            </div>
            <Nav className='mx-1'>
                {/* Dr. Abhimanyu Kumar */}
                {/* {props.name} */}
            </Nav>
      {/* </Container> */}
    </Navbar>
    </>
  );
  }

export default TeacherNavbar;