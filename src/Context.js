import React, { useState } from "react"

const Context = React.createContext()


function ContextProvider(props) {
    const [cart, setCart] = useState([])
    const [click, setClick] = useState(false)

    let quantity = 1


    function addToCart(newItem) {
        let product = cart.find(({ id }) => id === newItem.id)
        if (product) {
            product.quantity += quantity
        }
        else {
            newItem['quantity'] = quantity;
            setCart(prev => [...prev, newItem])
        }
    }

    function increment(product) {
        product.quantity += quantity
        setClick(prev => !prev)
    }

    function decrement(product) {
        if (product.quantity !== 0) {
            product.quantity -= quantity
            setClick(prev => !prev)
        }

    }

    function removeFromCart(productId) {
        let product = cart.filter((item) => item.id !== productId)
        setCart(product)
    }

    return (
        <Context.Provider value={{ cart, addToCart, removeFromCart, increment, decrement }}>
            {props.children}
        </Context.Provider>
    )
}

export { ContextProvider, Context as Consumer }