import React from 'react';
import { Header, MediumFeed } from '../../components';
import { Space, Typography, Divider, Tag, Carousel, Card } from 'antd';
import { SyncOutlined } from '@ant-design/icons';
import projectData from '../../data/projects';

const { Title, Paragraph, Text, Link } = Typography;

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

  console.log(projectData[0].title);
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
    </>
  );

  return (
    <div>
      <Header />
      <div className="home-contents">
        {introduction}
        {experience}
        {projects}
        {writings}
      </div>
    </div>
  );
}
