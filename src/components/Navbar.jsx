import React, {useState} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { Box, Text } from '@chakra-ui/react';
// ** Note ** All the styling is in App.css



function Navbar() {
    const [count, change] = React.useState(0)
    const navigate = useNavigate()
    const location = useLocation() // Add this to track current route
    
    const increase = () => {
        change(count+1)
    }

    const logout = async() => {
        localStorage.removeItem('token')
        navigate('/')
    }

    // Function to check if a link is active
    const isActive = (path) => {
        return location.pathname === path
    }

    return(
        <div className='navbar'>
            <div className='scheme'>
                <Link to='/home' style={{textDecoration: 'none'}}>
                    <span id='oak'>Oak</span><span id='wood'>Wood</span>
                </Link>
            </div>
            <ul className='three'>
                <li>
                    <Link 
                        to='/home' 
                        className={`nav-link ${isActive('/home') ? 'active' : ''}`}
                    >
                        Home
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/product' 
                        className={`nav-link ${isActive('/product') ? 'active' : ''}`}
                    >
                        Product
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/about' 
                        className={`nav-link ${isActive('/about') ? 'active' : ''}`}
                    >
                        About
                    </Link>
                </li>
                <li>
                    <Link 
                        to='/contact' 
                        className={`nav-link ${isActive('/contact') ? 'active' : ''}`}
                    >
                        Contact
                    </Link>
                </li>
            </ul>
            <div className='cont'>
                <div className='cont-act'>
                    <h3>{count}</h3>
                    <AiOutlineShoppingCart onClick={increase} className='cart'/>
                </div>

                <Box _hover={{ cursor: "pointer" }} pl="5rem">
                    <Text onClick={logout} className="logout-btn">Log Out</Text>
                </Box>
            </div>

            
        </div>
    )
}

export default Navbar