import React from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';
import deviceDetector from './../../components/utility/device-detector';
import { Link } from 'react-router-dom'

const currentDevice = deviceDetector()

let desktopmenuStyle ={
    // border: 'solid 1px black',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '30px',
    marginTop: '20px',
}


const linkStyle = {
    textDecoration: 'unset',
    color: 'unset',
}

const menuTitleContainerStyle = {
    // border: 'solid 1px black',
}



const titleStyle ={
    // border: 'solid 1px black',
    fontSize: '20pt',
    textTransform: 'uppercase',
    letterSpacing: '15px',
    fontWeight: '400',
    cursor: 'pointer',
    margin: '0px',
    display: 'flex',
    width: '100%'

    //titolo da centrare
}

const Title = () => (
    <Link style={linkStyle} to='/'>
        <span style={titleStyle}>
                Alessandro Sciaraffa
            
        </span>
    </Link>)

const MenuContainer = ({langPack}) => {
    return  <header style={desktopmenuStyle}>
            <div style={menuTitleContainerStyle}>
            {(currentDevice === 'desktop')&&<Title />}
            <MainMenu langPack={langPack}/>
            </div>
            <LangMenu langPack={langPack}/>
        </header>
}

export default MenuContainer