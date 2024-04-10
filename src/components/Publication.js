import React, { useState, useEffect, useRef } from 'react'
import Typography from '@material-ui/core/Typography';
import MuiAlert from '@material-ui/lab/Alert';
import { useMediaQuery, Paper, makeStyles, Button, Tab, Tabs, Chip, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Snackbar } from '@material-ui/core';

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const defaultImgHeight = 150

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
        position: 'relative',
        textAlign: 'left',
        width: '60%'
    },
    typo1: {
        fontSize: 20,
        fontWeight: 'bold',
        display: 'block'
    },
    typo2: {
        fontSize: 16,
        display: 'inline'
    },
    typo3: {
        fontSize: 16,
        fontStyle: 'italic',
        display: 'block'
    },
    button: {
        marginRight: theme.spacing(1),
        height: '25px',
        fontSize: 12,
        outlineColor: "#24292e",
        backgroundColor: '#FFFFFF',
        color: '#24292e'
    },
    chip: {
        marginRight: theme.spacing(1),
        height: '20px',
        fontSize: 14,
        backgroundColor: "#3f51b5",
        color: '#FDFEFE'
    }
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
        width: '100%',
        position: 'relative',
        textAlign: 'left',
    },
    typo1: {
        fontSize: 14,
        fontWeight: 'bold',
        display: 'block'
    },
    typo2: {
        fontSize: 12,
        lineBreak: 'strict',
        display: 'inline'
    },
    typo3: {
        fontSize: 12,
        fontStyle: 'italic',
        display: 'block'
    },
    button: {
        marginRight: theme.spacing(1),
        width: '40px',
        height: '25px',
        fontSize: 12,
        outlineColor: "#24292e",
        backgroundColor: '#FFFFFF',
        color: '#24292e'
    },
    chip: {
        marginRight: theme.spacing(1),
        height: '30px',
        fontSize: 12,
        backgroundColor: "#3f51b5",
        color: '#FDFEFE'
    }
}));

const mapkey = {
    'ai4vis': 'AI4VIS',
    'ai+vis': 'AI+VIS',
    'vis-theory': 'Visualization Theory',
    'vis4ai': 'VIS4AI',
    'LLM': 'LLM',
    'sports': 'Sports',
    'urban': 'Urban'
}
const tagkey = [
    'all',
    'vis-theory',
    'ai4vis',
    // 'vis4ai',
    'ai+vis',
]

function FormattedAuthors(element) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches ? style1 : style2;

    // console.log(props)
    const authors = element.props.authors;
    const equal = element.props.equal;
    const corresponding = element.props.corresponding;

    console.log(authors)

    const host = 'Dazhen Deng'

    let authorlist = authors.split(', ')

    authorlist.forEach((value, index) => {
        if (equal != undefined && equal.includes(value)) {
            authorlist[index] = value + "*"
        }
        if (value == host) {
            if (corresponding != undefined && corresponding.includes(value)) {
                authorlist[index] = '<b><u>' + authorlist[index] + '</u></b>'
            }
            else {
                authorlist[index] = '<b>' + authorlist[index] + '</b>'
            }
        }
        else {
            if (corresponding != undefined && corresponding.includes(value)) {
                authorlist[index] = '<u>' + authorlist[index] + '</u>'
            }
        }
    });

    authorlist[authorlist.length - 1] = 'and ' + authorlist[authorlist.length - 1]

    let newauthorlist = authorlist.join(', ')

    const docString = `<Typography className={classes.typo1}>
                ${newauthorlist}
    </Typography>`

    console.log(docString)

    const doc = new DOMParser().parseFromString(docString, "text/xml");


    return <div dangerouslySetInnerHTML={{__html: docString}} />;
}

function PublicationElement(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches ? style1 : style2;

    const [height, setHeight] = useState(defaultImgHeight)
    const ref = useRef(null)
    const [open, setOpen] = React.useState(false);


    const [copy, setCopy] = React.useState(false);

    const handleCopy = () => {
        setCopy(true);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setCopy(false);
    };


    useEffect(() => {
        if (!matches)
            setHeight(ref.current.clientHeight)
    }, ref)

    const element = props.element;
    return (
        <Paper className={classes.paper} elevation={0}>
            <div className={classes.imageWrapper}
            // style={{ height: `${height}px` }}
            >
                <img src={element.src} className={classes.face}
                // style={{ height: `${height}px` }}
                />
            </div>
            <div className={classes.intro} ref={ref}>
                <Typography className={classes.typo1}>
                    {element.title}
                </Typography>
                <div>
                    {element.tags.map((value) => {
                        if (tagkey.includes(value))
                            return <Chip label={mapkey[value]} className={classes.chip} />
                        else
                            return <Chip label={mapkey[value]} className={classes.chip} style={{ backgroundColor: '#ffc107' }} />
                    })}
                </div>
                <FormattedAuthors props={element} />
                <Typography className={classes.typo3}>
                    {element.conference}
                </Typography>
                <div>
                    <Button
                        href={element.paper_url}
                        variant="outlined" className={classes.button}>
                        Paper
                    </Button>
                    {
                        !element.hasOwnProperty("video_url") || element.video_url == '' ?
                            null :
                            <Button
                                href={element.video_url} variant="outlined"
                                className={classes.button}>
                                Demo
                            </Button>
                    }
                    {
                        !element.hasOwnProperty("code") || element.code == '' ?
                            null :
                            <Button
                                href={element.code} variant="outlined"
                                className={classes.button}>
                                Code
                            </Button>
                    }
                    <Button
                        href={`https://doi.org/${element.doi}`}
                        variant="outlined" className={classes.button}>
                        Doi
                    </Button>
                    <Button
                        variant="outlined" className={classes.button} onClick={handleClickOpen}>
                        Cite
                    </Button>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                    >
                        <DialogTitle id="alert-dialog-title">
                            {"Bibtex"}
                        </DialogTitle>
                        <DialogContent>
                            <pre>
                                <code>
                                    {element.bib}
                                </code>
                            </pre>
                            {/* </DialogContentText> */}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={() => { navigator.clipboard.writeText(element.bib) && handleCopy() }}>Copy</Button>
                            <Snackbar
                                key={'copybar'}
                                backgroundColor='#4caf50'
                                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                                open={copy}
                                autoHideDuration={6000}
                                message={'copy succeeded!'}
                            >
                                <Alert severity="success">This is a success message!</Alert>
                            </Snackbar>
                        </DialogActions>
                    </Dialog>
                </div>
            </div>
        </Paper>
    )
}


function Publications(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches ? style1 : style2;
    const [keyvalue, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        setValue(newValue);
    };
    return (
        <div>
            <Typography className={classes.title}>
                {props.lang == 1 ? 'Publications' : '论文'}
            </Typography>
            <Tabs value={keyvalue} onChange={handleChange} indicatorColor="primary" aria-label="basic tabs example">
                <Tab label="All" />
                <Tab label="Vis Fundamental Research" />
                <Tab label="AI for Vis" />
                {/* <Tab label="Vis for AI"/> */}
                <Tab label="AI + Vis for Domains" />
            </Tabs>
            <Typography className={classes.typo2}>
                <b>Note:</b> The label * denotes me as co-first authors and <u>underline</u> denotes me as corresponding authors.
            </Typography>
            {props.publications.filter((element) => element.tags.includes(tagkey[keyvalue]) || keyvalue == 0).map((value, index) => {
                return (<PublicationElement
                    element={value}
                    key={index}
                />)
            })}
        </div>
    )
}
export default Publications;