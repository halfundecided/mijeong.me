import React, { useState } from 'react';
import { Header } from '../../components';
import { Typography, Avatar, Divider, Tag, Button, Row, Col, Progress } from 'antd';
import { DownOutlined, UpOutlined, HeartOutlined } from '@ant-design/icons';
import stevenslogo from '../../assets/img/stevens-logo.png';

const { Title, Paragraph, Text } = Typography;

const languages = [
  {
    title: 'JavaScript',
    percent: 80,
  },
  {
    title: 'TypeScript',
    percent: 50,
  },
  {
    title: 'Python',
    percent: 85,
  },
  {
    title: 'C/C++',
    percent: 40,
  },
  {
    title: 'Java',
    percent: 40,
  },
  {
    title: 'Swift',
    percent: 50,
  },
  {
    title: 'Erlang',
    percent: 30,
  },
  {
    title: 'Ocaml',
    percent: 20,
  },
];

const libraries = [
  { title: 'React', percent: 80 },
  { title: 'GraphQL', percent: 60 },
  { title: 'React Native', percent: 80 },
  { title: 'Express.js', percent: 65 },
  { title: 'Material-UI', percent: 75 },
  { title: 'Ant Design', percent: 70 },
  { title: 'D3.js', percent: 30 },
  { title: 'HTML5', percent: 90 },
  { title: 'CSS3', percent: 70 },
  { title: 'Sass', percent: 40 },
];

const ml = [
  { title: 'TensorFlow', percent: 60 },
  { title: 'NLTK', percent: 50 },
  { title: 'Scikit Learn', percent: 30 },
];

const dbms = [
  { title: 'MongoDB', percent: 75 },
  { title: 'MySQL', percent: 50 },
  { title: 'Redis', percent: 30 },
  { title: 'DynamoDB', percent: 30 },
];

const tools = [
  { title: 'Git/Github', percent: 80 },
  { title: 'Vim', percent: 65 },
  { title: 'VSCode', percent: 90 },
  { title: 'XCode', percent: 50 },
  { title: 'Docker', percent: 20 },
  { title: 'LaTeX', percent: 50 },
];

