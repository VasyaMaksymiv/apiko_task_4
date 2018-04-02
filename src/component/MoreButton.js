import React from 'react';

const MoreButton = (props) => {
    return (
        <div className='more_btn'>
            <button onClick={() => props.onClick()} >Load More</button>
        </div>
    );
};

export default MoreButton;