import React, { useRef } from 'react'
import '../login/Login.css';
import { Navigate, useLocation, useNavigate} from 'react-router';
import {Link} from 'react-router-dom'
import axios from 'axios';

export default function Register(props) {
  const location=useLocation();
  const from=location?.state?.from;
  const formRef=useRef();
  const navigate=useNavigate();

  const handleSubmit=async(e)=>{
    e.preventDefault();
    // console.log(formRef.current.Name.value);
    try {
      const res = await axios.post(`http://localhost:8000/${from}/register`,{name:formRef.current.Name.value,email:formRef.current.Email.value,password:formRef.current.Password.value});
      console.log(res);
      if(res.status===200&&from==='teacher'){
          navigate('/teacherhome',{state:{teacherId:res.data._id}});
      }
      else if(res.status===200&&from==='student'){
        navigate('/studentdetails',{state:{studentId:res.data._id}});
    }
    } catch (error) {
      console.log( error)
    }
  }
  return (
    <div className="container cntr">
      <div className='h2 my-4' style={{marginTop:'1000px !important'}}>
      {process.env.REACT_APP_APP_NAME}
      </div>
      <form className='frm' ref={formRef} onSubmit={handleSubmit}>
      <div className="mb-3">
    <label htmlFor="Name" className="form-label">Name</label>
    <input type="text" className="form-control" id="Name"/>
  </div>
  <div className="mb-3">
    <label htmlFor="Email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="Email" aria-describedby="emailHelp"/>
    {/* <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className="mb-3">
    <label htmlFor="Password" className="form-label">Password</label>
    <input type="password" className="form-control" id="Password"/>
  </div>
  {/* <div className="mb-3 form-check"> */}
    {/* <input type="checkbox" className="form-check-input" id="exampleCheck1"/> */}
    {/* <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label> */}
  {/* </div> */}
  <button type="submit" className="btn btn-primary my-3">Register</button>
  <div className='register'>Already have an account? <Link to='/login' state={{from: from}}>Login</Link></div>
  {/* <div>Already have an account? <Link to="#">Register</Link></div> */}

</form>
    </div>
  )
}
