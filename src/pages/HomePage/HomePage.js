import React from 'react';
import { Header, MediumFeed } from '../../components';
import { Space, Typography, Divider, Tag, Carousel, Card, Table, Button, Timeline } from 'antd';
import {
  SyncOutlined,
  SnippetsOutlined,
  GithubOutlined,
  LinkedinOutlined,
  GoogleOutlined,
  InstagramOutlined,
  FileSearchOutlined,
  ArrowRightOutlined,
} from '@ant-design/icons';
import projectData from '../../data/projects';
// import resume from '../../assets/img/resume2020_mijeong_ban.pdf';
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
          let color = tag.length;
          if (color < 3) color = '#596235';
          else if (color >= 3 && color < 6) color = '#c3a6a0';
          else if (color >= 6 && color < 9) color = '#a15c38';
          else color = '#687477';

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
    tags: ['gd', 'sgd', 'mb-sgd'],
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
  const introductionEN = (
    <Typography>
      <Title level={3}>Intro</Title>
      <Title level={5}>
        {`Hi there`}
        <img src="https://media.giphy.com/media/hvRJCLFzcasrR4ia7z/giphy.gif" width="25px" />
        {` I'm Mijeong.`}
      </Title>
      <Paragraph>
        {`I find interesting and rewarding when inspirational ideas become a reality by my hands, and motivated by the conviction that this
        series of processes will someday benefit the world.`}
      </Paragraph>
      <Paragraph>
        {/* {`I am a CS student pursuing M.S. in Machine Learning at Stevens Institute of Technology, currently based in New York City.`} */}
        <ul>
          <li>
            {`👩🏻‍🎓`} <i>{`B.S. in Computer Science at Stevens Institute of Technology (May 2020)`}</i>
          </li>
          <li>
            {`🧑🏻‍🎓`}{' '}
            <i>{`M.S. in Machine Learning at Stevens Institute of Technology (Dec 2020)`}</i>
          </li>
        </ul>
      </Paragraph>
      <Paragraph>
        {`I am a full-time learner. My main interests are: `}
        <ul>
          <li>
            {`Web Development with `}
            <Text code>JavaScript ES6</Text>
            <Text code>React</Text>
            <Text code>MongoDB</Text>
            <Text code>GraphQL</Text>
          </li>
          <li>
            {`Machine Learning, especially Deep Learning with `}
            <Text code>Python</Text>
            <Text code>Keras</Text>
          </li>
          <li>{`Yoga🧘🏻‍♀️(obsessively) and Writing📝`}</li>
        </ul>
      </Paragraph>
      <Paragraph>
        <Text strong>{`What I am up to? `}</Text>
        <ul>
          <li>{`🛠 Renewing this website! - going back to a simpler UI`}</li>
          <li>
            {`📰 `}
            <Link href={`https://github.com/halfundecided/nlp_toxicity_classification_analysis`}>
              NLP project:
            </Link>{' '}
            <i>{`Comparison of Classification Models on Unintended Bias in Toxicity
            Classification`}</i>
          </li>
          <li>
            {`🔙 Revisiting React Basics by doing `}{' '}
            <Link href={`https://github.com/halfundecided/react-small-samples`}>
              simple projects
            </Link>
          </li>
          <li>{`🖋 Medium posts on Deep Learning topics`}</li>
        </ul>
      </Paragraph>
      <Paragraph>
        {`Get to know more about me through here 👉🏻 `}
        <Button
          type="text"
          shape="circle"
          icon={<FileSearchOutlined style={{ textDecoration: `none`, color: `gray` }} />}
        />
        <Button
          type="text"
          shape="circle"
          icon={<GithubOutlined style={{ textDecoration: `none`, color: `gray` }} />}
          href={`https://github.com/halfundecided`}
        />
        {` `}
        <Button
          type="text"
          shape="circle"
          icon={<LinkedinOutlined style={{ textDecoration: `none`, color: `gray` }} />}
          href={`https://www.linkedin.com/in/halfundecided/`}
        />
        {` `}
        <Button
          type="text"
          shape="circle"
          icon={<GoogleOutlined style={{ textDecoration: `none`, color: `gray` }} />}
          href={`mailto:qksalwjd93@gmail.com`}
        />
        {` `}
        <Button
          type="text"
          shape="circle"
          icon={<InstagramOutlined style={{ textDecoration: `none`, color: `gray` }} />}
          href={`https://www.instagram.com/__mijeong_is__/`}
        />
      </Paragraph>
      <Divider />
    </Typography>
  );
  const introductionKR = (
    <Typography>
      <Title level={3}>Intro</Title>
      <Title level={5}>{`안녕하세요🙇🏻‍♀️ 개발자 반미정입니다.`}</Title>
      <Paragraph>
        {`재미있고 다양한 아이디어가 나를 통해 현실화되는 과정에서 흥미와 보람을 느끼고,
        이러한 일련의 과정들이 언젠가 세상에 도움이 될 것이라는 확신을 통해 동기를 얻습니다.`}
      </Paragraph>
      <Paragraph>
        {`현재 뉴욕에서 컴퓨터 공학 전공으로 학사과정을 마친 후 머신러닝을 전공으로 석사과정을 밟고 있으며 동시에 프리랜서 개발자로도 활동중입니다.`}
      </Paragraph>
      <Paragraph>
        {`다수의 그룹/개인 프로젝트에 참여해왔고 지금도 현재진행형입니다. 새로운 기술들과 내가 좋아하는 기술들을 깊게 배우기위해 항상 사이드 프로젝트를 진행합니다.
        내가 원하는 것 보다는 많은 사람들이 필요로 하는 서비스를 개발하기 위해 항상 고민하고 노력합니다. `}
      </Paragraph>
      <Divider />
    </Typography>
  );
  const experience = (
    <Typography>
      <Title level={3}>Experience</Title>

      <Timeline mode="alternate">
        <Timeline.Item color="#ffa998">
          <Text strong>Front-End Developer</Text> at Fraction (Aug 2019 - May 2020)
        </Timeline.Item>
        <Timeline.Item color="#ffc397">
          Teaching Assistant at SIT (Aug 2018 - May 2020)
        </Timeline.Item>
        <Timeline.Item color="#18acba">
          Adjunct Instructur at SIT Pre-college program (Summer 2019)
        </Timeline.Item>
        <Timeline.Item color="#f76566">
          Translator at Nomad Academy (May 2018 - Sep 2018
        </Timeline.Item>
      </Timeline>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button type="dashed" icon={<ArrowRightOutlined />} size={`small`}>
          Learn More
        </Button>
      </div>
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
      <div className="contents">
        {introductionEN}
        {experience}
        {projects}
        {mlwork}
        {writings}
      </div>
    </div>
  );
}
