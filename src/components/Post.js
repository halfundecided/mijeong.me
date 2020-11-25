import React from 'react';
import { Card, Button, Avatar, Tag } from 'antd';
import { MediumOutlined, TagOutlined } from '@ant-design/icons';

const { Meta } = Card;

const Post = ({ post, avatar }) => {
  const { title, pubDate, link, thumbnail, author, categories } = post;

  const categoryList = categories.map((category) => {
    return (
      <Tag className="medium-tag" icon={<TagOutlined />} color="default">
        {category}
      </Tag>
    );
  });
  return (
    <Card
      style={{
        marginTop: 10,
      }}
      cover={<img alt={title} src={thumbnail} height="200" style={{ objectFit: `cover` }} />}
      actions={[<Button type="dashed" shape="circle" href={link} icon={<MediumOutlined />} />]}
    >
      <Meta
        avatar={<Avatar src={avatar} />}
        title={title}
        description={`by ${author} at ${pubDate}`}
      />
      <div className="medium-tags">{categoryList}</div>
    </Card>
  );
};

export default Post;
