import React from 'react'
import image1 from '../assets/page1.jpg'
import './HandA.css' 

function Home() {
    return(
        <div className='home'>
            <div className='title1'>
                <h3>KAV & Co.</h3>
            </div>
            <div className='title'>
                <h3>Welcome</h3>
            </div>
            <div className='home-fur'>
                <h3>HOME CLOTHING</h3>
            </div>
            <div className='image1'>
                <img src={image1} alt='image1' />
            </div>
        </div>
    )
}

export default Home