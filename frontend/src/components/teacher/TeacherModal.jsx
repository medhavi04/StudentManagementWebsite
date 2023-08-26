import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

export default function TeacherModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant="primary" onClick={handleShow} className='mx-4' style={{width:'10rem', backgroundColor:'whitesmoke', color:'black', marginLeft:'1rem'}}>
        Add New Course
      </Button>
      {/* className='mx-4' style={{width:'10rem', backgroundColor:'whitesmoke', color:'black', marginLeft:'1rem'}} */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Course Title</Form.Label>
              <Form.Control
                type="text"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Course Code</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Credits</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            <Form.Group className="mb-2" controlId="exampleForm.ControlInput1">
              <Form.Label>Faculty</Form.Label>
              <Form.Control
                type="text"
              />
            </Form.Group>
            
          </Form>
        </Modal.Body>
        {/* <Modal.Footer style={{display:'flex', flexDirection:'column'}}> */}
        <div style={{display:'flex',justifyContent:'flex-end', marginRight:'10px'}} className='mb-3 mx-1'>
          <Button variant="secondary" onClick={handleClose} style={{marginRight:'0.45em', width:'6em'}} >
            Cancel
          </Button>
          <Button variant="primary" onClick={handleClose} style={{marginLeft:'0.45em', width:'10em', marginRight:'1rem'}}>
            Add Course
          </Button>
        </div>
        {/* </Modal.Footer> */}
      </Modal>
    </div>
  );
}