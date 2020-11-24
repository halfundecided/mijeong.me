import React from 'react';
import { Header, MediumFeed } from '../../components';
import { Space, Typography, Divider, Tag, Carousel, Card, Table, Button } from 'antd';
import { SyncOutlined, SnippetsOutlined } from '@ant-design/icons';
import projectData from '../../data/projects';

const { Title, Paragraph, Text, Link } = Typography;

const ml_columns = [
  {
    title: '#',
    dataIndex: 'index',
    key: 'index',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (tags) => (
      <>
        {tags.map((tag) => {
          let color = tag.length > 3 ? 'geekblue' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <a href={(text, record)}>
        <Button
          className="table-icons"
          href={record.action}
          type="dashed"
          shape="circle"
          icon={<SnippetsOutlined />}
        />
      </a>
    ),
  },
];

const ml_data = [
  {
    key: '1',
    index: '1',
    title: 'Numerical Optimization for Logistic Regression',
    tags: ['gd', 'sgd', 'mb-sgd', 'optimization'],
    action:
      'https://gist.github.com/halfundecided/b837f1405b275ba1e047f436445cd11d#file-numerical-opt-logistic-regression-ipynb',
  },
  {
    key: '2',
    index: '2',
    title: 'Convolutional Neural Network for Image Recognition',
    tags: ['cnn', 'keras'],
    action: 'https://gist.github.com/halfundecided/a14dd6fcf7e78f4d283af3a18a2a9b24',
  },
  {
    key: '3',
    index: '3',
    title: 'Seq2seq model for machine translation',
    tags: ['lstm', 'bi-lstm'],
    action: 'https://gist.github.com/halfundecided/a14dd6fcf7e78f4d283af3a18a2a9b24',
  },
];

export default function HomePage() {
  const introduction = (
    <Typography>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras suscipit consectetur neque.
        Donec non lobortis elit, eu pulvinar odio. Suspendisse efficitur dui a eros accumsan auctor.
        Duis iaculis justo vel risus hendrerit, id mattis risus pellentesque. Integer porta et mi
        vel porttitor. Praesent venenatis blandit odio, eget tristique dolor tristique sit amet. Nam
        mauris elit, lobortis sed volutpat nec, fringilla a arcu. Nunc efficitur sapien sed metus
        consequat pellentesque. Etiam quis dignissim ex. Duis in efficitur elit. Phasellus rutrum
        lectus eu volutpat congue. Donec viverra odio ac tempus varius. Maecenas aliquet at ante sit
        amet sollicitudin. Morbi venenatis tristique nulla, vel iaculis lectus mollis eget. Proin
        eget tincidunt lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
        volutpat metus quis est luctus placerat. Phasellus nunc sem, luctus
      </Paragraph>
      <Divider />
    </Typography>
  );
  const experience = (
    <Typography>
      <Title level={3}>Experience</Title>
      <Paragraph>
        efficitur elit. Phasellus rutrum lectus eu volutpat congue. Donec viverra odio ac tempus
        varius. Maecenas aliquet at ante sit amet sollicitudin. Morbi venenatis tristique nulla, vel
        iaculis lectus mollis eget. Proin eget tincidunt lectus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce volutpat metus quis est luctus placerat. Phasellus nunc
        sem, luctus
      </Paragraph>
      <Divider />
    </Typography>
  );
  const projects = (
    <>
      <Typography>
        <Title level={3}>Projects</Title>
      </Typography>
      <Carousel className="project-carousel">
        {projectData.slice(0, 5).map((project) => {
          return (
            <div>
              <h1>{project.code}</h1>
            </div>
          );
        })}
      </Carousel>
      <Divider />
    </>
  );
  const writings = (
    <>
      <Typography>
        <Title level={3}>Writings</Title>
        <div className="writing-tag">
          <Tag icon={<SyncOutlined spin />} color="#f7b0b1">
            Actively Writing
          </Tag>
        </div>
      </Typography>
      <MediumFeed />
      <Divider />
    </>
  );
  const mlwork = (
    <>
      <Typography>
        <Title level={3}>Some works on Machine Learning</Title>
      </Typography>
      <Table
        columns={ml_columns}
        dataSource={ml_data}
        showHeader={false}
        size="middle"
        pagination={false}
      />
      <Divider />
    </>
  );

  return (
    <div>
      <Header />
      <div className="home-contents">
        {introduction}
        {experience}
        {projects}
        {mlwork}
        {writings}
      </div>
    </div>
  );
}
