import React from 'react';
import { Header } from '../../components';
import { Typography, Avatar, Divider } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import stevenslogo from '../../assets/img/stevens-logo.png';

const { Title, Paragraph, Text, Link } = Typography;

export default function AboutPage() {
  const education = (
    <Typography>
      <Title level={3}>Education</Title>
      <div className="education-header">
        <Avatar size={64} src={stevenslogo} />
        <div className="education-title">
          <Title level={5}>{`Master of Science in Machine Learning`}</Title>
          <Text type="secondary">Stevens Institute of Technology | Dec 2020 | GPA: 4.0</Text>
        </div>
      </div>
      <div className="education-body">
        Coursework: <Text code>Statistical Machine Learning</Text>
        <Text code>Deep Learning</Text>
        <Text code>Artificial Intelligence</Text>
        <Text code>Natural Language Processing</Text>
        <Text code>Human-Computer Interaction</Text>
        <Text code>Knowledge Discovery and Data Mining</Text>
        <Text code>Web Mining</Text>
        <Text code>Social Network Analysis</Text>
        <Text code>Web Programming I & II</Text>
        <Text code>Programming the IoT using iOS</Text>
      </div>
      <Divider dashed="true" orientation="right" style={{ color: '#EFEFEF' }}>{`👩🏻‍🎓 🧡 🏛`}</Divider>
      <div className="education-header">
        <Avatar size={64} src={stevenslogo} />
        <div className="education-title">
          <Title level={5}>{`Bachelor of Science in Machine Learning`}</Title>
          <Text type="secondary">Stevens Institute of Technology | May 2020 | GPA: 3.9</Text>
        </div>
      </div>
      <div className="education-body">
        Coursework: <Text code>Statistical Machine Learning</Text>
        <Text code>Data Structure</Text>
        <Text code>Algorithms</Text>
        <Text code>Discrete Structures</Text>
        <Text code>Automata and Computation</Text>
        <Text code>Database Management Systems</Text>
        <Text code>IT Security</Text>
        <Text code>Operating Systems</Text>
        <Text code>Systems Programming</Text>
        <Text code>Concurrent Programming</Text>
        <Text code>Project Management</Text>
      </div>
      <Divider />
    </Typography>
  );

  return (
    <div>
      <Header />
      <div className="contents">{education}</div>
    </div>
  );
}
