import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as portfolioActions from '../../actions/portfolioActions';

class Portfolio extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {};
    }

    render() {
        return (
            <div>
                <p>portfolio Buddy!</p>
                { this.props.portfolioItems !== undefined &&
                    this.props.portfolioItems.map((item, index) => {
                        return (
                            <Link key={index}
                                  to={`/portfolio/${item.id}`}>
                                {item.name}
                            </Link>
                        )
                    })
                }
            </div>
        )
    }
}

Portfolio.propTypes = {
    actions: PropTypes.object.isRequired,
    portfolioItems: PropTypes.array
};

function mapStateToProps(state) {
    return {
        portfolioItems: state.portfolio.items
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(portfolioActions, dispatch)
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Portfolio);