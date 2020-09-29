import React from 'react';
import './lang-buttons-container.css'

import langManager from './../../../../../lang-packs/lang-manager';

import LangButton from './children/lang-button';
import Title from './../site-title/site-title'

export default (props) => {

    return <div
            id= "lang-buttons-container">
                {
                    langManager
                        .getLangPackList()
                        .map(
                            (l,i) => 
                            <LangButton key={i} langName = {l}/>
                            )
                } 
                <Title />
            </div>
}