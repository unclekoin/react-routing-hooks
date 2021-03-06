import React from 'react';
import { useParams } from 'react-router-dom';
// import queryString from "query-string";
// import _ from "lodash";
import Post from '../components/post';
import PostsList from '../components/posts-list';

const Posts = ({ match, history, location }) => {
  const params = useParams();
  const posts = [
    { id: '1', label: 'Post #1' },
    { id: '2', label: 'Post #2' },
    { id: '3', label: 'Post #3' },
  ];

  // add query params in url: ?count=1
  // const search = queryString.parse(location.search);
  // const postId = match.params.postId;
  const display = match.params.display;

  const { postId } = params;

  // const cropPosts = search ? _(posts).slice(0).take(search.count).value() : posts;

  return (
    <div>
      <h1>Posts</h1>
      {postId ? (
        <>
          {display && <h3>{display}</h3>}
          <Post posts={posts} id={postId} history={history} />
        </>
      ) : (
        <PostsList posts={posts} />
      )}
    </div>
  );
};

export default Posts;
