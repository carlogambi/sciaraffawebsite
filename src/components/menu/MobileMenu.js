import React, { useState } from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';
import  {Link} from 'react-router-dom';


const menuStyle = {
    position: "fixed",
    top: '10%',
    transition: 'left 1s',
    width: '100%',
    backgroundColor: 'white',
    zIndex: '10',
    fontWeight: '300'

}

const visibleMenu = {
    ...menuStyle,
    left: "0px"

}

const hiddenMenu = {
    ...menuStyle,
    left: '100%'
}

const MenuContainer = ({langPack, open, setOpen}) => {
    return  <div style={open?visibleMenu:hiddenMenu}>
            <LangMenu langPack={langPack}/>
            <MainMenu langPack={langPack} setOpen={oc => setOpen(oc)} open={open}/>
        </div>
}

const buttonStyle = {
    position: 'fixed',
    top: '0.2%',
    right: '10px',
    fontSize: '30pt',
    borderRadius:'100%',
    minHeight:'60px',
    maxHeight: '60px',
    width:'60px',
    cursor:'pointer',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '11',
    fontWeight: '800',
}


const ToggleButton = (props) => {
    return <div
        style={buttonStyle}
        onClick={
            () => props.openClose(!props.open)
        }
        >
        {props.text}
    </div>
}

const titleStyle = {
    // border: 'solid black 1px',
    textAlign: 'left',
    paddingLeft: '3px',
    width: 'fit-content',
    maxWidth: '80%',
    fontWeight: '500',
}

const MobileMenu = (props) => {
    const [open, setOpen] = useState(false);
    const bttnTxt = open?'>':'='

    return <React.Fragment>
        <Link to='/' style={{ textDecoration: 'none', color: 'black', textAlign: 'left'}}>
        <h2 style={titleStyle}>{'alessandro sciaraffa'.toUpperCase()}</h2>
        </Link>
        <ToggleButton 
            text={bttnTxt} 
            openClose={state => setOpen(state)}
            open={open}
            />
        <MenuContainer 
            langPack={props.langPack} 
            open={open}
            setOpen={oc => setOpen(oc)}
            />
    </React.Fragment>

    
}
export default MobileMenu