import React from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';

let desktopmenuStyle ={
    // border: 'solid 1px black',
    lineHeight: '0px'
}

const MenuContainer = ({langPack}) => {
    return  <div style={desktopmenuStyle}>
            <LangMenu langPack={langPack}/>
            <MainMenu langPack={langPack} />
        </div>
}

export default (props) => {


    return <React.Fragment>
        <MenuContainer 
            langPack={props.langPack} 
            />
    </React.Fragment>

    
}