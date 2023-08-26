import React from 'react'
import TeacherNavbar from './TeacherNavbar'

export default function Details(props) {
  return (
    <div className='bg'>
        {/* <TeacherNavbar/> */}
        <h2 style={{color:'white', textAlign:'center', marginTop:'4rem'}}>STUDENT DETAILS</h2>
    <div className='tbl' style={{width:'40vw', border:'1px solid white', borderRadius:'0.75rem', margin:'auto', marginTop:'3rem'}}>
      <div>
        <span>
            Name:
        </span> 
        {props.name} Medhavi Sharma
      </div>
      <div>
        <span>
            Roll No.:
        </span> 
        {props.roll}
      </div>
      <div>
        <span>
            Branch:
        </span> 
        {props.branch}
      </div>
      <div>
        <span>
            Gender:
        </span> 
        {props.gender}
      </div>
      <div>
        <span>
            Email id:
        </span> 
        {props.email}
      </div>
      <div>
        <span>
            Phone No.:
        </span> 
        {props.phone}
      </div>
      <div>
        <span>
            City:
        </span> 
        {props.city}
      </div>
      <div>
        <span>
            State:
        </span> 
        {props.state}
      </div>
      <div>
        <span>
            Courses Registered: 
        </span> 
        {props.courses?props.courses:'  No course registered yet!'}
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora molestias nisi aspernatur vero obcaecati veniam sit saepe omnis excepturi repellendus similique, velit modi pariatur nemo facilis dolorem numquam sed fuga unde. Quidem iusto reiciendis nihil enim minima atque sapiente deleniti sequi, officia necessitatibus, rerum dignissimos doloremque a id repellat laborum non facilis nobis. Doloribus ratione aperiam odio molestiae sapiente numquam ad adipisci illum. Error voluptates quam numquam iste doloribus cum reiciendis voluptate ratione dolore id dolor aliquam sapiente non, enim impedit illum dicta nostrum ex ipsum perferendis. Molestias et temporibus facilis, exercitationem blanditiis error incidunt laborum, aliquam velit dolor similique?
      </div>
    </div>
    </div>
  )
}
