import React from 'react'
import Comps from './Comps/Comps'
import img0 from './productImages/page3-1.jpg'

export default function Shoes() {
    return(
        <div className='shoe griding'>
            <Comps 
                img={img0}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img0}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img0}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img0}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img0}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img0}
                name="Something"
                price="$100"
            />
        </div>
    )
}