import React from 'react';
import PropTypes from 'prop-types';

const MenuItems = ( { items, showing } ) => {
    return (
        <div className={`menu-items ${showing ? 'menu-items--show' : ''}`}>
            {items.map((item, index) => {
                return (
                    <p key={index}>
                        <a href="amirrajabi.com">{item.title}</a>
                    </p>
                )
            })}
        </div>
    )
};

MenuItems.propTypes = {
    items: PropTypes.array.isRequired,
    showing: PropTypes.bool.isRequired
};

export default MenuItems;
