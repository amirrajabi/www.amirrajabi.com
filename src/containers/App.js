import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import RouteList from '../routes';
import Home from './home';
import Pages from './Pages';
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
                {RouteList.map((route, index) => {
                    return (
                        <Route exact={true}
                               key={index}
                               {...route}/>
                    )
                })}
            </div>
        );
    }
}

export default App;
