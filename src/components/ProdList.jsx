import React from 'react'

export default function ProdList(props) {
    return(
        <div className='items'>
            <img src={props.img} alt='' />
            <div className='button'>
                <h3>{props.btn}</h3>
            </div>
        </div>
    )
}
