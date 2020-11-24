import React from 'react';
import { Post } from './';

const Posts = ({ posts, avatar }) => {
  return (
    <section>
      {posts.map((post) => {
        return <Post key={post.link} post={post} avatar={avatar} />;
      })}
    </section>
  );
};

export default Posts;
