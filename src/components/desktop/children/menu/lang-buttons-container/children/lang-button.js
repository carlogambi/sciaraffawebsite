import React from 'react';
import langManager from '../../../../../../lang-packs/lang-manager';
import changeLangEvent from './../../../../../../custom-events/change-lang-event';
import './lang-button.css'

export default (props) => {
return <span 
        className = {
                "lang-button "
                +(
                (langManager.getCurrentLangName() === props.langName)?
                'current-lang':
                null)
            } 
        onClick = {() => {
            changeLangEvent.trigger(props.langName)
        }}
        >
            {props.langName}
        </span>
}