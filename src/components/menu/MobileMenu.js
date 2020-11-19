import React, { useState } from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';


const menuStyle = {
    position: "fixed",
    top: '15%',
    transition: 'left 1s',
    width: '100%',
    backgroundColor: 'white',
    zIndex: '10'

}

const visibleMenu = {
    ...menuStyle,
    // border: 'solid 1px black',
    left: "0px"

}

const hiddenMenu = {
    ...menuStyle,
    // border: 'solid 1px black',
    left: '700px'
}

const MenuContainer = ({langPack, open, setOpen}) => {
    return  <div style={open?visibleMenu:hiddenMenu}>
            <LangMenu langPack={langPack}/>
            <MainMenu langPack={langPack} setOpen={oc => setOpen(oc)} open={open}/>
        </div>
}

const dontSelectThis = {
    userSelect: 'none',
    WebkitUserSelect: 'none',
    msUserSelect: 'none',
    WebkitTouchCallout: 'none',
    OUserSelect: 'none',
    MozUserSelect: 'none',
}

const buttonStyle = {
    position: 'fixed',
    top: '0.2%',
    right: '10px',
    fontSize: '30pt',
    // border:'solid 1px black',
    borderRadius:'100%',
    minHeight:'60px',
    maxHeight: '60px',
    width:'60px',
    cursor:'pointer',
    // backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '11',
    fontWeight: '800',
    ...dontSelectThis
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
    maxWidth: '80%'
}

const MobileMenu = (props) => {
    const [open, setOpen] = useState(false);
    const bttnTxt = open?'>':'='

    return <React.Fragment>
        <h2 style={titleStyle}>{'alessandro sciaraffa'.toUpperCase()}</h2>
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