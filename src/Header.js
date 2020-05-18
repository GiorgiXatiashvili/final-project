import React from 'react';

function NavMenu() {
    return(
        
            <h2 class="logo">DarkCode</h2>
            <input type="checkbox" id="chk">
            <label for="chk" class="show-menu-btn">
            <i class="fas fa-ellipsis-h"></i>
            </label>

            <ul class="menu">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Works</a>
            <a href="#">Contact</a>
            <label for="chk" class="hide-menu-btn">
                <i class="fas fa-times"></i>
            </label>
            </ul>
        
    );
};