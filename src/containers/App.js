import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
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
                <Switch>
                    {RouteList.map((route, index) => {
                        return (
                            <Route exact={true}
                                   key={index}
                                   {...route}/>
                        )
                    })}
                </Switch>
            </div>
        );
    }
}

export default App;
