import React, { useState } from 'react'
import ReactDom from 'react-dom'
import { Typography } from '@material-ui/core'
import { TranslateTwoTone } from '@material-ui/icons'
import {IconButton} from '@material-ui/core'
import {AppBar} from '@material-ui/core'
import Timeline from './components/Timeline'
import PersonalIntro from './components/personalIntro'
import Publications from './components/Publication'
import { makeStyles } from '@material-ui/styles'
import data from "./components/content";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import './index.css';
import News from './components/News'
import {Button} from '@material-ui/core'
import Honors from './components/Honors'
import Services from './components/Services'



const usePCStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh'
    },
    main: {
        marginLeft: `calc(50% - 450px)`,
        width: '900px'
    },
    header: {
        height: '80px',
        // marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#24292e'
    },
    elements:{
        height: '100%',
        width: '900px',
        justifyContent: 'space-between',
        display: 'flex'
        // marginLeft: `calc(50% - 450px)`,
    },
    mainBody: {
        width: '100%',
        marginTop: '80px',
        // height: `calc(100% - 40px)`,
        overflowY: 'auto'
    },
    typography: {
        fontSize: 30,
        width: '400px',
        margin: '15px',
        color: '#FDFEFE'
    },
    buttonGroup:{
        width: '150px',
        height: '80px',
        display: 'flex',
        alignContent: 'center'
    },
    button:{
        color:'white',
        // marginRight: 0,
    },
    buttonText:{
        color: 'white',
        margin: '5px',
        fontSize: '20px'
    },
    logo: {
        width: '60px',
        margin: '5px'
    }
}));

const useMBStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh'
    },
    main: {
        width: '100vw',
        height: '100vh'
    },
    header: {
        width: '100%',
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#24292e'
    },
    elements:{
        width: '80vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        // marginLeft: `calc(50% - 450px)`,
    },
    mainBody: {
        width: '100%',
        marginTop: '40px',
        // height: `calc(100% - 40px)`,
        overflowY: 'scroll'
    },
    typography: {
        fontSize: 18,
        margin: '5px',
        color: '#FDFEFE'
    },
    buttonGroup:{
        width: '90px',
        height: '40px',
        display: 'flex',
        alignContent: 'center'
    },
    button:{
        color:'white',
        fontSize: 16
        // marginRight: 0,
    },
    buttonText:{
        width: '45px',
        color: 'white',
        margin: '5px',
        fontSize: 14
    },
    logo: {
        width: '20px',
        margin: '5px'
    }
}));

function App(props) {
    const matches = useMediaQuery('(min-width:900px)');
    const style1 = usePCStyles();
    const style2 = useMBStyles();
    const classes = matches? style1: style2;

    const [langOpt, setCount] = useState(1);

    const lang = ['中文','En']
    
    const handleClick = () => {
        setCount(1-langOpt)
    };
    return (
        <div className={classes.main}>
            <AppBar className={classes.header}>
                <div className={classes.elements}>
                    <Typography className={classes.typography}>
                        Dazhen Deng (邓达臻)
                    </Typography>
                    <Button  onClick={handleClick} className={classes.buttonGroup}>
                        <TranslateTwoTone fontSize="medium" className={classes.button}/>
                        <Typography justifyContent='center' className={classes.buttonText}>{lang[langOpt]}</Typography>
                    </Button>
                </div>
                {/* <a href='https://zjuidg.org/'>
                    <img src={logo} className={classes.logo} />
                </a> */}
            </AppBar>
            <div className={classes.mainBody}>
                <PersonalIntro content={data.intro[langOpt]} contact={data.contact} lang={langOpt}/>
                {/* <Timeline experience={data.experience[langOpt]} lang={langOpt}/> */}
                <News news={data.news} lang={langOpt}/>
                <Publications publications={data.publications} lang={langOpt}/>
                <Honors list={data.honors} lang={langOpt}/>
                <Services list={data.services} lang={langOpt}/>
            </div>
        </div>
    )
};

ReactDom.render(
    <App/>,
    document.getElementById('root')
)
// const root = ReactDOM.createRoot(
//     document.getElementById('root')
//   );

// const element = <h1>Hello, world</h1>;
// root.render(element);