import React from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li >{post.label}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default PostsList;
