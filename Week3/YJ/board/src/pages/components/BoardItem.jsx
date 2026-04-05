import React from 'react'

export const BoardItem = ({post, deletePost}) => {

  return (
    <li>
        <div>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
        </div>
        <button onClick = {() => deletePost(post.id)}>삭제</button>
    
    </li>
  )
}
