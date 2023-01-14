import React from 'react'
import image2 from '../assets/page2.png'
import './HandA.css'

function About() {
    return(
        <div className='about'>
            <div className='item-a'>
                <div className='content'>
                    <h3>About Us</h3>
                    <p>Clothing is any item worn on the body. Typically, clothing is made of fabrics or textiles, but over time it has included garments made from animal skin and other thin sheets of materials and natural products found in the environment, put together.</p>
                </div>
            </div>
            <div className='item-b'>
                <img src={image2} alt='Image2-1' />
            </div>
        </div>
    )
}

export default About