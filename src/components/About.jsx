import React from 'react'
import image2 from '../assets/page2.jpg'
import './HandA.css'

function About() {
    return(
        <div className='about'>
            <div className='item-a'>
                <div className='content'>
                    <h3>About Us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                </div>
            </div>
            <div className='item-b'>
                <img src={image2} alt='Image2-1' />
            </div>
        </div>
    )
}

export default About