import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Faq from '../Pages/Faq/Faq'



const CreateRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='faq' element={<Faq/>} />
    </Routes>
  )
}

export default CreateRoute;