import React from 'react'
import StudentDetails from './StudentDetails'

export default function CourseDetails(props) {
  return (
    <>
    <div style={{margin:'auto', width:'50vw', textAlign:'center', marginTop:'2rem', marginBottom:'2rem'}}>
      <div>
         <h5>{props.title} Network Security </h5>
      </div>
      <div>
        <span>
            Course Code:
        </span>
        {props.code} CSL354
      </div>
      <div>
        <span>Credits:</span>
        {props.credits} 3
      </div>
      <div>
        <span>
            Faculty:
        </span>
        {props.faculty} Dr. Abhimanyu Kumar
      </div>
    </div>
    <table >
        <tr>
            <th className='cell'>
                Name
            </th>
            <th className='cell'>
                Roll No
            </th>
            <th className='cell'>
                Branch
            </th>
            <th className='cell'>
                Gender
            </th>
            <th className='cell'>
                Profile Picture
            </th>
            <th className='cell'>
                Details
            </th>
        </tr>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
        <StudentDetails name='Medhavi Sharma' branch='CSE' roll='CSE005' gender='Female'/>
      </table>
    </>
  )
}
