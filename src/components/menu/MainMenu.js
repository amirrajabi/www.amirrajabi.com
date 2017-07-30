/**
 * Created by Amir on 30/7/17.
 */
import React, {Component} from 'react';
import Burger from './Burger';

class MainMenu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
        this.burgerClick = this.burgerClick.bind(this);
    }

    menuStatus() {
        let hamburgerIcon =  document.querySelector(".hamburger-icon");
        if(hamburgerIcon.classList.contains("hamburger-icon--close")){
            hamburgerIcon.classList.remove("hamburger-icon--close");
            hamburgerIcon.classList.add("hamburger-icon--open");
        }else{
            hamburgerIcon.classList.add("hamburger-icon--close");
            hamburgerIcon.classList.remove("hamburger-icon--open");
        }
    }

    burgerClick() {
        //TODO set stor in redux for close and open menu
        console.log('Menu Clicked!');
        this.menuStatus();
    }

    render() {

        return (
            <Burger burgerClick={this.burgerClick}/>
        )

    }

}

MainMenu.propTypes = {};

export default MainMenu;