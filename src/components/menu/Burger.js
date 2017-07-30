/**
 * Created by Amir on 30/7/17.
 */
import React from 'react';
import PropTypes from 'prop-types';

import './styles/_burger.css';

const Burger = ({ burgerClick }) => {
  return (
      <div className="hamburger-icon hamburger-icon--close"
           onClick={ burgerClick }>
          <div className="bar-wrapper">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
          </div>
      </div>
  )
};

Burger.propTypes = {
    burgerClick: PropTypes.func.isRequired
};

export default Burger;