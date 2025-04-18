import React,{useState} from 'react';
import {Typography,makeStyles, useMediaQuery, Link} from '@material-ui/core'


const usePCStyles = makeStyles(theme => ({
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        margin: '5px'
    },
    paper: {
        padding: '15px',
        margin: '5px',
        display: 'flex',
        alignItems: 'start',
    },
    imageWrapper: {
        display: 'block',
        width: '40%',
        height: '100%'
    },
    face: {
        objectFit: 'scale-down',
        position: 'relative',
        width: '90%',
    },
    intro: {
        fontFamily: "Roboto, Arial, Sans-Serif",
        fontSize: 16
    },
    inlinewrapper: {
        color: 'black',
        display: 'inline-flex'
    },
    inlineIcon: {
        height: '30px',
        margin: '2px',
        objectFit: 'scale-down',
    },
    contactText: {
        display: 'block',
        fontSize: 16,
        display: 'inline'
    },
    button: {
        margin: theme.spacing(1),
        height: '25px',
        fontSize: 12,
        backgroundColor: "#AAAAAA", 
        color: '#FDFEFE'
    },
}));

const useMBStyles = makeStyles(theme => ({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: '5px'
    },
    paper: {
        padding: '15px',
        margin: '5px',
    },
    imageWrapper: {
        width: '100%'
    },
    face: {
        objectFit: 'scale-down',
        position: 'relative',
        maxWidth: '80%',
        maxHeight: '200px'
    },
    intro: {
        fontFamily: "Roboto, Arial, Sans-Serif",
        fontSize: 12
    },
    inlinewrapper: {
        color: 'black',
        display: 'inline-flex'
    },
    inlineIcon: {
        color: 'red',
        height: '20px',
        margin: '2px',
        objectFit: 'scale-down',
    },
    contactText: {
        fontSize: 14,
        display: 'inline'
    },
    button: {
        margin: theme.spacing(1),
        width: '40px',
        height: '25px',
        fontSize: 12,
        backgroundColor: "#AAAAAA", 
        color: '#FDFEFE'
    },
}));


function Honors(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;
    
    return (
        <div>
            <Typography className={classes.title}>
                {props.lang==1?'Honors':'荣誉奖励'}
            </Typography>
            <ul className={classes.intro}>
            {props.list.map((value, index) => {
            return <li
                    key={index}
                ><div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography className={classes.contactText}>{value.content}</Typography>
                    <Typography className={classes.contactText}>{value.date}</Typography>
                </div></li>
            })}
            </ul>

        </div>
    )
}
export default Honors;