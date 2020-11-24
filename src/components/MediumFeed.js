import React, { useState, useEffect } from 'react';
import { Posts } from './';
import { Skeleton, Card, Avatar, Row, PageHeader, Tag, Divider } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined, SyncOutlined } from '@ant-design/icons';

const { Meta } = Card;

const MY_MEDIUM_URL =
  'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@halfundecided';

const MediumFeed = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState([]);
  const [posts, setPosts] = useState([]);

  const fetchMediumData = async () => {
    setLoading(true);
    try {
      const res = await fetch(MY_MEDIUM_URL);
      const fetchedData = await res.json();
      setProfile(fetchedData.feed);
      setPosts(fetchedData.items);
      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchMediumData();
  }, []);

  return (
    <>
      <PageHeader
        title={profile.title}
        tags={
          <Tag icon={<SyncOutlined spin />} color="geekblue">
            Sometimes Writing
          </Tag>
        }
        avatar={{ src: profile.image }}
        style={{ marginTop: 20 }}
      ></PageHeader>
      <Divider orientation="right">Posts</Divider>
      {loading ? (
        [...Array(4)].map((e, index) => {
          return (
            <Row key={index} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Card
                style={{
                  width: 1000,
                  marginTop: 10,
                  marginLeft: 15,
                  marginRight: 15,
                }}
                actions={[
                  <SettingOutlined key="setting" />,
                  <EditOutlined key="edit" />,
                  <EllipsisOutlined key="ellipsis" />,
                ]}
              >
                <Skeleton loading={loading} avatar active>
                  <Meta avatar={<Avatar src="" />} title="" description="" />
                </Skeleton>
              </Card>
            </Row>
          );
        })
      ) : (
        <Posts posts={posts} />
      )}
    </>
  );
};

export default MediumFeed;
