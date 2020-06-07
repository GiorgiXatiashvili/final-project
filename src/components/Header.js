import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Consumer } from '../Context'

function Header() {

  const { cart } = useContext(Consumer)

  console.log(cart)

  return (
    <div className="page">
      <Link to='/'><header tabIndex="0"><span className="logo-g">G</span><span className="logo-k">K</span></header></Link>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabIndex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/about'>About</Link></li>
            <li><Link to='/contact'>Contact</Link></li>

          </ul>
        </div>
      </div>
      <div className="bag">
        <Link to="/cart">
        <i className="fas fa-shopping-bag carticon"></i>
          <span className='cartlength'>{cart.length > 0 && cart.length}</span>
        </Link>
      </div>
    </div>
  )
}

export default Header