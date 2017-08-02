import React from 'react';

const PortfolioDetails = ({item}) => {

    return (
        <div>
            <p>{item.name}</p>
            <small>{item.type}</small>
            <a href={item.url}>Link</a>
        </div>
    )

};

export default PortfolioDetails;