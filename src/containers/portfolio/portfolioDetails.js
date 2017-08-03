import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as portfolioActions from '../../actions/portfolioActions';

class PortfolioDetails extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    render() {
        return (
            <div>
                <p>{this.props.item.name}</p>
                <p>{this.props.item.type}</p>
                <a href={this.props.item.url}>Link</a>
            </div>
        )
    }
}

PortfolioDetails.propTypes = {
    actions: PropTypes.object.isRequired,
    item: PropTypes.object.isRequired
};

function getPortfolioById(portfolio, id) {
    const item = portfolio.filter( item => item.id === id);
    if(item) return item[0];
    return null;
}

function mapStateToProps(state, ownProps) {
    const portfolioId = ownProps.match.params.id;
    let item = {id: '', name: '', type: '', url: '', images: []};
    if(state.portfolio.items !== undefined) {
        if (portfolioId && state.portfolio.items.length > 0) {
            item = getPortfolioById(state.portfolio.items, portfolioId);
        }
    }
    return {
        item: item
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
)(PortfolioDetails);