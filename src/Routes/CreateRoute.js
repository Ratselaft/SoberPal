import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Faq from '../Pages/Faq/Faq'

import JobApp from '../Pages/JobApp/JobApp';
=======
import Services from '../Pages/Services/Services';
import Team from '../Pages/Team/Team';



const CreateRoute = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='faq' element={<Faq/>} />

      <Route path='/careers' element={<JobApp />} />
=======
      <Route path='services' element={<Services />} />
      <Route path='team' element={<Team />} />
      {/* <Route path="*" element={<NotFound />} /> */}

    </Routes>
  )
}

export default CreateRoute;