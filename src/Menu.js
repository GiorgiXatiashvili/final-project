import React from 'react';

function Menu() {
    return (
        <div className="menucontainer">
            <div className="size">Size:  
                <button className="sizebutton">XS</button>
                <button className="sizebutton">S</button>
                <button className="sizebutton">M</button>
                <button className="sizebutton">L</button>
                <button className="sizebutton">XL</button>
                <button className="sizebutton">XXL</button>
            </div>
            <div className="found">
                <p>15 products found</p>
            </div>
            <div className="sortby">
                <div className="custom-select">
                    <select className="orderselect">
                        <option value="0">Order By</option>
                        <option value="1">lowest to highest</option>
                        <option value="2">highest to lowest</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
export default Menu;