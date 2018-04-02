import React from 'react'

const PostListItem = (props) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
        </div>
    )
}

export default PostListItem
