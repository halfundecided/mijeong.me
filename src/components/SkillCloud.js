import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TagCloud } from 'react-tagcloud';

const useStyles = makeStyles(theme => ({
    wrapper: {
        marginTop: '3rem',
        marginBottom: '5rem',
        fontFamily: 'Roboto',
    },
    language: {
        width: '40%',
        textAlign: 'left',
        float: 'right',
        animation: `$skill-animation 1s 1 cubic-bezier(0, 0.2, 0.58, 1.5)`,
    },
    ml: {
        width: '70%',
        textAlign: 'right',
        animation: `$skill-animation 4s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
    },
    web: {
        width: '100%',
        textAlign: 'left',
        marginTop: '10px',
        animation: `$skill-animation 2s 1 cubic-bezier(0, 0.78, 0.58, 2)`,
    },
    tool: {
        width: '60%',
        textAlign: 'right',
        float: 'right',
        animation: `$skill-animation 5s 1 cubic-bezier(0, 0.78, 0.58, 1)`,
    },
    '@keyframes skill-animation': {
        '0%': {
            opacity: 0,
            transform: 'rotateX(-65deg) translateY(50px)',
        },
        '100%': {
            opacity: 1,
            transform: 'rotateX(0deg) translateY(0px)',
        },
    },
}));
const languages = [
    { value: 'TypeScript', count: 20 },
    { value: 'C', count: 18 },
    { value: 'JavaScript', count: 40 },
    { value: 'C/C++', count: 28 },
    { value: 'Java', count: 20 },
    { value: 'Python', count: 38 },
    { value: 'Swift', count: 20 },
    { value: 'Erlang', count: 10 },
    { value: 'OCaml', count: 7 },
];
const ml = [
    { value: 'TensorFlow', count: 40 },
    { value: 'Keras', count: 38 },
    { value: 'NLTK', count: 30 },
    { value: 'Scikit Learn', count: 20 },
];
const web = [
    { value: 'React', count: 40 },
    { value: 'Redux', count: 32 },
    { value: 'React Native', count: 38 },
    { value: 'Node.js', count: 40 },
    { value: 'Express.js', count: 35 },
    { value: 'GraphQL', count: 28 },
    { value: 'Material UI', count: 32 },
    { value: 'D3.js', count: 14 },
    { value: 'mongoDB', count: 28 },
    { value: 'Redis', count: 18 },
    { value: 'MySQL', count: 20 },
    { value: 'DynamoDB', count: 14 },
    { value: 'HTML5', count: 18 },
    { value: 'CSS3', count: 18 },
    { value: 'jQuery', count: 18 },
    { value: 'NPM', count: 16 },
    { value: 'Yarn', count: 16 },
    { value: 'AWS Lambda', count: 12 },
    { value: 'API Gateway', count: 12 },
    { value: 'Handlebars', count: 10 },
    { value: 'Apollo Client', count: 30 },
    { value: 'Sass', count: 12 },
    { value: 'Bootstrap', count: 18 },
];
const tools = [
    { value: 'Git', count: 40 },
    { value: 'Bash', count: 18 },
    { value: 'Jupyter Notebook', count: 36 },
    { value: 'Vim', count: 28 },
    { value: 'Markdown', count: 20 },
    { value: 'VSCode', count: 38 },
    { value: 'AWS', count: 34 },
    { value: 'XCode', count: 10 },
    { value: 'Docker', count: 7 },
    { value: 'Latex', count: 12 },
    { value: 'UNIX/Linux', count: 14 },
];

const option1 = {
    luminosity: 'dark',
    hue: 'orange',
};

const option2 = {
    luminosity: 'brignt',
    hue: 'blue',
};

const option3 = {
    luminosity: 'bright',
    hue: 'green',
};
const option4 = {
    luminosity: 'bright',
    hue: 'purple',
};
const SkillCloud = () => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <TagCloud className={classes.language} minSize={12} maxSize={40} shuffle="true" colorOptions={option1} tags={languages} />
            <TagCloud className={classes.ml} minSize={12} maxSize={36} shuffle="true" colorOptions={option4} tags={ml} />
            <TagCloud className={classes.web} minSize={12} maxSize={40} shuffle="true" colorOptions={option2} tags={web} />
            <TagCloud className={classes.tool} minSize={12} maxSize={38} shuffle="true" colorOptions={option3} tags={tools} />
        </div>
    );
};

export default SkillCloud;
