import React, { useState } from 'react';
import { makeStyles, Avatar, Grid, Fab, Typography, Switch, Stepper, Step, StepLabel, StepContent, Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import GitHubIcon from '@material-ui/icons/GitHub';
import avatarFront from '../assets/images/avatarFront.png';
import avatarBack from '../assets/images/avatarBack.png';
import resume from '../assets/images/resume2020_black.pdf';

const useStyles = makeStyles(theme => ({
    switch: {
        textAlign: 'right',
        margin: '20px',
    },
    aboutWrapper: {
        marginBottom: '20rem',
    },
    avatarWrapper: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        perspective: `500px`,
        '&:focus': {
            '& $avatarFront': {
                transform: 'rotateX(180deg)',
            },
            '& $avatarBack': {
                transform: 'rotateX(360deg)',
            },
        },
        '&:hover': {
            '& $avatarFront': {
                transform: 'rotateX(180deg)',
            },
            '& $avatarBack': {
                transform: 'rotateX(360deg)',
            },
        },
    },
    avatarFront: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        position: `absolute`,
        WebkitBackfaceVisibility: 'hidden',
        MozBackfaceVisibility: 'hidden',
        backfaceVisivility: 'hidden',
        transition: `.8s`,
        zIndex: 1,
        boxShadow: '0 10px 8px -6px #CDCDCD',
    },
    avatarBack: {
        width: theme.spacing(35),
        height: theme.spacing(35),
        position: `absolute`,
        WebkitBackfaceVisibility: 'none',
        MozBackfaceVisibility: 'none',
        backfaceVisivility: 'none',
        transition: `.8s`,
        transform: 'rotateX(180deg)',
        boxShadow: '0 10px 8px -6px #CDCDCD',
    },
    buttonWrapper: {
        display: 'flex',
        alignItem: 'center',
        justifyContent: 'center',
        marginTop: theme.spacing(40),
        animation: `$button-animation 1.1s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
        marginBottom: theme.spacing(4),
    },
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
    title: {
        animation: `$title-animation 2s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
    },
    paragraph: {
        animation: `$paragraph-animation 2.8s 1 cubic-bezier(0, 0.78, 0.58, 1) 0.5s`,
    },
    '@keyframes button-animation': {
        '0%': {
            opacity: 0,
            transform: 'rotateX(-75deg) translateY(60px)',
        },
        '100%': {
            opacity: 1,
            transform: 'rotateX(0deg) translateY(0px)',
        },
    },
    '@keyframes title-animation': {
        '0%': {
            opacity: 0,
            transform: 'rotateX(-75deg) translateY(60px)',
        },
        '100%': {
            opacity: 1,
            transform: 'rotateX(0deg) translateY(0px)',
        },
    },
    'keyframes paragraph-animation': {
        '0%': {
            opacity: 0,
            transform: 'translateY(30px)',
        },
        '100%': {
            opacity: 1,
            transform: 'translateY(0px)',
        },
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
}));