export default function AboutPage() {
  const [expand, setExpand] = useState(false);

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
          <Title level={5}>{`Bachelor of Science in Computer Science`}</Title>
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

  const skill = (
    <Typography>
      <Title level={3}>Skills</Title>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          {languages.map((lang) => {
            return (
              <div className="progress-section">
                <span className="progress-title">{lang.title}</span>
                <Progress percent={lang.percent} size="small" strokeColor="#67595E" />
              </div>
            );
          })}
        </Col>
        <Col span={12}>
          {libraries.map((lib) => {
            return (
              <div className="progress-section">
                <span className="progress-title">{lib.title}</span>
                <Progress percent={lib.percent} size="small" strokeColor="#E8B4B8" />
              </div>
            );
          })}
        </Col>
      </Row>
      <Row gutter={[8, 8]}>
        <Col span={12}>
          {ml.map((item) => {
            return (
              <div className="progress-section">
                <span className="progress-title">{item.title}</span>
                <Progress percent={item.percent} size="small" strokeColor="#B6E2D3" />
              </div>
            );
          })}
          {dbms.map((item) => {
            return (
              <div className="progress-section">
                <span className="progress-title">{item.title}</span>
                <Progress percent={item.percent} size="small" strokeColor="#EED6D3" />
              </div>
            );
          })}
        </Col>
        <Col span={12}>
          {tools.map((tool) => {
            return (
              <div className="progress-section">
                <span className="progress-title">{tool.title}</span>
                <Progress percent={tool.percent} size="small" strokeColor="#A49393" />
              </div>
            );
          })}
        </Col>
      </Row>
      <Divider />
    </Typography>
  );
  const experience = (
    <Typography>
      <Title level={3}>Experience</Title>
      <Paragraph>
        <Title level={5}>Front-End Developer at Fraction</Title>
        <Text type="secondary" className="experience-sub">
          August 2019 - May 2020 | Hoboken, NJ
        </Text>
      </Paragraph>
      <div className="experience-tags">
        <Tag color="#F8989A">@React</Tag>
        <Tag color="#F8989A">@ReactNative</Tag>
        <Tag color="#F8989A">@AWSLambda</Tag>
        <Tag color="#F8989A">@APIGateway</Tag>
        <Tag color="#F8989A">@Cognito</Tag>
        <Tag color="#F8989A">@Amplify</Tag>
        <Tag color="#F8989A">@DynamoDB</Tag>
      </div>
      <Paragraph>
        Collaborate within team of five developers creating web service for users renting high-end
        designer clothing. Communcate with stakeholders to understand business requirements,
        participate in design meetings, write code, and conduct thorough testing and debuggng
      </Paragraph>
      <Paragraph>
        <Text>{`📌 What I did for `}</Text>
        <Text strong>Serverless Web Applicaton</Text>
        <ul>
          <li>
            Spearheaded planning of web development process, designing wireframing, web-site user
            flow and database schema, incorporating team and stakehollder feedback ggaiined from
            brainstorming sessons
          </li>
          <li>
            Enhancing user experience with Material UI, making the web application mobile
            application mobile friendly and dynamic
          </li>
          <li>
            Supporting back-end development, assisting team in building Rentals API with AWS Lambda
          </li>
        </ul>
        <Text>{`📌 What I did for `}</Text>
        <Text strong>React Native Mobile Application</Text>
        <ul>
          <li>
            Initiating the mobile app workflow, designing and developing the Login/Registration page
            and the Styling Profile page, routing all the backend functions from AWS Lambda using
            API Gateway
          </li>
        </ul>
      </Paragraph>
      <Divider dashed="true" />
      <Paragraph>
        <Title level={5}>Teaching Assstant at Stevens Institute of Technology</Title>
        <Text type="secondary" className="experience-sub">
          August 2018 - May 2020 | Hoboken, NJ
        </Text>
      </Paragraph>
      <div className="experience-tags">
        <Text code>CS105 Intro to Scientific Computing</Text>
        <Text code>CS347 Software Development Process</Text>
        <Text code>CS385 Computer Org. and Programming</Text>
        <Text code>CS442 Database Management Systems</Text>
        <Text code>CS523 Programming the IoT using iOS</Text>
        <Text code>CS546 Web Programming I</Text>
        <Text code>CS554 Web Programming II</Text>
      </div>
      <Paragraph>
        Served as TA for above courses. Create and grade labs, exams and papers, as well as assist
        professor with additional duties as required
      </Paragraph>
      <Paragraph>
        <Text>{`📌 What I did `}</Text>
        <ul>
          <li>
            Arranged course schedule, homework instructions, and example codes, improving the
            structure of the course
          </li>
          <li>
            Created web programming course document combining all lecture notes, lab instructions
            and lecture codebases allowing students to easily follow course materials
          </li>
          <li>
            Designed supplementary course material to facilitate student learning such as creating
            online tutorials for iOS development, teaching weekly recitation for Matlab programming,
            and helping wiith assembly language
          </li>
          <li>
            Provide open office hours to assist students wiith questions, advise on development
            projects, or offer additional help understanding course materials
          </li>
        </ul>
      </Paragraph>
      {expand && (
        <>
          <Divider dashed="true" />
          <Paragraph>
            <Title level={5}>Adjunct Instructor at SIT Pre-college program</Title>
            <Text type="secondary" className="experience-sub">
              Summer 2019 | Hoboken, NJ
            </Text>
          </Paragraph>
          <Paragraph>
            Instructed Intro to Coomputer Science and Data Structure using JavaScript coourse for
            high school students in the Exploring Career Options in Engineering and Sciencce (ECOES)
            Computer Sccience module
          </Paragraph>
          <Paragraph>
            <Text>{`📌 What I did `}</Text>
            <ul>
              <li>Developed entire curriculum, making all slides and preparing coding exercises</li>
            </ul>
          </Paragraph>
          <Divider dashed="true" />
          <Paragraph>
            <Title level={5}>Translator at Nomad Academy</Title>
            <Text type="secondary" className="experience-sub">
              May 2018 - September 2018
            </Text>
          </Paragraph>
          <Paragraph>
            Worked as a translator at Nomad Academy which is an online interactive platform that
            offers coding classes. Translated lecture videos from English to Korean for Korean
            learners who want to become a JavaScript Fullstack Developer by learning TypeScript,
            NodeJS, GraphQL, React and Apollo
          </Paragraph>
        </>
      )}
      <div className="experience-button">
        <Button type="dashed" size="small" onClick={() => setExpand(!expand)}>
          {expand ? <UpOutlined /> : <DownOutlined />}
        </Button>
      </div>
      <Divider />
    </Typography>
  );

  return (
    <div>
      <Header />
      <div className="contents">
        {education}
        {skill}
        {experience}
      </div>
    </div>
  );
}
