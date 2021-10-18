import React from 'react';

const PostsList = ({posts}) => {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => <li key={post.id}>{post.label}</li>)}
      </ul>
    </div>
   );
}
 
export default PostsList;