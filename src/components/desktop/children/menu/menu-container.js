import React from 'react';
import './menu-container.css'

import LangButtonsContainer from './lang-buttons-container/lang-buttons-container'
import Menu from './main-menu/main-menu-container'
export default (props) => {
    return <div
            id = "menu-container">
                <LangButtonsContainer langPack = {props.langPack} />
                <Menu langPack = {props.langPack} />
            </div>
}