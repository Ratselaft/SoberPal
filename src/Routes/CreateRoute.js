import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Faq from '../Pages/Faq/Faq'
import JobApp from '../Pages/JobApp/JobApp';


const CreateRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='faq' element={<Faq/>} />
      <Route path='/careers' element={<JobApp />} />
    </Routes>
  )
}

export default CreateRoute;