import React from 'react';
import { Header } from '../../components';
import { Space, Typography } from 'antd';

const { Title, Paragraph, Text, Link } = Typography;

export default function HomePage() {
  return (
    <div>
      <Header />

      <Typography>
        <Paragraph>
          Hello🙇🏻‍♀️, I'm Mijeong. I'm a Software Developer and a CS student pursuing M.S. in Machine
          Learning at Stevens Institute of Technology, currently based in New York City. I'm a
          full-time learner, I love to learn new things.
        </Paragraph>
      </Typography>
    </div>
  );
}
