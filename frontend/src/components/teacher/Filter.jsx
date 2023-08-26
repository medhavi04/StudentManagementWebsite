import React from 'react'
import FilterNavbar from './FilterNavbar'
import './table.css'
import StudentDetails from './StudentDetails'

export default function Filter() {
  return (
    <div>
      <FilterNavbar/>
      <div>
        <form style={{marginTop:'5rem', display:'flex'}}>
            <div className='mx-2'>
                <label htmlFor='name'>Name:</label> &nbsp;
                <input type="text" id='name'/>
            </div>
            <div className='mx-2'>
                <label htmlFor='branch'>Branch:</label> &nbsp;
                <input type="text" id='branch'/>
            </div>
            <div className='mx-2'>
                <label htmlFor='roll'>Roll Number:</label>&nbsp;&nbsp;
                <input type="text" id='roll'/>
            </div>
            <div className='mx-2 my-1'>Gender:</div>&nbsp;
            <div className="form-check my-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="male"/>
                <label className="form-check-label" htmlFor="male" style={{marginLeft:'0px', marginRight:'0.75rem'}}>
                  Male
                </label>
            </div>
            <div className="form-check my-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="female"/>
                <label className="form-check-label" htmlFor="female" style={{marginLeft:'0px', marginRight:'0.75rem'}}>
                  Female
                </label>
            </div>
            <div className="form-check my-1">
                <input className="form-check-input" type="radio" name="flexRadioDefault" id="other"/>
                <label className="form-check-label" htmlFor="other" style={{marginLeft:'0px', marginRight:'0.75rem'}}>
                  Other
                </label>
            </div>
            <div>
            <button className="btn btn-outline-success" type="submit" style={{width:'6rem'}}>Search</button>
            </div>
        </form>
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
    </div>
  )
}



// export StudentDetails as StudentDetails;