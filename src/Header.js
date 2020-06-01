import React from 'react';

function Header() {
  return (
    <div className="page">
      <header tabIndex="0"><span className="logo-g">G</span><span className="logo-k">K</span></header>
      <div id="nav-container">
        <div className="bg"></div>
        <div className="button" tabIndex="0">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </div>
        <div id="nav-content" tabIndex="0">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>

          </ul>
        </div>
      </div>
      <div className="bag">
        <i className="fas fa-suitcase"></i>
      </div>
    </div>
  )
}

export default Header