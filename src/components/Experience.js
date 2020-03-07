import React from 'react';
import { makeStyles, Divider, Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
    container: {
        marginTop: '20px',
        color: 'black',
    },
    detail: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    job: {
        marginBottom: '30px',
    },
}));

const Experience = () => {
    const classes = useStyles();
    return (
        <div className={classes.container}>
            <div className={classes.job}>
                <Typography variant="h5">Front-End Developer</Typography>
                <Divider />
                <div className={classes.detail}>
                    <Typography variant="subtitle1" gutterBottom>
                        Fraction | Hoboken, NJ
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        August 2019 - Present
                    </Typography>
                </div>
                <Typography variant="subtitle2" gutterBottom>
                    React, React Native, AWS Lambda, API Gateway, Cognito, Amplify, DynamoDB
                </Typography>
                <Typography variant="body1" gutterBottom>
                    : Collaborate within team of five developers creating web service for users renting high-end designer clothing. Communicate with
                    stakeholders to understand business requirements, participate in design meetings, write code, and conduct thorough testing and
                    debugging
                </Typography>
                <Typography variant="button" gutterBottom>
                    what I did for Serverless Web Application
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Spearheaded planning of web development process, designing wireframing, web-site user flow and database schema, incorporating team
                    and stakeholder feedback gained from brainstorming sessions
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Enhancing user experience with Material UI, making the web application mobile friendly and dynamic
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Supporting back-end development, assisting team in building Rentals API with AWS Lambda
                </Typography>
                <Typography variant="button" gutterBottom>
                    what I did for React Native Mobile Application
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Initiating the mobile app workflow, designing and developing the Login/Registration page and the Styling Profile page, routing all
                    the backend functions from AWS Lambda using API Gateway
                </Typography>
            </div>
            <div className={classes.job}>
                <Typography variant="h5">Teaching Assistant</Typography>
                <Divider />
                <div className={classes.detail}>
                    <Typography variant="subtitle1" gutterBottom>
                        Computer Science Department at Stevens Institute of Technology | Hoboken, NJ
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        August 2018 - Present
                    </Typography>
                </div>
                <Typography variant="subtitle2" gutterBottom>
                    <ul>
                        <li>CS105 Intro to Scientific Computing</li>
                        <li>CS347 Software Development Process</li>
                        <li>CS385 Computer Org. and Programming</li>
                        <li>CS442 Database Management Systems</li>
                        <li>CS523 Programming the IoT using iOS</li>
                        <li>CS546 Web Programming I</li>
                        <li>CS554 Web Programming II</li>
                    </ul>
                </Typography>
                <Typography variant="body1" gutterBottom>
                    : Serve as TA for above courses. Create and grade labs, exams, and papers, as well as assist professor with additional duties as
                    required
                </Typography>
                <Typography variant="button" gutterBottom>
                    what I did
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Arranged course schedule, homework instructions, and example codes, improving the structure of the course
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Created web programming course document combining all lecture notes, lab instructions and lecture codebases allowing students to
                    easily follow course materials
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Design supplementary course material to facilitate student learning such as creating online tutorials for iOS development,
                    teaching weekly recitation for Matlab programming, and helping with assembly language
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Provide open office hours to assist students with questions, advise on development projects, or offer additional help
                    understanding course materials
                </Typography>
            </div>
            <div className={classes.job}>
                <Typography variant="h5">Adjunct Instructor</Typography>
                <Divider />
                <div className={classes.detail}>
                    <Typography variant="subtitle1" gutterBottom>
                        Pre-College Program at Stevens Institute of Technology | Hoboken, NJ
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        Summer 2019
                    </Typography>
                </div>
                <Typography variant="body1" gutterBottom>
                    : Instructed ​Intro to Computer Science and Data Structures using JavaScript course for high school students in the Exploring
                    Career Options in Engineering and Science (ECOES) Computer Science module
                </Typography>
                <Typography variant="button" gutterBottom>
                    what I did
                </Typography>
                <Typography variant="body2" gutterBottom>
                    <span role="img" aria-label="hi">
                        📌
                    </span>
                    Developed entire curriculum, making all slides and preparing coding exercises
                </Typography>
            </div>
            <div className={classes.job}>
                <Typography variant="h5">Translator</Typography>
                <Divider />
                <div className={classes.detail}>
                    <Typography variant="subtitle1" gutterBottom>
                        Nomad Academy | Remote
                    </Typography>
                    <Typography variant="caption" gutterBottom>
                        May 2018 - September 2018
                    </Typography>
                </div>
                <Typography variant="body1" gutterBottom>
                    : Worked as a translator at Nomad Academy which is an online interactive platform that offers coding classes. Translated lecture
                    videos from English to Korean for Korean learners who want to become a Javascript Fullstack Developer by learning Typescript,
                    NodeJS, GraphQL, React and Apollo
                </Typography>
            </div>
        </div>
    );
};

export default Experience;
