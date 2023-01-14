import React from 'react'

function Comps(props) {
    return(
        <div className='comps flexing'>
            <img src={props.img}  alt='img not found' />
            <h3>{props.name}</h3>
            <h3>{props.price}</h3>
        </div>
    )
}

export default Comps