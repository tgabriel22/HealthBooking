import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Doctors from './pages/Doctors'
import About from './pages/About'
import Contact from './pages/Contact'
import MyProfile from './pages/MyProfile'
import MyAppointements from './pages/MyAppointements'
import Appointment from './pages/Appointment'
import Navbar from './pages/Navbar'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <Navbar/>
      <Routes>
        <Route path="/" element ={<Home/>}/>
        <Route path="/doctors" element ={<Doctors/>}/>
        <Route path="/doctors:speciality" element ={<Doctors/>}/>
        <Route path="/login" element ={<Login/>}/>
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element ={<Contact/>}/>
        <Route path="/MyProfile" element ={<MyProfile/>}/>
        <Route path="/MyAppointements" element ={<MyAppointements/>}/>
        <Route path="/appointment/:docId" element ={<Appointment/>}/>
      </Routes>        
    </div>
  )
}

export default App