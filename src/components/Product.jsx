import React from 'react'
import ProdList from './ProdList'
import image_1 from '../assets/page3-1.png'
import image_2 from '../assets/page3-2.png'
import image_3 from '../assets/page3-3.png'
import {Link} from 'react-router-dom'
import './TeamP.css'


function Product() {
    return(
        <div className='product'>
            <div className='head'>
                <h3>CATEGORY</h3>
            </div>
            <div className='para-line'>
                <p>Here are the various categories from which you can choose products as per liking.</p>
            </div>
            <div className='prod'>
                <Link to='/purchase/one' style={{textDecoration: 'none'}}>
                <ProdList 
                    img={image_1}
                    btn='Shoes'
                />
                </Link>
                <div className='mid'>
                    <ProdList 
                        img={image_2}
                        btn='Clothes'
                    />
                </div>
                <ProdList 
                    img={image_3}
                    btn='Jewellery'
                />
            </div>
        </div>
    )
}

export default Product
