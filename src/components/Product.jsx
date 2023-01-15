import React from 'react'
import ProdList from './ProdList'
import image_1 from '../assets/page3-1.jpg'
import image_2 from '../assets/page3-2.jpg'
import image_3 from '../assets/page3-3.jpg'
import {Link} from 'react-router-dom'
// import Cata from './Product_Components/Cata'
import './TeamP.css'


function Product() {
    // let count = 0
    // function open() {
    //     count++
    //     console.log(count)
    //     if(count > 0) {
    //         <Cata style={{display: 'none'}} />
    //     }
    // }
    function message() {
        alert("Under Maintenance")
    }
    return(
        <div className='product'>
            <div className='head'>
                <h3>CATEGORY</h3>
            </div>
            <div className='para-line'>
                <p>Here are the various categories from which you can choose products as per liking.</p>
            </div>
            <div className='prod'>
                <Link to='/purchase/shoes' style={{textDecoration: 'none'}} onClick={message}>
                <ProdList 
                    img={image_1}
                    btn='Shoes'
                />
                </Link>
                <div className='mid'>
                    <Link to='/purchase/clothes' style={{textDecoration: 'none'}} onClick={message}>
                        <ProdList 
                            img={image_2}
                            btn='Clothing'
                        />
                    </Link>
                </div>
                <Link to='/purchase/gear' style={{textDecoration: 'none'}} onClick={message}>
                    <ProdList 
                        img={image_3}
                        btn='Gear'
                    />
                </Link>
            </div>
        </div>
    )
}

export default Product
