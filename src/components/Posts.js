import React from 'react';
import { Post } from './';
import { Row } from 'antd';

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
