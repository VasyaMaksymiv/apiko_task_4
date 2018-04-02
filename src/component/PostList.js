import React from 'react';



const PostList = (props) => {
    return (
        <div className='postList' >
            {props.post()}
        </div>
    );
};

export default PostList;