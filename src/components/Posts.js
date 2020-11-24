import React from 'react';
import { Post } from './';
import { Row } from 'antd';

const Posts = ({ posts }) => {
  return (
    <section>
      {posts.map((post) => {
        return <Post key={post.link} post={post} />;
      })}
    </section>
  );
};

export default Posts;
