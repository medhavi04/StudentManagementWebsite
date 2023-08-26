import React, { useState, useRef } from 'react'
import './Login.css';
import { Navigate, useLocation,useNavigate} from 'react-router';
import {Link} from 'react-router-dom'
import axios from 'axios';
import Alert from '../alert/Alert';

export default function Login() {
  const location=useLocation();
  const from=location.state.from;
  const formRef=useRef();
  const navigate=useNavigate();
  const [EmailError,setEmailError]=useState(null);
  const [PasswordError,setPasswordError]=useState(null);

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(formRef.current.Name.value);
    try {
      const res = await axios.post(`http://localhost:8000/${from}/login`,{email:formRef.current.Email.value,password:formRef.current.Password.value});
      console.log(res);
      if(res.status===200&&from==='teacher'){
          navigate('/teacherhome',{state:{teacherId:res.data._id}});
      }
      else if(res.status===200&&from==='student'){
          navigate('/studenthome',{state:{studentId:res.data._id}});
      }

    } catch (error) {
      if(error.response.status===404){
        // alert('Email does not exist!');
        setEmailError("Invalid Email")
        setTimeout(() => {
          setEmailError(null);
        }, 1500);
      }
      else if(error.response.status===401){
        setPasswordError('Incorrect Password');
        setTimeout(() => {
          setPasswordError(null);
        }, 1500);
      }
      console.log( error)
    }
  }

  return (
    <div className="container cntr">
      <div className='h2 my-5'>
      {process.env.REACT_APP_APP_NAME}
      </div>
      <form className='frm' ref={formRef} onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"/>
    {EmailError&&<Alert message={EmailError}/>}
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password"/>
    {PasswordError&&<Alert message={PasswordError}/>}
  </div>
  {/* <div className="mb-3 form-check"> */}
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
    {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
  {/* </div> */}
  <button type="submit" className="btn btn-primary my-3">Login</button>
  <div className='register'>Don't have an account? <Link to='/register' state={{from: from}}>Create New Account</Link></div>
  {/* <div>Already have an account? <Link to="#">Register</Link></div> */}
  {/* to={{pathname:"/register", state:{from:from}}} */}
</form>
    </div>
  )
}
