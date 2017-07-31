/**
 * Created by Amir on 30/7/17.
 */
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux';
import * as mainMenuActions from '../../actions/mainMenuActions';
import Burger from './Burger';

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
                <p>{this.props.status.toString()}</p>
            </div>
        )
    }

}

MainMenu.propTypes = {
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        status: state.mainMenu.status
    }
}

function mapDispatchToProps( dispatch ) {
    return {
        // mainMenuStatus: status => dispatch(mainMenuActions.mainMenuStatus(status))
        actions: bindActionCreators(mainMenuActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MainMenu);
