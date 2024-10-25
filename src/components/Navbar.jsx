import React, {useState} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Link, useNavigate} from 'react-router-dom'
import ProdList from './ProdList'
import { Box, Text } from '@chakra-ui/react';
// ** Note ** All the styling is in App.css



function Navbar() {
    const [count,change] = React.useState(0)
    const navigate = useNavigate()
    
    const increase = () => {
        change(count+1)
        console.log()
    }

    const logout = async() => {
        localStorage.removeItem('token')
        navigate('/')
    }

    return(
        <div className='navbar'>
            <div className='scheme'>
                <Link to='/' style={{textDecoration: 'none'}}><span id='oak'>Oak</span><span id='wood'>Wood</span></Link>
            </div>
            <ul className='three'>
                <li><Link to='/product' style={{textDecoration: 'none', color: 'black'}}>Product</Link></li>
                <li><Link to='/about' style={{textDecoration: 'none', color: 'black'}}>About</Link></li>
                <li><Link to='/contact' style={{textDecoration: 'none', color: 'black'}}>Contact</Link></li>
            </ul>
            <div className='cont'>
                <div className='cont-act'>
                    <h3>{count}</h3>
                    <AiOutlineShoppingCart onClick={increase} className='cart'/>
                </div>

                <Box _hover={{ cursor: "pointer" }} pl="5rem">
                    <Text  onClick={logout}>Log Out</Text>
                </Box>
            </div>

            
        </div>
    )
}

export default Navbar
