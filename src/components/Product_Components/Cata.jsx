import React from 'react'
import {Link} from 'react-router-dom'





function Cata() {
    return(
        <div className='newNav'>
                <ul className='naved'>
                    <Link to="/purchase/shoes" style={{textDecoration: 'none',color:'black'}}><li>Shoes</li></Link>
                    <Link to="/purchase/clothes" style={{textDecoration: 'none',color:'black'}}><li>Clothing</li></Link>
                    <Link to="/purchase/gear" style={{textDecoration: 'none',color:'black'}}><li>Gear</li></Link>
                </ul>
        </div>
    )
}

export default Cata