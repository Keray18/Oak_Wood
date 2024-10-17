import React from "react";
import Navbar from './components/Navbar'
import {Routes,Route, useLocation} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import Shoes from './components/Product_Components/Shoes'
import Clothes from './components/Product_Components/Clothes'
// import Cata from './components/Product_Components/Cata'
import './components/Purchase.css'
import './App.css'
import './Responsive.css'
import LoginReg from "./components/LoginReg";


function App() {

  const loc = useLocation()

  return(
    <div className="App">
      {loc.pathname !== '/' && <Navbar />}
      
      {/* <Cata /> */}
      <Routes>
        <Route path='/' element={<LoginReg />} />
        <Route path='/home' element={<Home />} />
        <Route path='/product' element={<Product />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='/purchase/shoes' element={<Shoes />} />
        <Route path='/purchase/clothing' element={<Clothes />} /> */}
      </Routes>
    </div>
  )
}

export default App