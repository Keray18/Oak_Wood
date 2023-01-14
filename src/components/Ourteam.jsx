import React from 'react'
import Boxes from './Boxes.jsx'
import photo1 from '../Photos/p1.png'
import './TeamP.css'




function Ourteam() {
    return(
        <div className='ourteam'>
            <div className='company'>
                <h3>KAV & Co.</h3>
            </div>
            <div className='head'>
                <h3>OUR TEAM</h3>
            </div>
            <div className='para-line'>
                <p>We have a group of great and hardworking members.</p>
            </div>
            <div className='discription'>
                <Boxes 
                    img={photo1}
                    title="Founder"
                    name="Keshav Bahoray"
                />
                <Boxes 
                    img='https://avatars.githubusercontent.com/u/91780794?v=4'
                    title="Founder"
                    name="Kartikey Tandon"
                />
                <Boxes 
                    img='https://avatars.githubusercontent.com/u/91780794?v=4'
                    title="Founder"
                    name="Kartikey Tandon"
                />
                <Boxes 
                    img={photo1}
                    title="Founder"
                    name="Keshav Bahoray"
                />
            </div>
            
        </div>
    )
}

export default Ourteam