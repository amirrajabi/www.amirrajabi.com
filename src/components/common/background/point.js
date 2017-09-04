import React, { Component } from 'react';
import { Circle } from 'react-konva';
import PropTypes from 'prop-types';
import { TweenMax } from 'greensock';

class Point extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            color: window.Konva.Util.getRandomColor(),
            x: this.props.x,
            y: this.props.y
        };
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        TweenMax.to(this.refs.point, 5, {x:200, y:100});
        // setTimeout(() => {
            //
        //     console.log(this.refs.point);
        // }, 5000);
        // let node= this.findDOMNode();
        // console.log(this);
    }

    handleClick = () => {
        // TweenMax.to(this.refs.point, 5, {x: 200, y:500});
        this.setState({
            color: window.Konva.Util.getRandomColor()
        });
    };

    render() {
        return (
            <Circle x={this.props.x}
                    y={this.props.y}
                    radius={this.props.radius}
                    fill={this.state.color}
                    shadowBlur={this.props.shadowBlur}
                    onClick={this.handleClick}
                    ref={'point'}
            />
        );
    }
}

Point.propTypes = {
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    radius: PropTypes.number.isRequired,
    shadowBlur: PropTypes.number.isRequired
};

export default Point;