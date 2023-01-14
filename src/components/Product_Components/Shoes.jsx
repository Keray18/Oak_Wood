import React from 'react'
import Comps from './Comps/Comps'
import img from './productImages/page3-1.png'


export default function Shoes() {
    return(
        <div className='shoe griding'>
            <Comps 
                img={img}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img}
                name="Something"
                price="$100"
            />
        </div>
    )
}