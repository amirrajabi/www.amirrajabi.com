import React, {Component} from 'react';
import {Layer, Stage} from 'react-konva';
import { TweenMax } from 'greensock';
import Point from './point';
import './styles.css';

class Background extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            screenWidth: document.documentElement.clientWidth,
            screenHeight: document.documentElement.clientHeight,
            listPoints: []
        }
    }

    componentDidMount() {
        const totalPoint = 1;
        let listPoints = [];
        for (let i = 0; i < totalPoint; i++) {
            listPoints.push({
                x: Math.round(Math.random() * this.state.screenWidth),
                y: Math.round(Math.random() * this.state.screenHeight),
                radius: Math.random() * 25,
                shadowBlur: 2
            });
            // let node= this.refs[`point-${i}`].findDOMNode();
            // TweenMax.to(node, 5, {x:200, y:100});
            // console.log(`point-${i}`);
        }
        this.setState({
            listPoints: listPoints
        });
    }

    render() {
        return (
            <Stage width={this.state.screenWidth} height={this.state.screenHeight} className="background">
                <Layer>
                    {
                        this.state.listPoints.map((item, index) => {
                            return (
                                <Point key={index}
                                       ref={`point-${index}`}
                                       x={item.x}
                                       y={item.y}
                                       radius={item.radius}
                                       shadowBlur={item.shadowBlur}/>
                            )
                        })
                    }
                </Layer>
            </Stage>
        );
    }
}

export default Background;