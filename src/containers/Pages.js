import React from 'react';

const Pages = ({ match }) => {

    return (
        <div>
            {match.params.category}
        </div>
    )

};

export default Pages;