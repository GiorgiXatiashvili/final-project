import React from "react"
import { useParams } from "react-router-dom"
import productsData from '../components/productsData';

function ProductDetail() {
    const { productId } = useParams()
    const thisProduct = productsData.find(prod => prod.id === productId)

    return (
        <div className='detailscontainer'>
            <span className='detailimg'><img src={thisProduct.imgUrl}></img></span>
            <div className='detailsmenu'><span className='proddescription'><h1 className='detailname'>{thisProduct.name}</h1>
                <p>{thisProduct.description}</p>
                <p className='detailprice'>{thisProduct.price}GEL</p>
                <div className="size">Size:
                <button className="sizebutton">XS</button>
                    <button className="sizebutton">S</button>
                    <button className="sizebutton">M</button>
                    <button className="sizebutton">L</button>
                    <button className="sizebutton">XL</button>
                    <button className="sizebutton">XXL</button>
                </div></span>
                <span className='buttoncontainer'>
                    <button className='detailbutton'>+ Add to cart</button>
                </span>
            </div>
        </div>
    )
}

export default ProductDetail;