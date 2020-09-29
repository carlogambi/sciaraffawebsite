import React from 'react';
import './main-menu-container.css'
import MainMenuIem from './children/main-menu-item';

export default (props) => {
    return <div id="main-menu">
        {
            props
                .langPack
                .menuStructure
                .map((l,i) => {
                    return < MainMenuIem key={i} item={l} />;
                })
        }
    </div>
}