import React from 'react'

function Boxes(props) {
    return(
        <div className='boxes'>
                <img src={props.img} alt='image3' />


                <h3>{props.title}</h3>
                <p>{props.name}</p>


        </div>
    )
}
export default Boxes