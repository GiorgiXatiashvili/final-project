import React from "react"
import { Link } from "react-router-dom"
import productsData from '../components/productsData';
import Menu from '../components/Menu'
import { useState,useContext } from "react"
import {Consumer} from '../Context'


function Products() {
    const [clicked, setIsClicked] = useState(false)
    const [size, setSize] = useState({ XS: false, S: false, M: false, L: false, XL: false, XXL: false })

    const {addToCart} = useContext(Consumer)

    function filterSize(e) {
        const { value } = e.target
        setSize(prev => {
            return {
                ...prev,
                [value]: !prev[value]
            }
        })
    }

    function getTrue(){
        for(let i in size){
            if(size[i]){
                return true;
            }
        }
    }

    getTrue()
    


    let filtered = []
    if(getTrue){
        for(let i in size){
            if(size[i]){
                for(let k of productsData){
                    for(let j in k.size){
                        if(k.size[j] === i){
                            if(!filtered.includes(k))
                                filtered.push(k)
                        }
                    }
                }
            }
        }
    }

    function mapOver(){
     return filtered.length > 0 ? filtered : productsData
    }


    function sort(e) {
        let { value } = e.target
        if (value === 'order by') {
            return false
        }
        if (value === 'highest to lowest') {
            setIsClicked(prev => !prev)
            mapOver().sort((a, b) => b.price - a.price)
        } else if (value = 'lowest to highest') {
            setIsClicked(prev => !prev)
            mapOver().sort((a, b) => a.price - b.price)
        }
    }
    const products = mapOver().map(prod => (
        <div className='product' key={prod.id}>
            <img className='productsimg' src={prod.imgUrl} />
            <div className='name-price'><span><Link to={`/products/${prod.id}`}>{prod.name}</Link></span><span>{prod.price}GEL</span></div>
            <button className='productsbutton' onClick={()=>addToCart(prod)}>+ Add to cart</button>
        </div>
    ))

    return (
        <>
            <Menu sort={sort} data={mapOver()} filterSize={filterSize} size={size}/>
            <div className='productcontainer'>
                {products}
            </div>
        </>
    )
}

export default Products

