import React, { useState, useRef,useEffect } from 'react'
import StudentNavbar from './StudentNavbar'
import CardII from './CardII'
import { useLocation } from 'react-router'
import axios from 'axios';
// import { use } from '../../../../backend/routes/studentRoutes';

export default function Home() {
  const location=useLocation();
  const [student,setStudent]=useState([]);
  useEffect(() => {
    const studentId=location.state.studentId;
    const fetchStudent=async()=>{
      const res=await axios.post()
    }
  }, [])
  
  return (
    <div>
      <StudentNavbar/>
      <div className='container' style={{display:'grid', rowGap:'20px', gridTemplateColumns: 'auto auto auto', marginTop:'7rem'}}>

      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      <CardII/>
      </div>
    </div>
  )
}
