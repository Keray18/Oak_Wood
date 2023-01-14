import React from 'react'
import Shoes from './Product_Components/Shoes'
import Cata from './Product_Components/Cata'
import {Routes,Route} from 'react-router-dom'
import './Purchase.css'

function Purchase() {
    return(
        <div className='purchase'>
            <Cata />
            <Routes>
                <Route path='/:one' element={<Shoes />} />
            </Routes>
        </div>
    )
}

export default Purchase