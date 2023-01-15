import React from 'react'
import Comps from './Comps/Comps'
import img1 from './productImages/jacks.jpg'


export default function Clothes() {
    return(
        <div className='shoe griding'>
            <Comps 
                img={img1}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img1}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img1}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img1}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img1}
                name="Something"
                price="$100"
            />
            <Comps 
                img={img1}
                name="Something"
                price="$100"
            />
        </div>
    )
}