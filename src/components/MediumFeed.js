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
      {loading ? (
        [...Array(4)].map((e, index) => {
          return (
            <Row key={index} gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Card
                style={{
                  width: 1000,
                  marginTop: 10,
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
        <Posts posts={posts} avatar={profile.image} />
      )}
    </>
  );
};

export default MediumFeed;
