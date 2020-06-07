import React, { useContext } from 'react';
import { Consumer } from '../Context'

function Cart() {

  const { cart, removeFromCart, addToCart, increment, decrement } = useContext(Consumer)

  function total() {
    let total = 0;
    for (let i of cart)
      total += (i.price * i.quantity)
    return total
  }

  const cartItems = cart.map((product, index) =>
    <div key={index}>
      <div className='shoppingcard'>
        <img src={product.imgUrl}></img>
        <div className='cartinfo'>
          <h2 className='cartprodname'>{product.name}</h2>
          <br></br>
          <p>price:<strong>{product.price}GEL</strong></p>
          <br></br>
          <p >Total price:<strong>{+product.price * +product.quantity}</strong></p>
        </div>
        <div className='cartbuttcontainer'>
          <button className='removebutt' onClick={() => removeFromCart(product.id)}>REMOVE</button>
          <span className='cartbuttons'>
            <button className='minusprod' onClick={() => decrement(product)} >-</button>
            <span className='quantity'>{product.quantity}</span>
            <button className='plusprod' onClick={() => increment(product)}>+</button>
          </span>
        </div>
      </div>
    </div>
  )
  return (
    <>
      {cart.length > 0 ? <div>
        <h1 className='carth'>Cart</h1>
        <div className='cartcontainer'>
          {cartItems}
        <span className='totalprice'><hr></hr>Total Price:<strong>{total()} GEL</strong><hr></hr></span>
        </div>

      </div> 
      : <h1 className='cartempty'>Cart is Empty <i className="fas fa-shopping-bag"></i> </h1>}
    </>
  )
}
export default Cart;