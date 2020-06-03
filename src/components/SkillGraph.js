import React from 'react';
import { Grid, Divider, makeStyles } from '@material-ui/core';
import { CircularProgressbar, CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import { easeQuadInOut } from 'd3-ease';
import AnimatedProgressProvider from './AnimatedProgressProvide';
import 'react-circular-progressbar/dist/styles.css';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    divider: {
        marginTop: '20px',
        marginBottom: '20px',
    },
}));

const SkillGraph = () => {
    const classes = useStyles();
    return (
        <>
            <h2 style={{ textAlign: 'center' }}>Skills</h2>
            <h3>Languages</h3>
            <Grid container justify="flex-end" lassName={classes.root} spacing={2}>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={90} duration={2.2} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#fcafa9',
                                        trailColor: '#ffe3e1',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`JavaScript`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={70}
                        styles={buildStyles({
                            pathColor: '#fcafa9',
                            trailColor: '#ffe3e1',
                        })}
                    >
                        {`TypeScript`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/typescript.png" alt="typescript" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>70%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={90} duration={2.5} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#fcafa9',
                                        trailColor: '#ffe3e1',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`Python`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/python.png" alt="python" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={65}
                        styles={buildStyles({
                            pathColor: '#fcafa9',
                            trailColor: '#ffe3e1',
                        })}
                    >
                        {`C/C++`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/c-programming.png" alt="c" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>65%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={60}
                        styles={buildStyles({
                            pathColor: '#fcafa9',
                            trailColor: '#ffe3e1',
                        })}
                    >
                        {`Java`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/ios-filled/40/000000/java-coffee-cup-logo--v1.png" alt="java" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>60%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={50}
                        styles={buildStyles({
                            pathColor: '#fcafa9',
                            trailColor: '#ffe3e1',
                        })}
                    >
                        {`Swift`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/fluent/48/000000/swift.png" alt="swift" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>50%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={30}
                        styles={buildStyles({
                            pathColor: '#fcafa9',
                            trailColor: '#ffe3e1',
                        })}
                    >
                        {`Erlang`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/windows/32/000000/erlang.png" alt="erlang" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>30%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={20}
                        styles={buildStyles({
                            pathColor: '#fcafa9',
                            trailColor: '#ffe3e1',
                        })}
                    >
                        {`OCaml`}
                        <img style={{ width: 60, marginTop: -5 }} src="http://ocaml.org/logo/Colour/PNG/colour-logo.png" alt="ocaml" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>20%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <h3>Web Dev Libraries/Frameworks</h3>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={85} duration={3.5} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#8a817c',
                                        trailColor: '#f3ede9',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`React`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/plasticine/50/000000/react.png" alt="react" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={30}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Redux`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/redux.png" alt="redux" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>30%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={1.2} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#8a817c',
                                        trailColor: '#f3ede9',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`GraphQL`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/graphql.png" alt="graphql" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={40}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Apollo Client`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/apollo.png" alt="apollo" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>40%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={85} duration={2.0} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#8a817c',
                                        trailColor: '#f3ede9',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`React Native`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/carbon-copy/50/000000/react.png" alt="react" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={90}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Node.js`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/nodejs.png" alt="node" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>90%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={80}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Express.js`}
                        <img
                            style={{ width: 60, marginTop: -5 }}
                            src="https://www.vectorlogo.zone/logos/expressjs/expressjs-ar21.svg"
                            alt="express"
                        />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>80%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={20}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Next.js`}
                        <img style={{ width: 40, marginTop: -5 }} src="https://api.iconify.design/logos-nextjs.svg" alt="nextjs" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>20%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={20}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Vue.js`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/vue-js.png" alt="vue" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>20%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={90} duration={2.5} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#8a817c',
                                        trailColor: '#f3ede9',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`Material UI`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/40/000000/material-ui.png" alt="material" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={25}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Handlebars`}
                        <img style={{ width: 40, marginTop: -5 }} src="https://api.iconify.design/logos-handlebars.svg" alt="handlebars" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>25%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={30}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`D3.js`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/office/40/000000/graph.png" alt="d3" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>30%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={80}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`HTML5`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/metro/30/000000/html-filetype.png" alt="html" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>80%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={80}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`CSS3`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/metro/30/000000/css-filetype.png" alt="css" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>80%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={40}
                        styles={buildStyles({
                            pathColor: '#8a817c',
                            trailColor: '#f3ede9',
                        })}
                    >
                        {`Sass`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/sass.png" alt="sass" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>40%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <h3>Machine Learning</h3>
            <Grid container justify="flex-end" lassName={classes.root} spacing={2}>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={60} duration={3.0} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#f27059',
                                        trailColor: '#fedfda',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`TensorFlow`}
                                    <img
                                        style={{ width: 40, marginTop: -5 }}
                                        src="https://upload.wikimedia.org/wikipedia/commons/2/2d/Tensorflow_logo.svg"
                                        alt="tensorflow"
                                    />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={50}
                        styles={buildStyles({
                            pathColor: '#f27059',
                            trailColor: '#fedfda',
                        })}
                    >
                        {`NLTK`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/metro/26/000000/python.png" alt="dynamodb" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>50%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={30}
                        styles={buildStyles({
                            pathColor: '#f27059',
                            trailColor: '#fedfda',
                        })}
                    >
                        {`Scikit Learn`}
                        <img
                            style={{ width: 50, marginTop: -5 }}
                            src="https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg"
                            alt="scikit"
                        />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>30%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <h3>DBMS</h3>
            <Grid container lassName={classes.root} spacing={2}>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={75} duration={1.8} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#84b59f',
                                        trailColor: '#eafbf3',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`MongoDB`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/40/000000/mongodb.png" alt="mongodb" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={65} duration={2.6} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#84b59f',
                                        trailColor: '#eafbf3',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`MySQL`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt="mysql" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={30}
                        styles={buildStyles({
                            pathColor: '#84b59f',
                            trailColor: '#eafbf3',
                        })}
                    >
                        {`Redis`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/redis.png" alt="redis" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>30%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={30}
                        styles={buildStyles({
                            pathColor: '#84b59f',
                            trailColor: '#eafbf3',
                        })}
                    >
                        {`DynamoDB`}
                        {/* <img style={{ marginTop: -5 }} src="" alt="dynamodb" /> */}
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>30%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
            </Grid>
            <Divider className={classes.divider} />
            <h3>Software/Tools</h3>
            <Grid container justify="flex-end" lassName={classes.root} spacing={2}>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={80} duration={3.0} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#50808e',
                                        trailColor: '#dcecf1',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`Git/Github`}
                                    <img style={{ marginTop: -5 }} src="https://img.icons8.com/nolan/48/github.png" alt="git" />
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <AnimatedProgressProvider valueStart={0} valueEnd={50} duration={1.4} easingFunction={easeQuadInOut}>
                        {value => {
                            const roundedValue = Math.round(value);
                            return (
                                <CircularProgressbarWithChildren
                                    value={value}
                                    styles={buildStyles({
                                        pathColor: '#50808e',
                                        trailColor: '#dcecf1',
                                        pathTransition: 'none',
                                    })}
                                >
                                    {`Vim`}
                                    {/* <img style={{ marginTop: -5 }} src="https://img.icons8.com/ios-filled/50/000000/mysql-logo.png" alt="mysql" /> */}
                                    <div style={{ fontSize: 12, marginTop: -2 }}>
                                        <strong>{`${roundedValue}%`}</strong>
                                    </div>
                                </CircularProgressbarWithChildren>
                            );
                        }}
                    </AnimatedProgressProvider>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={90}
                        styles={buildStyles({
                            pathColor: '#50808e',
                            trailColor: '#dcecf1',
                        })}
                    >
                        {`VSCode`}
                        {/* <img
                            style={{ marginTop: -5 }}
                            src="https://github.com/dhanishgajjar/vscode-icons/blob/master/linux/github.png"
                            alt="vscode"
                        /> */}
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>90%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={50}
                        styles={buildStyles({
                            pathColor: '#50808e',
                            trailColor: '#dcecf1',
                        })}
                    >
                        {`XCode`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/xcode.png" alt="xcode" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>50%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={20}
                        styles={buildStyles({
                            pathColor: '#50808e',
                            trailColor: '#dcecf1',
                        })}
                    >
                        {`Docker`}
                        <img style={{ marginTop: -5 }} src="https://img.icons8.com/color/48/000000/docker.png" alt="docker" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>20%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
                <Grid item xs={6} sm={3} md={2}>
                    <CircularProgressbarWithChildren
                        value={40}
                        styles={buildStyles({
                            pathColor: '#50808e',
                            trailColor: '#dcecf1',
                        })}
                    >
                        {`LaTeX`}
                        <img style={{ width: 40, marginTop: -5 }} src="https://img.icons8.com/carbon-copy/100/000000/document.png" alt="latex" />
                        <div style={{ fontSize: 12, marginTop: -2 }}>
                            <strong>40%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                </Grid>
            </Grid>
        </>
    );
};

export default SkillGraph;
