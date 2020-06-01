import React from 'react'
import Products from './Product';



function Home() {
    let product = Products.map((item, index) =>

        <div className="product" key={index}>
            <img className="productsimg" src={item.imgUrl}/>
            <div>{item.id=false}</div>
            <div className="name-price"><p>{item.name}</p><p>{item.price} GEL</p></div> 
            <button className="productsbutton"> + Add to cart</button>
        </div>)
    return (
        <div className="productcontainer">
            {product}
        </div>

    )
}

export default Home;