import React from 'react';
import LangMenu from './components/lang-menu';
import MainMenu from './components/main-menu';



const MenuContainer = ({langPack}) => {
    return  <div>
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