import React, {Component} from 'react';
import MainMenu from '../components/mainMenu/MainMenu';

import '../styles/App.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div className="App">
                <MainMenu/>
            </div>
        );
    }
}

export default App;
