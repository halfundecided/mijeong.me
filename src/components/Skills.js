import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import { makeStyles, Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    header: {
        textAlign: 'right',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: '15px',
    },
    element: {
        fontWeight: 'bold',
        color: 'black',
    },
});

const StyledRating = withStyles({
    iconFilled: {
        color: '#ff6d75',
    },
    iconHover: {
        color: '#ff3d47',
    },
})(Rating);

function createData(tech, ability) {
    return { tech, ability };
}

const langs = [
    createData('JavaScript ES6+', 5),
    createData('TypeScript', 3.5),
    createData('Python', 3.5),
    createData('C/C++', 2),
    createData('Java', 2),
    createData('Swift', 3),
    createData('Erlang', 2.5),
    createData('OCaml', 2),
];

const lib = [
    createData('React', 4.5),
    createData('Redux', 3.5),
    createData('React Native', 4.5),
    createData('Node.js', 5),
    createData('Express', 5),
    createData('GraphQL', 3.5),
    createData('Material UI', 4.5),
    createData('D3.js', 2),
];

const databases = [createData('mongoDB', 5), createData('Redis', 3.5), createData('MySQL', 4), createData('DynamoDB', 1)];

const tools = [
    createData('Git', 4.5),
    createData('Bash', 4.5),
    createData('Vim', 4.5),
    createData('Markdown', 5),
    createData('VSCode', 5),
    createData('Jupyter Notebook', 4),
    createData('AWS', 3),
    createData('Docker', 2),
    createData('XCode', 3.5),
    createData('LaTex', 3.5),
    createData('UNIX/Linux', 4),
];
const Skills = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container className="skills">
                <Grid item xs={12}>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.header}>Programming Languages</TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {langs.map(row => (
                                    <TableRow key={row.tech}>
                                        <TableCell className={classes.element} component="th" scope="row">
                                            {row.tech}
                                        </TableCell>
                                        <TableCell>
                                            <StyledRating defaultValue={row.ability} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.header}>Libraries/Frameworks</TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {lib.map(row => (
                                    <TableRow key={row.tech}>
                                        <TableCell className={classes.element} component="th" scope="row">
                                            {row.tech}
                                        </TableCell>
                                        <TableCell>
                                            <StyledRating defaultValue={row.ability} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.header}>Databases</TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {databases.map(row => (
                                    <TableRow key={row.tech}>
                                        <TableCell className={classes.element} component="th" scope="row">
                                            {row.tech}
                                        </TableCell>
                                        <TableCell>
                                            <StyledRating defaultValue={row.ability} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                            <TableHead>
                                <TableRow>
                                    <TableCell className={classes.header}>Software/Tools</TableCell>
                                    <TableCell> </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tools.map(row => (
                                    <TableRow key={row.tech}>
                                        <TableCell className={classes.element} component="th" scope="row">
                                            {row.tech}
                                        </TableCell>
                                        <TableCell>
                                            <StyledRating defaultValue={row.ability} precision={0.5} icon={<FavoriteIcon fontSize="inherit" />} />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>
    );
};

export default Skills;
