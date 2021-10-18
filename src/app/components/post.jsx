import React from 'react';

const Post = ({ match, posts }) => {
  const postId = match.params.postId;
  const getPostById = (id) => {
    return posts.find((post) => post.id === postId);
  }

  const post = getPostById(postId);

  return (
    <div>
      <h1>{post ? post.label: `Post with id: ${postId} not found`}</h1>
    </div>
  );
};

export default Post;
