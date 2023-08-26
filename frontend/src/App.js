import React from 'react';
import Login from './components/login/Login'
import Register from './components/register/Register'
import StudentDetails from './components/register/StudentDetails';
import StudentHome from './components/student/Home'
import StudentNavbar from './components/student/StudentNavbar'
import TeacherNavbar from './components/teacher/TeacherNavbar';
import TeacherHome from './components/teacher/Home'
import Filter from './components/teacher/Filter';
import Details from './components/teacher/Details';
import CourseDetails from './components/teacher/CourseDetails';
import InitialPage from './components/login/InitialPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<InitialPage />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/studentdetails" element={<StudentDetails />}/>
        <Route path="/studenthome" element={<StudentHome/>}/>
        <Route path="/teacherhome" element={<TeacherHome/>}/>
        <Route path="/filter" element={<Filter/>}/>
        <Route path="/student" element={<Details/>}/>
        <Route path="/coursedetails" element={<CourseDetails/>}/>
      </Routes>
      </BrowserRouter>
      {/* <Login/> */}
      {/* <Register/> */}
      {/* <StudentDetails/> */}
      {/* <StudentHome/> */}
      {/* <StudentNavbar/> */}
      {/* <TeacherNavbar/> */}
      {/* <TeacherHome/> */}
      {/* <Filter/> */}
      {/* <Details/> */}
      {/* <CourseDetails/> */}
      {/* <InitialPage/> */}
      {/* </BrowserRouter> */}
    </div>
  )
}
