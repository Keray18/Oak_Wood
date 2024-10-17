import React from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs';
import { CgMail } from "react-icons/cg";
import { TbWorld } from 'react-icons/tb';
import image4 from '../assets/xlast.jpg'



function Contact() {


    function myNumber() {
        const board = navigator.clipboard
        const num = "9650856160"
        board.writeText(num).then(() => alert('Number copied'));
      }




    return(
        <div className='contact'>
            <div className='cont-us'>
                <h3>CONTACT US</h3>
            </div>
            <div className='note'>
                <p>Thanks for visiting our website,below are the details to contact. </p>
            </div>
            <div className='image4'>
                <img src={image4} alt='image4' />
            </div>
            <div className='fav-icons same-icons'>
                <div className='phone same-icons'>
                    <div className='i1'>
                        <span onClick={myNumber}>
                            <BsFillTelephoneFill className='r-icons' id='clip' />
                        </span>
                    </div>
                    <h3>+91 9650856160</h3>
                </div>
                <div className='mail same-icons'>
                    <div className='i1'>
                        <a href="mailto:keshavbahoray18@gmail.com" target='_blank'>
                            <CgMail className='r-icons'/>
                        </a>
                    </div>
                    <h3>keshavbahoray18@gmail.com</h3>
                </div>
                <div className='site same-icons'>
                    <div className='i1'>
                        <a href='https://keray18.github.io/Keshav_portfolio/' target='_blank'>
                            <TbWorld className='r-icons'/>
                        </a>
                    </div>
                    <h3>https://keshav18-portfolio.netlify.app/</h3>
                </div>

            </div>
        </div>
    )
}
export default Contact