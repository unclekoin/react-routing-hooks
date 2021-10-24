import React from 'react';
import { useHistory } from 'react-router-dom';

const Post = ({ id, posts }) => {
  const history = useHistory();
  const getPostById = (id) => {
    return posts.find((post) => post.id === id);
  };

  const handleSave = () => {
    history.push('/posts'); 
    // history.replace('/posts'); // you can't go back to the previous page
  };


  const post = getPostById(id);

  return (
    <div>
      <h2>{post ? post.label : `Post with id: ${id} not found`}</h2>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Post;
