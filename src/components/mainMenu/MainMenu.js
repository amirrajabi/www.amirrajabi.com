/**
 * Created by Amir on 30/7/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as mainMenuActions from '../../actions/mainMenuActions';
import Burger from './Burger';
import MenuItems from './MenuItems';

class MainMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.burgerClick = this.burgerClick.bind(this);
    }

    burgerClickEffect() {
        let hamburgerIcon = document.querySelector(".hamburger-icon");
        if (hamburgerIcon.classList.contains("hamburger-icon--close")) {
            hamburgerIcon.classList.remove("hamburger-icon--close");
            hamburgerIcon.classList.add("hamburger-icon--open");
        } else {
            hamburgerIcon.classList.add("hamburger-icon--close");
            hamburgerIcon.classList.remove("hamburger-icon--open");
        }
    }

    burgerClick() {
        this.burgerClickEffect();
        this.props.actions.mainMenuStatus(this.props.status);
    }

    render() {
        return (
            <div>
                <Burger burgerClick={this.burgerClick}/>
                <MenuItems items={this.props.menuItems}
                           showing={this.props.status}/>
            </div>
        )
    }

}

MainMenu.propTypes = {
    actions: PropTypes.object.isRequired,
    menuItems: PropTypes.array.isRequired,
    status: PropTypes.bool.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        status: state.mainMenu.status,
        menuItems: state.mainMenu.items
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        actions: bindActionCreators(mainMenuActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);
