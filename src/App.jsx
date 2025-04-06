import React from "react";
import Navbar from './components/Navbar'
import {Routes, Route, useLocation, Navigate} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Product from './components/Product'
import './components/Purchase.css'
import './App.css'
import './Responsive.css'
import LoginReg from "./components/LoginReg";
import { AnimatePresence, motion } from 'framer-motion'

// Add page transition variants
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: "easeIn"
    }
  }
}

// Wrap each component with motion.div
const PageWrapper = ({ children }) => (
  <motion.div
    initial="initial"
    animate="enter"
    exit="exit"
    variants={pageVariants}
    style={{ width: '100%' }}
  >
    {children}
  </motion.div>
)

// Wrapped components with animations
const WrappedHome = () => (
  <PageWrapper>
    <Home />
  </PageWrapper>
)

const WrappedProduct = () => (
  <PageWrapper>
    <Product />
  </PageWrapper>
)

const WrappedAbout = () => (
  <PageWrapper>
    <About />
  </PageWrapper>
)

const WrappedContact = () => (
  <PageWrapper>
    <Contact />
  </PageWrapper>
)

function App() {
  const loc = useLocation()
  const token = localStorage.getItem('token')

  return(
    <div className="App">
      {loc.pathname !== '/' && <Navbar />}
      
      {/* <Cata /> */}
      <AnimatePresence mode="wait">
        <Routes location={loc} key={loc.pathname}>
          <Route path='/' element={token ? <Navigate to='/home' replace /> : <LoginReg />} />

          {token ? (
            <>
              <Route path='/home' element={<WrappedHome />} />
              <Route path='/product' element={<WrappedProduct />} />
              <Route path='/about' element={<WrappedAbout />} />
              <Route path='/contact' element={<WrappedContact />} />
              {/* <Route path='/purchase/clothing' element={<Clothes />} /> */}
            </>
          ) : (
            <Route path="*" element={<Navigate to="/" replace />} />
          )}
        </Routes>
      </AnimatePresence>
    </div>
  )
}

export default App