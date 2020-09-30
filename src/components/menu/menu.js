import React, { useState } from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';

const menuStyle = {
    position: "fixed",
    top: '120px',
    transition: 'right 1s',
    width: '400px'

}

const visibleMenu = {
    ...menuStyle,
    border: 'solid 1px red',
    right: "10px"

}

const hiddenMenu = {
    ...menuStyle,
    border: 'solid 1px black',
    right: '-500px'
}

const MenuContainer = ({langPack, open}) => {
    return  <div style={open?visibleMenu:hiddenMenu}>
            <LangMenu langPack={langPack}/>
            <MainMenu langPack={langPack}/>
        </div>
}

const buttonStyle = {
    position: 'fixed',
    top: '20px',
    right: '10px',
    fontSize: '40pt',
    border:'solid 1px black',
    borderRadius:'100%',
    minHeight:'80px',
    maxHeight: '80px',
    width:'80px',
    cursor:'pointer'
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
    const bttnTxt = open?'->':'<-'

    return <React.Fragment>
        <ToggleButton 
            text={bttnTxt} 
            openClose={state => setOpen(state)}
            open={open}
            />
        <MenuContainer 
            langPack={props.langPack} 
            open={open}
            />
    </React.Fragment>

    
}