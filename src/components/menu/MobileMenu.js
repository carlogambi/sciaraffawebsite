import React, { useState } from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';


const menuStyle = {
    position: "fixed",
    top: '120px',
    transition: 'right 1s',
    width: '350px',
    backgroundColor: 'white',
    zIndex: '10'

}

const visibleMenu = {
    ...menuStyle,
    border: 'solid 1px black',
    right: "10px"

}

const hiddenMenu = {
    ...menuStyle,
    border: 'solid 1px black',
    right: '-500px'
}

const MenuContainer = ({langPack, open, setOpen}) => {
    return  <div style={open?visibleMenu:hiddenMenu}>
            <LangMenu langPack={langPack}/>
            <MainMenu langPack={langPack} setOpen={oc => setOpen(oc)} open={open}/>
        </div>
}

const buttonStyle = {
    position: 'fixed',
    top: '50px',
    right: '10px',
    fontSize: '30pt',
    border:'solid 1px black',
    borderRadius:'100%',
    minHeight:'60px',
    maxHeight: '60px',
    width:'60px',
    cursor:'pointer',
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
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

export default (props) => {
    const [open, setOpen] = useState(false);
    const bttnTxt = open?'>':'='

    return <React.Fragment>
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