const getSteps = () => {
    return ['Education', 'Experience', 'Project/Activities', 'interest'];
};
const getStepContentKR = step => {
    switch (step) {
        case 0:
            return (
                <Typography>
                    B.S. in <strong>Computer Science</strong> at <i>Stevens Institute of Technology</i> (2020년 5월 졸업)
                    <br />
                    M.S. in <strong>Machine Learning</strong> at <i>Stevens Institute of Technology</i> (2020년 12월 졸업 예정)
                </Typography>
            );
        case 1:
            return (
                <ul>
                    <li>현재 석사학위 한학기를 남겨두고 저에게 맞는 Software Engineer 포지션을 찾기위해 열심히 노력중입니다.</li>
                    <li>
                        맨하탄을 중심으로 의류 렌탈 서비스를 제공하는 스타트업에서 일년간 전반적인 Front-End 개발을 맡았고,
                        <br />
                        재학중인 학교 내에서 다양한 CS관련 수업의 TA로 2년간 활동하며 교수 업무 보조와 다수의 교육자료를 제작한 경력이 있습니다.{' '}
                        <br />
                        또한 이 경험을 뒷받침하여 학교에서 제공하는 교육 프로그램의 메인강사로 프로그래밍 기초수업을 도맡아 한 경험이 있습니다.
                    </li>
                    <li>
                        이전 자세한 경력사항은 이곳으로 👉🏻
                        <Button href="/experience" color="primary">
                            Experience
                        </Button>
                    </li>
                </ul>
            );
        case 2:
            return (
                <ul>
                    <li>다수의 그룹/개인 프로젝트에 참여해왔고 지금도 현재진행형입니다.</li>
                    <li>새로운 기술들과 내가 좋아하는 기술들을 깊게 배우기위해 항상 사이드 프로젝트를 진행합니다.</li>
                    <li>내가 원하는 것 보다는 많은 사람들이 필요로 하는 서비스를 개발하기 위해 항상 고민하고 노력합니다.</li>
                    <li>
                        프로젝트들 보러가기 👉🏻
                        <Button href="/experience" color="primary">
                            Projects
                        </Button>
                    </li>
                    <li>
                        즐거운 개발을 위해 협업 제의는 언제나 환영입니다! 👉🏻{' '}
                        <Button href="https://open.kakao.com/o/sfLDJ6fc" color="primary" variant="outlined">
                            오픈채팅
                        </Button>
                    </li>
                </ul>
            );
        case 3:
            return (
                <Typography>
                    1. 빠르게 변화하는 앱/웹개발관련 기술들에 가장 관심이 많습니다. 주로 프론트엔드 개발을 하지만 풀스택개발자로 거듭나기 위해 항상
                    노력합니다.
                    <br />
                    2. 대학원에서 전공중인 머신러닝 분야를 수학적 기초이론부터 실전까지 꼼꼼히 내것으로 만들기 위해 열심히 재밌게 공부중입니다. <br />
                    3. 요가🧘🏻‍♀️를 사랑합니다. 4년째 꾸준히 해왔지만 여전히 beginner입니다. <br />
                    4. 코딩만 하는 로봇이 되지 않기위해 다른분야(역사/문학/과학)의 지식을 쌓기 위한 독서를 즐겨합니다. <br />
                    5. 그 나라의 음식과 역사, 그리고 휴식을 위한 여행을 좋아합니다.
                </Typography>
            );
        default:
            return `unknown case`;
    }
};

const getStepContentEN = step => {
    switch (step) {
        case 0:
            return (
                <Typography>
                    B.S. in <strong>Computer Science</strong> at <i>Stevens Institute of Technology</i> (May 2020)
                    <br />
                    M.S. in <strong>Machine Learning</strong> at <i>Stevens Institute of Technology</i> (Dec 2020)
                </Typography>
            );
        case 1:
            return (
                <ul>
                    <li>I am actively seeking for entry-level opportunity as a Software Engineer.</li>
                    <li>
                        For more details 👉🏻
                        <Button href="/experience" color="primary">
                            Experience
                        </Button>
                    </li>
                </ul>
            );
        case 2:
            return (
                <ul>
                    <li>I've been working on many group/personal projects to make things better.</li>
                    <li>I always work on side projects to improve my skills.</li>
                    <li>
                        To see my projects 👉🏻
                        <Button href="/experience" color="primary">
                            Projects
                        </Button>
                    </li>
                    <li>
                        I am always open for collaborations! 👉🏻{' '}
                        <Button href="mailto:halfundecided@gmail.com" color="primary" variant="outlined">
                            Talk To Me
                        </Button>
                    </li>
                </ul>
            );
        case 3:
            return <Typography>I love Yoga🧘🏻‍♀️, Traveling and Web/App development.</Typography>;
        default:
            return `unknown case`;
    }
};

