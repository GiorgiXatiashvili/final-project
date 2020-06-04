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
                15 product found
            </div>
            <div className="sortby">
                    <select className="orderselect">
                        <option value="0">Order By</option>
                        <option value="lowest">lowest to highest</option>
                        <option value="highest">highest to lowest</option>
                    </select>
                </div>
            </div>
    )
}
export default Menu;