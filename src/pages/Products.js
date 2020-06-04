import React from "react"
import { Link } from "react-router-dom"
import productsData from '../components/productsData';


function Products() {
    const products = productsData.map(prod => (
        <div className='product' key={prod.id}>
            <img className='productsimg' src={prod.imgUrl} />
           
                <div className='name-price'><span><Link to={`/products/${prod.id}`}>{prod.name}</Link></span><span>{prod.price}GEL</span></div>
            
                <button className='productsbutton'>+ Add to cart</button>
        </div>
    ))

    return (
            <div className='productcontainer'>
                {products}
            </div>
    )
}

export default Products