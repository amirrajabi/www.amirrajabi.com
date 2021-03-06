import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './styles/menu-items.css';

const MenuItems = ( { items, showing } ) => {
    return (
        <div className={`menu-items ${showing ? 'menu-items--show' : ''}`}>
            {items.map((item, index) => {
                return (
                    <p key={index}>
                        <Link to={item.id}>
                            {item.title}
                        </Link>
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
