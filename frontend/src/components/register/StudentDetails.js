import React, { useState, useRef } from 'react'
import { Navigate, useLocation,useNavigate} from 'react-router';
// import '../login/Login.css';
// import {Link} from 'react-router-dom'
import axios from 'axios';


export default function StudentDetails() {
  const [doc,setDoc]=useState(null);
  const formRef=useRef();
  const navigate=useNavigate();

  const handlePhoto=async (e)=>{
    setDoc(e.target.files[0]);
  }

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // const formData=new FormData('FORM');
    // console.log('Form Data',formData);
    // formData.append(doc);
    try {
      const res= await axios.post(`http://localhost:8000/student/register/details`,{name:formRef.current.Name.value, rollno:formRef.current.RollNo.value,branch:formRef.current.Branch.value,father: formRef.current.Father.value,dob:formRef.current.DOB.value,dp:doc,gender:formRef.current.Gender.value,email:formRef.current.emailId.value,phone:formRef.current.mobile.value,city:formRef.current.City.value,state:formRef.current.State.value},
      {headers: {
        'x-device-id': 'stuff',
        'Content-Type': 'multipart/form-data'
      }}
  );
  // console.log(res);
      if(res.status===200)
      navigate('/studenthome',{state:{studentId:res.data}});
    } catch (error) {
      console.log( error);
    }
  }
  return (
    <div className="container w-75">
      <div className='h2 my-4 text-center'>
      {/* {process.env.REACT_APP_APP_NAME}
       */}
       STUDENT REGISTRATION PAGE
      </div>
      <form className='frm' ref={formRef} onSubmit={handleSubmit} id='FORM'>
      <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name *</label>
    <input type="text" className="form-control" id="Name"/>
  </div>
      <div className="mb-3">
    <label htmlFor="RollNo" className="form-label">Roll Number *</label>
    <input type="text" className="form-control" id="RollNo"/>
  </div>
      <div className="mb-3">
    <label htmlFor="Branch" className="form-label">Branch * </label>
    <input type="text" className="form-control" id="Branch"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Father" className="form-label">Father's Name</label>
    <input type="text" className="form-control" id="Father"/>
  </div>
      <div className="mb-3">
    <label htmlFor="DOB" className="form-label">DOB *</label>
    <input type="date" className="form-control" id="DOB"/>
  </div>
  <div className="form-group">
    <label htmlFor="dp" className="form-label">Profile Photo *</label>
    <input type="file" onChange={handlePhoto} className="form-control-file mx-4" id="dp"/>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="Gender" className="form-label">Gender</label>
    <input type="text" className="form-control" id="Gender"/>
  </div> */}
  <div className='mx-2' style={{marginTop:'1rem', marginBottom:'0.45rem'}}>Gender *</div>
  <div style={{display:'flex', marginBottom:'1rem'}}>
            <div className="form-check my-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Gender" value='male'/>
                <label className="form-check-label" htmlFor="male" style={{marginLeft:'0px', marginRight:'0.75rem'}}>
                  Male
                </label>
            </div>
            <div className="form-check my-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Gender" value='female'/>
                <label className="form-check-label" htmlFor="female" style={{marginLeft:'0px', marginRight:'0.75rem'}}>
                  Female
                </label>
            </div>
            <div className="form-check my-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="Gender" value='other'/>
                <label className="form-check-label" htmlFor="other" style={{marginLeft:'0px', marginRight:'0.75rem'}}>
                  Other
                </label>
            </div>       
  </div>
  <div className="mb-3">
    <label htmlFor="emailId" className="form-label">Email address *</label>
    <input type="email" className="form-control" id="emailId" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">Phone Number</label>
    <input type="number" className="form-control" id="mobile" maxLength={10}/>
  </div>
  <div className="mb-3">
    <label htmlFor="City" className="form-label">City</label>
    <input type="text" className="form-control" id="City"/>
  </div>
  <div className="mb-3">
    <label htmlFor="State" className="form-label">State</label>
    <input type="text" className="form-control" id="State"/>
  </div>
  {/* <div className="mb-3 form-check"> */}
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
    {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
  {/* </div> */}
  <button type="submit" className="btn btn-primary my-3">Submit Details</button>

</form>
    </div>
  )
}
