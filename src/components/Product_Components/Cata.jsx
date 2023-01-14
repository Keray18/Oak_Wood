import React from 'react'
import {Link} from 'react-router-dom'





function Cata() {
    return(
        <div className='newNav'>
                <ul className='naved'>
                    <Link to="/purchse"><li>Shoes</li></Link>
                    <Link to="/Shoes"><li>Shoes</li></Link>
                    <Link to="/Shoes"><li>Shoes</li></Link>
                </ul>
        </div>
    )
}

export default Cata