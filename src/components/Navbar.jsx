import React, {useState} from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import {Link} from 'react-router-dom'
import ProdList from './ProdList'
// ** Note ** All the styling is in App.css



function Navbar() {
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
                    <h3>0</h3>
                    <AiOutlineShoppingCart className='cart'/>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
