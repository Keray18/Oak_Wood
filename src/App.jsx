import React from "react";
import Navbar from './components/Navbar'
import {Routes,Route} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Purchase from './components/Purchase'
import './App.css'
import './Responsive.css'


function App() {
  return(
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/purchase/one/*' element={<Purchase />} />
      </Routes>
    </div>
  )
}

export default App