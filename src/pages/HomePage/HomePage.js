import React from 'react';
import { Header, MediumFeed } from '../../components';
import { Space, Typography, Divider } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default function HomePage() {
  const section1 = (
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
    </Typography>
  );
  const section2 = (
    <Typography>
      <Title level={3}>Experience</Title>
      <Paragraph>
        efficitur elit. Phasellus rutrum lectus eu volutpat congue. Donec viverra odio ac tempus
        varius. Maecenas aliquet at ante sit amet sollicitudin. Morbi venenatis tristique nulla, vel
        iaculis lectus mollis eget. Proin eget tincidunt lectus. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Fusce volutpat metus quis est luctus placerat. Phasellus nunc
        sem, luctus
      </Paragraph>
    </Typography>
  );
  return (
    <div>
      <Header />
      <div className="home-contents">
        {section1}
        <Divider />
        {section2}
        <Divider />
        <MediumFeed />
      </div>
    </div>
  );
}
