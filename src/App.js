import React from 'react'
import Header from './routing/Header'
import Footer from './routing/Footer'
import Home from "./routing/Home"
import About from './routing/About'
import Contactus from './routing/Contactus'
import { BrowserRouter as Router, Routes, Route, Navigate, LInk } from 'react-router-dom'

const App = () => {
  return (
    
<Router>
     <Routes>
       <Route path='/home' element={<Home/>}/>
       <Route path='/about' element={<About/>} />
       <Route path='/contact' element={<Contactus/>} />
     </Routes>
</Router>
       
  
  )
}

export default App