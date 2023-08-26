// import React from 'react'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import CardII from './CardII';

export default function StudentModal() {
    // $('#myModal').on('shown.bs.modal', function () {
    //     $('#myInput').trigger('focus')
    //   })
//   return (
//     <div>
      

// function Example(
  const [smShow, setSmShow] = useState(false);
  const [lgShow, setLgShow] = useState(false);

  return (
    <div style={{ width:'55rem'}}>
      <Button onClick={() => setLgShow(true)} className='mx-5' style={{width:'10rem', backgroundColor:'whitesmoke', color:'black', marginLeft:'0px'}}>Add New Course</Button>
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Choose a Course
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="mx-5" style={{display:'grid', rowGap:'20px', gridTemplateColumns: 'auto auto'}}>
          <CardII title="Artificial Intelligence" credits='3' code='CSL355' faculty='Kamal Kumar' add/>
          {/* <CardII/>
          <CardII/>
          <CardII/> */}
        </Modal.Body>
      </Modal>
    </div>
  );
}

