import React  from 'react';
function Menu(props) {






    return (
        <div className="menucontainer">
            <div className="size" onClick={props.filterSize}>Size:
                <button className={ props.size.XS ? 'pressed' : 'unpressed' }value='XS'>XS</button>
                <button className={ props.size.S ? 'pressed' : 'unpressed' } value='S'>S</button>
                <button className={ props.size.M ? 'pressed' : 'unpressed' } value='M'>M</button>
                <button className={ props.size.L ? 'pressed' : 'unpressed' } value='L'>L</button>
                <button className={ props.size.XL ? 'pressed' : 'unpressed' } value='XL'>XL</button>
                <button className={ props.size.XXL ? 'pressed' : 'unpressed' } value='XXL'>XXL</button>
            </div>
            <div className="found">
                {props.data.length} product found
            </div>
            <div className="sortby">
                <select className="orderselect" onClick={(e) => props.sort(e)}>
                    <option value="order by">Order By</option>
                    <option value="lowest to highest">lowest to highest</option>
                    <option value="highest to lowest">highest to lowest</option>
                </select>
            </div>
        </div>
    )
}
export default Menu;