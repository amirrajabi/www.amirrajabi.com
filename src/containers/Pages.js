import React, {Component} from 'react';
import {Route, Switch} from 'react-router-dom';
import RouteList from '../routes';
import '../styles/app.css';

class Pages extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <Switch>
                {RouteList.map((route, index) => {
                    return (
                        <Route exact={true}
                               key={index}
                               {...route}/>
                    )
                })}
            </Switch>
        );
    }
}

export default Pages;
