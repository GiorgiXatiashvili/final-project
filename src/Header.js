import React from 'react';

function Header() {
  return (
    <div class="page">
      <header tabindex="0"><span className="logo-g">G</span><span className="logo-k">K</span></header>
      <div id="nav-container">
        <div class="bg"></div>
        <div class="button" tabindex="0">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </div>
        <div id="nav-content" tabindex="0">
          <ul>
            <li><a href="#0">Home</a></li>
            <li><a href="#0">About</a></li>
            <li><a href="#0">Contact</a></li>

          </ul>
        </div>
      </div>
      <div className="bag">
        <i class="fas fa-suitcase"></i>
      </div>
    </div>
  )
}

export default Header