const About = () => {
    const classes = useStyles();
    const [korean, setKorean] = useState(true);
    const [activeStep, setActiveStep] = useState(0);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep(prevActiveStep => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep(prevActiveStep => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const handleSwitch = () => {
        setKorean(!korean);
    };
    if (korean === false) {
        return (
            <div>
                <div className={classes.switch}>
                    <span>EN</span>
                    <Switch checked={korean} onChange={handleSwitch} name="korean" color="primary" />
                    <span>KR</span>
                </div>
                <Grid container className={classes.aboutWrapper}>
                    <Grid item xs={12} className={classes.avatarWrapper}>
                        <Avatar alt="Mijeong" src={avatarFront} className={classes.avatarFront} />
                        <Avatar alt="Mijeong" src={avatarBack} className={classes.avatarBack} />
                    </Grid>
                    <Grid item xs={12} className={classes.buttonWrapper}>
                        <Fab variant="extended" size="medium" color="primary" href={resume} className={classes.margin}>
                            <SearchIcon className={classes.extendedIcon} />
                            Resume
                        </Fab>
                        <Fab variant="extended" size="medium" color="primary" href="https://github.com/halfundecided" className={classes.margin}>
                            <GitHubIcon className={classes.extendedIcon} />
                            GitHub
                        </Fab>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography className={classes.title} variant="h6" gutterBottom>
                            Hello
                            <span role="img" aria-label="hi">
                                🙇🏻‍♀️
                            </span>
                            , I'm Mijeong.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            I'm a Software Developer and a CS student pursuing M.S. in Machine Learning at Stevens Institute of Technology, currently
                            based in New York City.
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            I'm a full-time learner, I love to learn new things.
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Stepper activeStep={activeStep} orientation="vertical">
                            {steps.map((label, index) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                    <StepContent>
                                        <Typography>{getStepContentEN(index)}</Typography>
                                        <div className={classes.actionsContainer}>
                                            <div>
                                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                    Back
                                                </Button>
                                                <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                                                    {activeStep === steps.length - 1 ? 'End' : 'Next'}
                                                </Button>
                                            </div>
                                        </div>
                                    </StepContent>
                                </Step>
                            ))}
                        </Stepper>
                        {activeStep === steps.length && (
                            <Button onClick={handleReset} className={classes.button}>
                                Go back
                            </Button>
                        )}
                    </Grid>
                </Grid>
            </div>
        );
    }
    return (
        <div>
            <div className={classes.switch}>
                <span>EN</span>
                <Switch checked={korean} onChange={handleSwitch} name="korean" color="primary" />
                <span>KR</span>
            </div>
            <Grid container className={classes.aboutWrapper}>
                <Grid item xs={12} className={classes.avatarWrapper}>
                    <Avatar alt="Mijeong" src={avatarFront} className={classes.avatarFront} />
                    <Avatar alt="Mijeong" src={avatarBack} className={classes.avatarBack} />
                </Grid>
                <Grid item xs={12} className={classes.buttonWrapper}>
                    <Fab variant="extended" size="medium" color="primary" href={resume} className={classes.margin}>
                        <SearchIcon className={classes.extendedIcon} />
                        Resume
                    </Fab>
                    <Fab variant="extended" size="medium" color="primary" href="https://github.com/halfundecided" className={classes.margin}>
                        <GitHubIcon className={classes.extendedIcon} />
                        GitHub
                    </Fab>
                </Grid>
                <Grid item xs={12}>
                    <Typography className={classes.title} variant="h7" gutterBottom>
                        안녕하세요
                        <span role="img" aria-label="hi">
                            🙇🏻‍♀️
                        </span>
                        <br />
                        현재 뉴욕에서 머신러닝을 전공하며 Software Engineer로 활동하고 있는 반미정입니다.
                    </Typography>
                </Grid>
                <Grid item xs={12}>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <Typography>{getStepContentKR(index)}</Typography>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                                Back
                                            </Button>
                                            <Button variant="contained" color="primary" onClick={handleNext} className={classes.button}>
                                                {activeStep === steps.length - 1 ? '끝' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Button onClick={handleReset} className={classes.button}>
                            다시 펼치기
                        </Button>
                    )}
                </Grid>
            </Grid>
        </div>
    );
};

export default About;
