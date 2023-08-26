import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import StudentModal from './StudentModal'
import '../login/Login.css';
import { useRef } from 'react';

function StudentNavbar() {
    const details={name:'Ayush dhiman',father:'Ayush Dhiman', gender:'Male', dob:'21-07-1990', roll:'BT20CSE004',branch:'CSE',email:"ayushdhiman@xnxx.com",phone:'8978278797',city:'Dehradun', state:'Uttarakhand'}
    const toggleRef=useRef();
  return (
    <>
      {/* {[false].map((expand) => ( */}
        <Navbar key={false} bg="light" expand={false} className="mb-3" fixed="top">
          <Container fluid>
            <Navbar.Brand href="#">Student Website</Navbar.Brand>
            {/* <Navbar.Collapse id="basic-navbar-nav"> */}
            <Nav >
            <StudentModal className='modall'/>
            </Nav>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-false-false`} ref={toggleRef} style={{display:'none'}}/>
            <span>
            {details.name} &nbsp;
            <img src='https://i.redd.it/6vhqbfthb9c11.jpg' className='profilephoto' style={{width:'50px',height:'50px', borderRadius:'50%', objectFit:'fill', marginRight:'0.125em', marginLeft:'0.05em', cursor:'pointer'}} onClick={()=>{toggleRef.current.click()}}></img>
            </span>
            <Navbar.Offcanvas id={`offcanvasNavbar-false-false`}
              aria-labelledby={`offcanvasNavbarLabel-false-false`}
              placement="end"
              >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-false-false`}>
                  {details.name} 
                  {/* <i className="bi bi-pencil-fill"></i> */}
                  <a href="#" style={{textDecoration:'none',color:'black', marginLeft:'1rem'}}>
                  <svg xmlns="http://www.w3.org/2000/svg" style={{ height:'16px',width:'16px',cursor:'pointer', paddingTop:'0px', marginTop:'0px', marginBottom:'0.25rem'}} fill="currentColor" className="bi bi-pencil-fill" viewBox="0 0 16 16">
                    <path style={{ marginBottom:'200px'}} d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z"/>
                  </svg>
                  </a>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                   <div className="my-2">
                    <span className='fw-bold mx-1'> Roll No.: 
                      </span>
                      {details.roll}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'>  Branch: 
                      </span>
                     {details.branch}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'>  Father's Name:
                      </span>
                      {details.father}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'> Gender: 
                      </span>
                      {details.gender}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'> DOB:
                      </span>
                       {details.dob}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'>  Email id:
                      </span>
                      {details.email}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'> Phone No.: 
                      </span>
                      {details.phone}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'>  City:
                      </span>
                      {details.city}
                    </div>
                   <div className="my-2">
                    <span className='fw-bold mx-1'>  State:
                      </span>
                      {details.state}
                    </div>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
              {/* </Navbar.Collapse> */}
          </Container>
        </Navbar>
      {/* ))} */}
    </>
  );
}

export default StudentNavbar;