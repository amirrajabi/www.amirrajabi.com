import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
// import { TransitionSwitch } from './TransitionSwitch';
// import {CSSTransitionGroup} from 'react-transition-group';

import RouteList from '../routes';
import MainMenu from '../components/mainMenu/MainMenu';

import './styles/app.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="app">
                <MainMenu/>
                {/*<CSSTransitionGroup*/}
                    {/*transitionName="example"*/}
                    {/*transitionEnterTimeout={500}*/}
                    {/*transitionLeaveTimeout={300}>*/}
                    {/*<TransitionSwitch parallel={false}>*/}
                    <Switch>
                        {RouteList.map((route, index) => {
                            return (
                                <Route exact={true}
                                       key={index}
                                       {...route}/>
                            )
                        })}
                    </Switch>
                    {/*</TransitionSwitch>*/}
                {/*</CSSTransitionGroup>*/}
            </div>
        );
    }
}

export default App;
