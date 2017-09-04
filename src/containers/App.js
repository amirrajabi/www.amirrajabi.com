import React, {Component} from 'react';
import { TweenMax } from 'greensock';
import Pages from './Pages';
import MainMenu from '../components/mainMenu/MainMenu';
import Background from '../components/common/background/background'
import '../styles/app.css';

class App extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    componentDidMount() {
        TweenMax.to(this.refs.somy, 5, {x:500, y:500});
        // setTimeout(() => {
        //
        //     console.log(this.refs.point);
        // }, 5000);
        // let node= this.findDOMNode();
        // console.log(this);
    }

    render() {
        return (
            <div className="app">
                <div ref="somy" className="somy"></div>
                <MainMenu/>
                <Pages/>
                <Background/>
            </div>
        );
    }
}

export default App;
