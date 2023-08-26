import React from 'react'
import TeacherNavbar from './TeacherNavbar'
import TeacherCard from './TeacherCard'

export default function Home() {
  return (
    <div>
      <TeacherNavbar/>
      <div className='container' style={{display:'grid', rowGap:'20px', gridTemplateColumns: 'auto auto auto', marginTop:'6rem'}}>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      <TeacherCard/>
      </div>
    </div>
  )
}
