import React from 'react'
import photo1 from './student.png'
import photo2 from './teacher.png'
import { useNavigate } from 'react-router'

export default function InitialPage() {
    const Navigate=useNavigate();
    const toStudent=()=>{
        Navigate('/login',{state:{from:'student'}});
    }
    const toTeacher=()=>{
        Navigate('/login',{state:{from:'teacher'}});
    }
  return (
    <div className='frontpage'>
    <div>
       <h4 style={{textTransform:"uppercase", color:'rgb(79, 79, 194)', textAlign:'center', paddingTop:'6rem'}}>{process.env.REACT_APP_APP_NAME}</h4>
    </div>
    <div style={{display:'flex', justifyContent:'center', marginTop:'7rem'}}>
        <div onClick={toStudent} className='front2' style={{border:'1px solid rgb(79, 79, 194)',borderRadius:'1.5rem', width:'10%', height:'23vh', textAlign:'center', marginRight:'3rem'}}>
           <h6 style={{marginTop:'0.4rem', color:'rgb(79, 79, 194)'}}>Student</h6> 
           <img style={{height:'15vh'}} src={photo1} alt="Can't be loaded" />
        </div>
        <div onClick={toTeacher} className='front2' style={{border:'1px solid rgb(79, 79, 194)',borderRadius:'1.5rem', width:'10%', height:'23vh', textAlign:'center', marginLeft:'3rem'}}>
           <h6 style={{marginTop:'0.4rem', color:'rgb(79, 79, 194)'}}>Teacher</h6> 
           <img style={{height:'15vh'}} src={photo2} alt="Can't be loaded" />
        </div>
    </div>
    </div>
  )
}
