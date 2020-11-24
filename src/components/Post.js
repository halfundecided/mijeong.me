import React, { useState } from 'react';
import { Card, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Post = ({ post }) => {
  const { title, pubDate, link, thumbnail } = post;

  return (
    <Card
      style={{
        marginTop: 10,
        marginLeft: 15,
        marginRight: 15,
      }}
      cover={<img alt={title} src={thumbnail} height="200" style={{ objectFit: `cover` }} />}
      actions={[<Button type="dashed" shape="circle" href={link} icon={<SearchOutlined />} />]}
    >
      <Meta title={title} description={pubDate} />
    </Card>
  );
};

export default Post;
