import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import './App.css'
import About from './Navbar/About'
import Contact from './Navbar/Contact'
import Navbar from './Navbar/Navbar'
import Other from './Navbar/Other'
import Service from './Navbar/Service'
function App() {
  return (
    <div>
      <Navbar/>
          <Routes>
            <Route path ='/'element= {<Home/>}></Route>
            <Route path ='about'element= {<About/>}></Route>
             <Route path='contact'element={<Contact/>}></Route>
             <Route path ='other'element={<Other/>}></Route>
             <Route path ='service'element={<Service/>}></Route>
             
          </Routes>
    </div>
  )
}

export default App
